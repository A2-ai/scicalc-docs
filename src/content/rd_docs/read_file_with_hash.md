## Alias

read_file_with_hash

## Description

Reads the data from a file (csv or parquet) and prints the hash

## Usage

```r
read_file_with_hash(
  file_path,
  ...
)
```

## Arguments

| Name | Description |
|------|-------------|
| `file_path` | path to data file |
| `...` | additional arguments to digest, read_csv, read_parquet, read_sas, read_pzfx, read_xpt |

## Returns

data within the supplied file

## Examples

```r
dat <- read_file_with_hash("data/derived/PK_data.parquet")
 dat2 <- read_file_with_hash("data/source/data.csv")
```


