## Alias

read_hashed_file

## Description

Reads a file if the supplied hash matches the file's hash

## Usage

```r
read_hashed_file(
  file_path,
  hash,
  ...
)
```

## Arguments

| Name | Description |
|------|-------------|
| `file_path` | path to file with data you want to read |
| `hash` | hash you expect the file to have |
| `...` | additional arguments for digest or read_csv, parquet, sas |

## Returns

data object of contents of file_path

## Examples

```r
file_path <- "data/derived/example_pk.parquet"
 
 hash <- 0cfd6da55e6c1e198effe1e584c26d79
 read_hashed_file(file_path, hash)
```


