## Description

Converts continuous variable into factor categories.

## Usage

```r
categorize(
  continuous_var,
  nbins = 4,
  units = "",
  type = 7,
  digits = 1
)
```

## Arguments

| Name | Description |
|------|-------------|
| `continuous_var` | continuous variable data |
| `nbins` | number of bins to break data into, default is 4 |
| `units` | string, optional units string to add to labels of categorized data |
| `type` | type argument for stats::quantile, default is 7 |
| `digits` | number of digits to round quantile breaks to for labels, default is 1 |

## Returns

a vector of categorized data as factor

## Examples

```r
x <- rnorm(1000, mean = 10, sd = 5)
 xc <- categorize(x, nbins = 5)
```


