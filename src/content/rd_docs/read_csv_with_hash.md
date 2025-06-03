## Description

Reads data from csv file and prints hash of contents.

## Usage

```r
read_csv_with_hash(
  csv_file_path,
  ...
)
```

## Arguments

| Name | Description |
|------|-------------|
| `csv_file_path` | path to csv file to ingest |
| `...` | additional arguments for digest or read_csv |

## Returns

dataframe of data within file

## Examples

```r
read_csv_with_hash("data/derived/example_data.csv")
```


