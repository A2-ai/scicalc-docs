## Description


 Takes character input and returns TRUE/FALSE if "Hispanic or Latino" or other

## Usage

```r

 is_hispanic_or_latino(x)

```
## Arguments

| Name   | Description |
|--------|-------------|
|`x`| input character representing ethnicity|
## Returns


 boolean representing Ethnic == "Hispanic or Latino"

## Examples

```r

 is_hispanic_or_latino("HISPANIC OR LATINO")
 
 is_hispanic_or_latino("NOT HISPANIC OR LATINO")
 
 is_hispanic_or_latino("UNKNOWN")

```
