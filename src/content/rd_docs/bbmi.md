## Description


 Calculates Baseline Body Mass Index based on Weight and Height

## Usage

```r

 bbmi(weight, height)

```
## Arguments

| Name   | Description |
|--------|-------------|
|`weight`| weight of subject (kg)|
|`height`| height of subject (cm)|
## Returns


 the bBMI value (kg m^(-2))

## Examples

```r

 b <- bbmi(80.56, 167)
 
 df <- data.frame(
 "WT" = c(80.56, 71.53, 81.04, 70.17),
 "HT" = c(167, 161, 163, 164)
 )
 df <- dplyr::mutate(df, bbmi = bbmi(WT, HT))

```
