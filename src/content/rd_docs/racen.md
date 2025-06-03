## Description

Takes character input and returns standard yspec numeric value for Race

## Usage

```r
racen(
  racec
)
```

## Arguments

| Name | Description |
|------|-------------|
| `racec` | Race character |

## Returns

the standard yspec numeric value for the inputted Race character

## Examples

```r
racen("WHITE") # 1
 
 racen("BLACK") # 2
 
 racen("ASIAN") # 3
 
 racen("OTHER") # 4
 
 racen("UNKNOWN") # -999
```


