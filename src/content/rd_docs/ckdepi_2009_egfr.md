## Description

Calculates Estimated Glomerular Filtration Rate based on Sex, Race, Age, and Creatinine levels
 based on the CKDEPI 2009 equation

## Usage

```r
ckdepi_2009_egfr(
  sexf,
  raceb,
  age,
  creat
)
```

## Arguments

| Name | Description |
|------|-------------|
| `sexf` | boolean value of sex Female: TRUE, Male: FALSE |
| `raceb` | boolean value of Race == Black: Black: TRUE, Other: FALSE |
| `age` | age of subject (years) |
| `creat` | creatinine levels of subject (mg/dL) |

## Returns

the eGFR value (mL/min/1.73m2)

## Examples

```r
e <- ckdepi_2009_egfr(TRUE, TRUE, 24, 1)
 
 df <- data.frame(
    "SEXF" = c(TRUE, FALSE, TRUE, FALSE),
    "RACEB" = c(FALSE, FALSE, TRUE, FALSE),
    "AGE" = c(24, 24, 23, 24),
    "CREAT" = c(1, 1, 2, 1)
    )
 df <- dplyr::mutate(df, egfr = ckdepi_2009_egfr(SEXF, RACEB, AGE, CREAT))
 df
```


