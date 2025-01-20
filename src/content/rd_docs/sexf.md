## Description


 Also returns numeric for single character Sex characters "F" and "M"

## Usage

```r

 sexf(sex)

```
## Arguments

| Name   | Description |
|--------|-------------|
|`sex`| Sex character|
## Returns


 the standard yspec numeric value for the inputted Sex character

## Examples

```r

 sexf("FEMALE") # 1
 sexf("female") # 1
 sexf("f") # 1
 
 sexf("MALE") # 0
 
 sexf("NOT SPECIFIED") # 0

```
