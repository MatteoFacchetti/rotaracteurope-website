import { defineConfig } from "astro/config";

const onGitHub = process.env.GITHUB_ACTIONS === "true";
const repo = process.env.GITHUB_REPOSITORY ?? "Rotaract-Europe/rotaracteurope-website";
const [owner, name] = repo.split("/");

export default defineConfig({
  site: onGitHub ? `https://${owner}.github.io` : "http://localhost:4321",
  base: onGitHub ? `/${name}` : "/",
  trailingSlash: "always",
});
