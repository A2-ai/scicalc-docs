## Description


 Calculates eGFR with CKDEPI 2021 cystatin equation

## Usage

```r

 ckdepi_2021_egfr_cystatin(sexf, age, creat, cystc)

```
## Arguments

| Name   | Description |
|--------|-------------|
|`sexf`| a boolean representing if the patient is female.|
|`age`| age of patient in years|
|`creat`| serum creatinine levels in mg/dL.|
|`cystc`| serum cystatin C levels in mg/L.|
## Returns


 eGFR in mL/min/1.73 m^2

## Examples

```r

 e <- ckdepi_2021_egfr_cystatin(TRUE, 24, 1, 2)
 
 df <- data.frame(
    "SEXF" = c(TRUE, FALSE, TRUE, FALSE),
    "RACEB" = c(FALSE, FALSE, TRUE, FALSE),
    "AGE" = c(24, 24, 23, 24),
    "CREAT" = c(1, 1, 2, 1),
    "CYSTC" = c(0.4, 0.8, 1, 2)
    )
 df <- dplyr::mutate(df, egfr = ckdepi_2021_egfr_cystatin(SEXF, AGE, CREAT, CYSTC))

```
