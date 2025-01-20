## Description


 Takes character input and returns TRUE/FALSE if "Not Hispanic or Latino" or other

## Usage

```r

 is_not_hispanic_or_latino(x)

```
## Arguments

| Name   | Description |
|--------|-------------|
|`x`| input character representing ethnicity|
## Returns


 boolean representing Ethnic == "Not Hispanic or Latino"

## Examples

```r

 is_not_hispanic_or_latino("HISPANIC OR LATINO")
 
 is_not_hispanic_or_latino("NOT HISPANIC OR LATINO")
 
 is_not_hispanic_or_latino("UNKNOWN")

```
