## Description

Creates a dataframe with distinct parameters and units combinations

## Usage

```r
get_unique_units_df(
  params,
  units
)
```

## Arguments

| Name | Description |
|------|-------------|
| `params` | a column from a dataset with lab parameters |
| `units` | a column from a dataset with units associated with those parameters |

## Returns

a dataframe with distinct units and parameters with IU replaced to U and mu replaced with u

## Examples

```r
df <- data.frame(
   PARAM = c(
     "ALB","ALT","AST","CR","TBIL",
     "ALB","CR","TBIL","ALT","AST"),
   UNIT = c(
     "g/L","U/L","U/L","umol/L","umol/L",
     "U/L","μmol/L","μmol/L","IU/L","IU/L")
 )
 unique_df <- get_unique_units_df(df$PARAM, df$UNIT)
```


