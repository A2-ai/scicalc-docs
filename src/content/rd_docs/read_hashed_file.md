## Description


 Reads a file if the supplied hash matches the file's hash

## Usage

```r

 read_hashed_file(file_path, hash, ...)

```
## Arguments

| Name   | Description |
|--------|-------------|
|`file_path`| path to file with data you want to read|
|`hash`| hash you expect the file to have|
|`...`| additional arguments for digest or read_csv, parquet, sas|
## Returns


 data object of contents of file_path

## Examples

```r

 file_path <- system.file("extdata/data/source/dm.sas7bdat", package = "scicalc")
 
 hash <- digest::digest(file = file_path)
 read_hashed_file(file_path, hash)

```
