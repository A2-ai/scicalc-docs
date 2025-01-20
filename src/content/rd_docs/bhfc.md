## Description


 Calculates hepatic function criteria

## Usage

```r

 bhfc(ast, ulnast, bili, ulnbili)

```
## Arguments

| Name   | Description |
|--------|-------------|
|`ast`| Aspartate aminotransferase concentration (IU/L)|
|`ulnast`| Upper limit of normal AST (IU/L), typically 33|
|`bili`| bilirubin concentration (mg/dL)|
|`ulnbili`| Upper limit of normal BILI (mg/dL), typically 1.2|
## Returns


 category of hepatic function

## Examples

```r

 bhfc(15, 33, 0.6, 1.2)
 
 df <- data.frame(
   "ID" = c(1, 1, 1, 1, 2, 2, 2, 2),
   "SEX" = c("F", "F", "F", "F", "M", "M", "M", "M"),
   "RACE" = c("WHITE", "WHITE", "WHITE", "WHITE", "BLACK", "BLACK", "BLACK", "BLACK"),
   "AGE" = c(24, 24, 24, 24, 22, 22, 22, 22),
   "CREAT" = c(1, 1, 1, 1, 4, 4, 4, 4),
   "WEIGHT" = c(70, 70, 70, 70, 65, 65, 65, 65),
   "AST" = c(15, 15, 15, 15, 23, 23, 23, 23),
   "ULNAST" = c(33, 33, 33, 33, 33, 33, 33, 33),
   "BILI" = c(1, 1, 1, 1, 0.4, 0.4, 0.4, 0.4),
   "ULNBILI" = c(1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2)
 )
 
 df <- df %>%
   dplyr::group_by(ID) %>%
   dplyr::mutate(BHFC = bhfc(AST, ULNAST, BILI, ULNBILI))

```
