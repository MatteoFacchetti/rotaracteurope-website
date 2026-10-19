import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SPC_SEARCH = "https://spc.rotary.org/apiNew/Search";
const SPC_ORIGIN = "https://spc.rotary.org";

const EUROPEAN_COUNTRIES = [
  "Albania",
  "Andorra",
  "Austria",
  "Belgium",
  "Bosnia and Herzegovina",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "England",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Kosovo",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Moldova",
  "Monaco",
  "Montenegro",
  "Netherlands",
  "North Macedonia",
  "Northern Ireland",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "San Marino",
  "Scotland",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Turkey",
  "Ukraine",
  "Wales",
];

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outPath = path.join(root, "src/data/spc-projects.json");

function imageUrl(raw) {
  if (!raw) return null;
  if (/^https?:\/\//i.test(raw)) return raw;
  return `${SPC_ORIGIN}/azureImages/${raw}`;
}

function shorten(text, max = 280) {
  const clean = String(text || "").replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).trimEnd()}…`;
}

function normalize(raw) {
  if (!raw?.nfKey || !raw?.title) return null;
  const partners = raw.project_partner_type;
  return {
    id: raw.nfKey,
    title: String(raw.title).trim(),
    summary: shorten(raw.summary || raw.description || ""),
    country: String(raw.countryName || "Unknown").trim(),
    city: raw.city ? String(raw.city).trim() : null,
    status: raw.project_Status_Name || null,
    startDate: raw.startDate || null,
    endDate: raw.endDate || null,
    imageUrl: imageUrl(raw.url),
    spcUrl: `${SPC_ORIGIN}/project?guid=${raw.nfKey}`,
    partnerTypes: Array.isArray(partners)
      ? partners.filter(Boolean)
      : partners
        ? [partners]
        : [],
  };
}

async function searchCountry(country) {
  const body = {
    variation: "en",
    limit: "200",
    clubKey: "",
    memberId: "",
    photo: "",
    keyword: "",
    areaOfFocus: "",
    riyear: "",
    zone: "",
    status: "",
    languages: "",
    category: "",
    clubId: "",
    clubName: "",
    district: "",
    clubType: "Rotaract Club",
    country,
  };

  const res = await fetch(SPC_SEARCH, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(
      `SPC search failed for ${country} (${res.status}): ${text.slice(0, 200)}`,
    );
  }

  const json = await res.json();
  return Array.isArray(json) ? json : [];
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

console.log("Fetching Rotaract projects from Rotary Service Project Center…");

const byId = new Map();
const errors = [];
const cappedCountries = [];

for (let i = 0; i < EUROPEAN_COUNTRIES.length; i++) {
  const country = EUROPEAN_COUNTRIES[i];
  console.log(`[${i + 1}/${EUROPEAN_COUNTRIES.length}] ${country}`);
  try {
    const raw = await searchCountry(country);
    if (raw.length >= 200) cappedCountries.push(country);
    for (const item of raw) {
      const project = normalize(item);
      if (project) byId.set(project.id, project);
    }
  } catch (err) {
    errors.push({ country, message: err instanceof Error ? err.message : String(err) });
    console.warn(`  ! ${errors.at(-1).message}`);
  }
  await sleep(120);
}

const projects = [...byId.values()].sort((a, b) => {
  const da = a.startDate || a.endDate || "";
  const db = b.startDate || b.endDate || "";
  return db.localeCompare(da) || a.title.localeCompare(b.title);
});

const payload = {
  fetchedAt: new Date().toISOString(),
  source: SPC_SEARCH,
  countryCount: EUROPEAN_COUNTRIES.length,
  projectCount: projects.length,
  cappedCountries,
  errors,
  projects,
};

await mkdir(path.dirname(outPath), { recursive: true });
await writeFile(outPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

console.log(`Wrote ${payload.projectCount} projects to ${path.relative(root, outPath)}`);
if (cappedCountries.length) {
  console.log(`Hit the 200-result SPC cap for: ${cappedCountries.join(", ")}`);
}
