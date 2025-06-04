## Description

Writes data to parquet_path and prints hash

## Usage

```r
write_parquet_with_hash(
  data,
  parquet_path,
  ...
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | the data object to save to parquet_path |
| `parquet_path` | the path to the desired parquet destination |
| `...` | additional arguments to digest and write_parquet |

## Returns

Nothing. creates parquet_path file and prints hash

## Examples

```r
df <- data.frame(
   "a" = c(1, 2, 3, 4)
   "b" = c("A", "B", "C", "D")
 )
 write_parquet_with_hash(df, "test/test.parquet")
```


