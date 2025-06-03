## Alias

read_excel_with_hash

## Description

Reads data from xlsx/xls file and prints hash of contents.

## Usage

```r
read_excel_with_hash(
  xlsx_file_path,
  ...
)
```

## Arguments

| Name | Description |
|------|-------------|
| `xlsx_file_path` | an xlsx/xls file to ingest |
| `...` | additional arguments to digest or read_excel |

## Returns

a dataframe(?) of data within file

## Examples

```r
read_excel_with_hash("data/source/example.xpt")
```


