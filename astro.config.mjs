// @ts-check
import pagefind from "astro-pagefind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({ site: "https://kquote.site", integrations: [pagefind() /*pagefind has to always be last */], });
