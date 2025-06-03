## Alias

read_parquet_with_hash

## Description

Reads data from parquet file and prints hash of contents.

## Usage

```r
read_parquet_with_hash(
  parquet_file_path,
  ...
)
```

## Arguments

| Name | Description |
|------|-------------|
| `parquet_file_path` | path to parquet file to ingest |
| `...` | additional arguments to digest or read_parquet |

## Returns

a tibble of data within file

## Examples

```r
read_parquet_with_hash("data/derived/example_data.parquet")
```


