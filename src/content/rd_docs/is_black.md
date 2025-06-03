## Description

Takes character input and returns TRUE/FALSE if black/other also checks for "African American" and "Black or African American"

## Usage

```r
is_black(
  x
)
```

## Arguments

| Name | Description |
|------|-------------|
| `x` | input character representing race |

## Returns

boolean representing Race == Black

## Examples

```r
is_black("WHITE")
 
 is_black(c("AFRICAN AMERICAN", "BLACK"))
```


