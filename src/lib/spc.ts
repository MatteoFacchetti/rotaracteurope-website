const SPC_SEARCH = "https://spc.rotary.org/apiNew/Search";
const SPC_ORIGIN = "https://spc.rotary.org";

/**
 * SPC country labels that cover E.R.I.C. Europe.
 * The UK is split in SPC (England / Scotland / Wales / Northern Ireland).
 */
export const EUROPEAN_COUNTRIES = [
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
] as const;

export type SpcProject = {
  id: string;
  title: string;
  summary: string;
  country: string;
  city: string | null;
  status: string | null;
  startDate: string | null;
  endDate: string | null;
  imageUrl: string | null;
  spcUrl: string;
  partnerTypes: string[];
};

export type SpcProjectsPayload = {
  fetchedAt: string;
  source: string;
  countryCount: number;
  projectCount: number;
  cappedCountries: string[];
  errors: { country: string; message: string }[];
  projects: SpcProject[];
};

type RawSpcProject = {
  nfKey?: string;
  title?: string;
  summary?: string;
  description?: string;
  countryName?: string;
  city?: string | null;
  project_Status_Name?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  url?: string | null;
  project_partner_type?: string[] | string | null;
};

function imageUrl(raw: string | null | undefined): string | null {
  if (!raw) return null;
  if (/^https?:\/\//i.test(raw)) return raw;
  return `${SPC_ORIGIN}/azureImages/${raw}`;
}

function partnerTypes(raw: RawSpcProject["project_partner_type"]): string[] {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw.filter(Boolean);
  return [raw];
}

function normalize(raw: RawSpcProject): SpcProject | null {
  if (!raw.nfKey || !raw.title) return null;
  return {
    id: raw.nfKey,
    title: raw.title.trim(),
    summary: (raw.summary || raw.description || "").trim(),
    country: raw.countryName?.trim() || "Unknown",
    city: raw.city?.trim() || null,
    status: raw.project_Status_Name || null,
    startDate: raw.startDate || null,
    endDate: raw.endDate || null,
    imageUrl: imageUrl(raw.url),
    spcUrl: `${SPC_ORIGIN}/project?guid=${raw.nfKey}`,
    partnerTypes: partnerTypes(raw.project_partner_type),
  };
}

async function searchCountry(country: string): Promise<RawSpcProject[]> {
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
    throw new Error(`SPC search failed for ${country} (${res.status}): ${text.slice(0, 200)}`);
  }

  const json = await res.json();
  if (!Array.isArray(json)) return [];
  return json as RawSpcProject[];
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchEuropeanRotaractProjects(
  onProgress?: (country: string, index: number, total: number) => void,
): Promise<SpcProjectsPayload> {
  const byId = new Map<string, SpcProject>();
  const errors: SpcProjectsPayload["errors"] = [];
  const cappedCountries: string[] = [];
  const total = EUROPEAN_COUNTRIES.length;

  for (let i = 0; i < total; i++) {
    const country = EUROPEAN_COUNTRIES[i];
    onProgress?.(country, i + 1, total);
    try {
      const raw = await searchCountry(country);
      if (raw.length >= 200) cappedCountries.push(country);
      for (const item of raw) {
        const project = normalize(item);
        if (!project) continue;
        byId.set(project.id, project);
      }
    } catch (err) {
      errors.push({
        country,
        message: err instanceof Error ? err.message : String(err),
      });
    }
    await sleep(120);
  }

  const projects = [...byId.values()].sort((a, b) => {
    const da = a.startDate || a.endDate || "";
    const db = b.startDate || b.endDate || "";
    return db.localeCompare(da) || a.title.localeCompare(b.title);
  });

  return {
    fetchedAt: new Date().toISOString(),
    source: SPC_SEARCH,
    countryCount: EUROPEAN_COUNTRIES.length,
    projectCount: projects.length,
    cappedCountries,
    errors,
    projects,
  };
}

export function formatProjectDate(iso: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function displayCountry(country: string): string {
  if (
    country === "England" ||
    country === "Scotland" ||
    country === "Wales" ||
    country === "Northern Ireland"
  ) {
    return `${country} (UK)`;
  }
  if (country === "Czech Republic") return "Czechia";
  return country;
}

export function countriesInPayload(payload: SpcProjectsPayload): string[] {
  return [...new Set(payload.projects.map((p) => p.country))].sort((a, b) =>
    displayCountry(a).localeCompare(displayCountry(b)),
  );
}
