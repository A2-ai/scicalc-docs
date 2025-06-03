// @ts-check
import { defineConfig } from 'astro/config';
import { starlightKatex } from 'starlight-katex';
import starlight from '@astrojs/starlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

// https://astro.build/config
export default defineConfig({
	markdown: {
		rehypePlugins: [
		  rehypeSlug,
		  [
			rehypeAutolinkHeadings,
			{
			  behavior: 'append',
			  content: {
				type: 'element',
				tagName: 'svg',
				properties: { 
				  className: ['heading-anchor'],
				  style: 'display: inline-block; margin-left: 0.5rem;',
				  viewBox: '0 0 16 16',
				  width: 16,
				  height: 16
				},
				children: [{
				  type: 'element',
				  tagName: 'path',
				  properties: {
					fill: 'currentColor',
					d: 'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z'
				  }
				}]
			  },
			},
		  ],
		],
	  },
	integrations: [
		starlight({
			plugins: [starlightKatex()],
			customCss: [
				'./src/styles/custom.css'
			],
			title: 'scicalc',
			social: {
				github: 'https://github.com/a2-ai/scicalc',
			},
			sidebar: [
				{
					label: 'Reference',
					items: [
						{ label: 'Getting Started', slug: 'reference/getting_started' },
						{ 
							label: 'File Manipulations', 
							items: [
								{
									label: 'Reading',
									collapsed: true,
									items: [
										'reference/file_manipulations/reading/read_file_with_hash',
										'reference/file_manipulations/reading/read_hashed_file',
									],
								},
								{
									label: 'Writing',
									collapsed: true,
									items:[
										'reference/file_manipulations/writing/write_file_with_hash',
									]
								},
							],
						},
						{
							label: 'PMx Calculations',
							items: [
								{
									label: 'Demographics',
									collapsed: true,
									items: [
										{
											label: 'Race',
											collapsed: true,
											items: [
												'reference/data_functions/demographics/is_asian',
												'reference/data_functions/demographics/is_black',
												'reference/data_functions/demographics/is_white',
												'reference/data_functions/demographics/is_other',
												'reference/data_functions/demographics/racen',
											],
										},
										{
											label: 'Ethnicity',
											collapsed: true,
											items: [
												'reference/data_functions/demographics/is_hispanic_or_latino',
												'reference/data_functions/demographics/is_not_hispanic_or_latino',
												'reference/data_functions/demographics/ethnicn',
											],
										},
										{
											label: 'Sex',
											collapsed: true,
											items: [
												'reference/data_functions/demographics/is_female',
												'reference/data_functions/demographics/sexf',
											],
										},
									],
								},
								{
									label: 'Vitals',
									collapsed: true,
									items: [
										{ label: "bmi", slug: "reference/data_functions/vitals/bmi" },
										{ 
											label: "bsa",
											items: [
												"reference/data_functions/vitals/bsa",
												"reference/data_functions/vitals/dubois_bsa",
												"reference/data_functions/vitals/mosteller_bsa"
											],
										},
										{ label: "crcl", slug: "reference/data_functions/vitals/crcl" },
										{ label: "rfc", slug: "reference/data_functions/vitals/rfc" },
										{ label: "hfc", slug: "reference/data_functions/vitals/hfc" },
										{ 
											label: "egfr", 
											items: [
												"reference/data_functions/vitals/egfr",
												"reference/data_functions/vitals/ckdepi_2009_egfr",
												"reference/data_functions/vitals/ckdepi_2021_egfr",
												"reference/data_functions/vitals/ckdepi_2021_egfr_cystatin",
												"reference/data_functions/vitals/mdrd_egfr",
												"reference/data_functions/vitals/schwartz_egfr",
											],
										},
									],
								},
							],
						},
						{
							label: "Units Functions",
							collapsed: true,
							items: [
								{ label: "Check units", slug: "reference/unit_functions/check_for_unique_units" },
								{ label: "Unique units", slug: "reference/unit_functions/get_unique_units_df" },
							]
						},
						{
							label: 'Statistical Functions',
							collapsed: true,
							items: [
								{ label: "geom_mean", slug: "reference/stat_functions/geom_mean" },
								{ label: "geom_sd", slug: "reference/stat_functions/geom_sd" },
								{ label: "cv", slug: "reference/stat_functions/cv" },
								{ label: "geom_cv", slug: "reference/stat_functions/geom_cv" },
							],
						},
					],
				},
				// {
				// 	label: 'Guides',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Example Guide', slug: 'guides/example' },
				// 	],
				// },
			],
		}),
	],
});

