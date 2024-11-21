// @ts-check
import { defineConfig } from 'astro/config';
import { starlightKatex } from 'starlight-katex';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightKatex()],
			title: 'scicalc',
			social: {
				github: 'https://github.com/a2-ai/scicalc',
			},
			sidebar: [
				{
					label: 'Reference',
					items: [
						{ 
							label: 'File Manipulations', 
							items: [
								{
									label: 'Reading',
									collapsed: true,
									items: [
										'reference/file_manipulations/reading/read_file_with_hash',
										'reference/file_manipulations/reading/read_csv_with_hash',
										'reference/file_manipulations/reading/read_parquet_with_hash',
										'reference/file_manipulations/reading/read_sas_with_hash',
										'reference/file_manipulations/reading/read_pzfx_with_hash',
									],
								},
								{
									label: 'Writing',
									collapsed: true,
									items:[
										'reference/file_manipulations/writing/write_file_with_hash',
										'reference/file_manipulations/writing/write_csv_with_hash',
										'reference/file_manipulations/writing/write_parquet_with_hash',
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
										{ label: "bbmi", slug: "reference/data_functions/vitals/bbmi" },
										{ 
											label: "bsa",
											items: [
												"reference/data_functions/vitals/bsa",
												"reference/data_functions/vitals/dubois_bsa",
												"reference/data_functions/vitals/mosteller_bsa"
											],
										},
										{ label: "crcl", slug: "reference/data_functions/vitals/crcl" },
										{ label: "bfrc", slug: "reference/data_functions/vitals/brfc" },
										{ label: "bhfc", slug: "reference/data_functions/vitals/bhfc" },
										{ 
											label: "egfr", 
											items: [
												"reference/data_functions/vitals/egfr",
												"reference/data_functions/vitals/ckdepi_2009_egfr",
												"reference/data_functions/vitals/ckdepi_2021_egfr",
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
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
			],
		}),
	],
});

