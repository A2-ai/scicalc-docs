## Description


 Calculates Body Surface Area based on Weight and Height using Dubois Dubois equation

## Usage

```r

 dubois_bsa(weight, height)

```
## Arguments

| Name   | Description |
|--------|-------------|
|`weight`| weight of subject (kg)|
|`height`| height of subject (cm)|
## Returns


 the body surface area (m^2)

## Examples

```r

 #' b <- dubois_bsa(80.56, 167)
 
 df <- data.frame(
 "WT" = c(80.56, 71.53, 81.04, 70.17),
 "HT" = c(167, 161, 163, 164)
 )
 df <- dplyr::mutate(df, bsa = dubois_bsa(WT, HT))

```
