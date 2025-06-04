## Description

Reads in table from a prism pzfx file.

## Usage

```r
read_pzfx_with_hash(
  pzfx_file_path,
  ...
)
```

## Arguments

| Name | Description |
|------|-------------|
| `pzfx_file_path` | path to pzfx file |
| `...` | additional arguments to digest or read_pzfx |

## Returns

data within the table of the pzfx file

## Examples

```r
read_pzfx_with_hash("mydata.pzfx", table = "experiment1")
```


