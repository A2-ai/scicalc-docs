// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { starlightKatex } from "starlight-katex";

// https://astro.build/config
export default defineConfig({
  site: process.env.ASTRO_SITE || "http://localhost",
  base: process.env.ASTRO_BASE || "/",
  integrations: [
    starlight({
      title: "scicalc",
      customCss: ["./src/styles/custom.css"],
      plugins: [starlightKatex()],
      components: { SiteTitle: "./src/components/VersionSelect.astro" },
      logo: { src: "./src/assets/logo.png", alt: "Logo" },
      favicon: "/images/favicon.png",
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/a2-ai/scicalc' }],
      sidebar: [
    {
      label: "Articles",
      items: [
        {
          label: "Getting Started",
          items: [
            { label: "scicalc", slug: "articles/scicalc" }
          ]
        }
      ]
    },
    {
      label: "Reference",
      items: [
        {
          label: "File Manipulations",
          collapsed: true,
          items: [
            { label: "read_file_with_hash", slug: "reference/read_file_with_hash" },
            { label: "read_hashed_file", slug: "reference/read_hashed_file" },
            { label: "write_file_with_hash", slug: "reference/write_file_with_hash" }
          ]
        },
        {
          label: "Demographics",
          collapsed: true,
          items: [
            { label: "is_asian", slug: "reference/is_asian" },
            { label: "is_black", slug: "reference/is_black" },
            { label: "is_white", slug: "reference/is_white" },
            { label: "is_other", slug: "reference/is_other" },
            { label: "racen", slug: "reference/racen" },
            { label: "is_hispanic_or_latino", slug: "reference/is_hispanic_or_latino" },
            { label: "is_not_hispanic_or_latino", slug: "reference/is_not_hispanic_or_latino" },
            { label: "ethnicn", slug: "reference/ethnicn" },
            { label: "is_female", slug: "reference/is_female" },
            { label: "sexf", slug: "reference/sexf" }
          ]
        },
        {
          label: "Vitals",
          collapsed: true,
          items: [
            { label: "agec", slug: "reference/agec" },
            { label: "bmi", slug: "reference/bmi" },
            { label: "bmic", slug: "reference/bmic" },
            { label: "ibw", slug: "reference/ibw" },
            { label: "aibw", slug: "reference/aibw" },
            { label: "bsa", slug: "reference/bsa" },
            { label: "dubois_bsa", slug: "reference/dubois_bsa" },
            { label: "mosteller_bsa", slug: "reference/mosteller_bsa" },
            { label: "crcl", slug: "reference/crcl" },
            { label: "rfc", slug: "reference/rfc" },
            { label: "hfc", slug: "reference/hfc" },
            { label: "egfr", slug: "reference/egfr" },
            { label: "aegfr", slug: "reference/aegfr" },
            { label: "ckdepi_2021_egfr", slug: "reference/ckdepi_2021_egfr" },
            { label: "ckdepi_2009_egfr", slug: "reference/ckdepi_2009_egfr" },
            { label: "ckdepi_2021_egfr_cystatin", slug: "reference/ckdepi_2021_egfr_cystatin" },
            { label: "mdrd_egfr", slug: "reference/mdrd_egfr" },
            { label: "schwartz_egfr", slug: "reference/schwartz_egfr" }
          ]
        },
        {
          label: "Units",
          collapsed: true,
          items: [
            { label: "check_for_unique_units", slug: "reference/check_for_unique_units" },
            { label: "get_unique_units_df", slug: "reference/get_unique_units_df" },
            { label: "convert_alb", slug: "reference/convert_alb" },
            { label: "convert_bili", slug: "reference/convert_bili" },
            { label: "convert_creat", slug: "reference/convert_creat" }
          ]
        },
        {
          label: "Statistical",
          collapsed: true,
          items: [
            { label: "geom_mean", slug: "reference/geom_mean" },
            { label: "geom_sd", slug: "reference/geom_sd" },
            { label: "cv", slug: "reference/cv" },
            { label: "geom_cv", slug: "reference/geom_cv" },
            { label: "categorize", slug: "reference/categorize" },
            { label: "cor_df", slug: "reference/cor_df" },
            { label: "round_like", slug: "reference/round_like" }
          ]
        }
      ]
    },
    { label: "Changelog", slug: "news" }
  ]
    })
  ]
});

