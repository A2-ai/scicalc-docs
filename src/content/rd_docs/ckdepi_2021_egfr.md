## Alias

ckdepi_2021_egfr

## Description

Calculates eGFR using the CKDEPI 2021 creatinine equation

## Usage

```r
ckdepi_2021_egfr(
  sexf,
  age,
  creat
)
```

## Arguments

| Name | Description |
|------|-------------|
| `sexf` | boolean value of sex Female: TRUE, Male: FALSE |
| `age` | age of subject (years) |
| `creat` | creatinine levels of subject (mg/dL) |

## Returns

the eGFR value (mL/min/1.73m2)

## Examples

```r
e <- ckdepi_2021_egfr(TRUE, 24, 1)
 
 df <- data.frame(
    "SEXF" = c(TRUE, FALSE, TRUE, FALSE),
    "RACEB" = c(FALSE, FALSE, TRUE, FALSE),
    "AGE" = c(24, 24, 23, 24),
    "CREAT" = c(1, 1, 2, 1)
    )
 df <- dplyr::mutate(df, egfr = ckdepi_2021_egfr(SEXF, AGE, CREAT))
 df
```


