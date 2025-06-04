## Description

Gives a TRUE/FALSE for if the Parameters have only 1 associated unit

## Usage

```r
check_for_unique_units(
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

a boolean

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
 check_for_unique_units <- get_unique_units_df(df$PARAM, df$UNIT)
```


