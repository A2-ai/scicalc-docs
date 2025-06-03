## Description

Modification of Diet in Renal Disease eGFR calculation

## Usage

```r
mdrd_egfr(
  sexf,
  raceb,
  age,
  creat
)
```

## Arguments

| Name | Description |
|------|-------------|
| `sexf` | a boolean representing if the patient is female. |
| `raceb` | a boolean representing if the patient is black. |
| `age` | the age of the patient in years |
| `creat` | the serum creatinine levels in mg/dL |

## Returns

the eGFR in mL/min/1.73 m^2

## Examples

```r
e <- mdrd_egfr(TRUE, TRUE, 24, 1)
 
 df <- data.frame(
    "SEXF" = c(TRUE, FALSE, TRUE, FALSE),
    "RACEB" = c(FALSE, FALSE, TRUE, FALSE),
    "AGE" = c(24, 24, 23, 24),
    "CREAT" = c(1, 1, 2, 1)
    )
 df <- dplyr::mutate(df, egfr = mdrd_egfr(SEXF, RACEB, AGE, CREAT))
 df
```


