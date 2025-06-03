## Alias

write_csv_with_hash

## Description

Writes data to csv_path with na_value replacing NA values.

## Usage

```r
write_csv_with_hash(
  data,
  csv_path,
  ...
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | a data object to write to file |
| `csv_path` | the file path to save the csv |
| `...` | additional arguments to digest or write_csv |

## Returns

Nothing, creates csv_path file and prints hash of the file

## Examples

```r
df <- data.frame(
   "a" = c(1, 2, 3, 4)
   "b" = c("A", "B", "C", "D")
 )
 write_csv_with_hash(df, "test/test.csv")
```


