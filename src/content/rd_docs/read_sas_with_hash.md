## Alias

read_sas_with_hash

## Description

Reads data from sas file and prints hash of contents.

## Usage

```r
read_sas_with_hash(
  sas_file_path,
  ...
)
```

## Arguments

| Name | Description |
|------|-------------|
| `sas_file_path` | path to sas file to ingest |
| `...` | additional arguments to digest or read_sas |

## Returns

a dataframe(?) of data within file

## Examples

```r
read_sas_with_hash("data/source/example.sas7bdat")
```


