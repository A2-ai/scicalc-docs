## Description


 Takes character input and returns standard yspec numeric value for Ethnic

## Usage

```r

 ethnicn(ethnicc)

```
## Arguments

| Name   | Description |
|--------|-------------|
|`ethnicc`| Ethnic character|
## Returns


 the standard yspec numeric value for the inputted Ethnic character

## Examples

```r

 ethnicn("HISPANIC OR LATINO") # 1
 
 ethnicn("NOT HISPANIC OR LATINO") # 0
 
 ethnicn("UNKNOWN") # -999

```
