## Description

Calculates Body Surface Area based on Weight and Height using the method specified. Default is Dubois.

## Usage

```r
bsa(
  weight,
  height,
  method = "Dubois"
)
```

## Arguments

| Name | Description |
|------|-------------|
| `weight` | weight of a subject (kg) |
| `height` | height of a subject (cm) |
| `method` | String to dictate which equation to use. Dubois or Mosteller. |

## Returns

bsa (m^2)

## Examples

```r
bsa(70, 170)
 bsa(70, 170, method = "Mosteller")
 bsa(70, 170, method = "Dubois")
```


