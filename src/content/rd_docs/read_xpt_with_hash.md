## Alias

read_xpt_with_hash

## Description

Reads data from xpt file and prints hash of contents.

## Usage

```r
read_xpt_with_hash(
  xpt_file_path,
  ...
)
```

## Arguments

| Name | Description |
|------|-------------|
| `xpt_file_path` | an xpt file to ingest |
| `...` | additional arguments to digest or read_xpt |

## Returns

a dataframe(?) of data within file

## Examples

```r
read_xpt_with_hash("data/source/example.xpt")
```


