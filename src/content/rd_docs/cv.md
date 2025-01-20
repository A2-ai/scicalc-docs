## Description


 Computes the coefficient of variation of input vector.

## Usage

```r

 cv(x, na.rm = FALSE)

```
## Arguments

| Name   | Description |
|--------|-------------|
|`x`| Input vector to compute CV for.|
|`na.rm`| boolean to remove NA. default is FALSE|
## Returns


 CV of x. Standard deviation divided by mean. If you want % you'll need to multiply by 100

## Examples

```r

 cv(c(1, 2, 1, 1, 2, 1, 2, 3))

```
