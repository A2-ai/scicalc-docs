## Alias

bmi

## Description

Calculates Baseline Body Mass Index based on Weight and Height

## Usage

```r
bmi(
  weight,
  height
)
```

## Arguments

| Name | Description |
|------|-------------|
| `weight` | weight of subject (kg) |
| `height` | height of subject (cm) |

## Returns

the BMI value (kg m^(-2))

## Examples

```r
b <- bmi(80.56, 167)
 
 df <- data.frame(
 "WT" = c(80.56, 71.53, 81.04, 70.17),
 "HT" = c(167, 161, 163, 164)
 )
 df <- dplyr::mutate(df, bmi = bmi(WT, HT))
 df
```


