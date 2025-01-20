## Description


 Calculates renal impairment categories based on CrCL

## Usage

```r

 brfc(crcl)

```
## Arguments

| Name   | Description |
|--------|-------------|
|`crcl`| creatinine clearance rate (mL/min)|
## Returns


 integer renal impairment category

## Examples

```r

 brfc(crcl(FALSE, 20, 10, 70))
 
 df <- data.frame(
   "ID" = c(1, 1, 1, 1, 2, 2, 2, 2),
   "SEX" = c("F", "F", "F", "F", "M", "M", "M", "M"),
   "RACE" = c("WHITE", "WHITE", "WHITE", "WHITE", "BLACK", "BLACK", "BLACK", "BLACK"),
   "AGE" = c(24, 24, 24, 24, 22, 22, 22, 22),
   "CREAT" = c(1, 1, 1, 1, 4, 4, 4, 4),
   "WEIGHT" = c(70, 70, 70, 70, 65, 65, 65, 65)
 )
 
 df <- df %>%
   dplyr::group_by(ID) %>%
   dplyr::mutate(
     CRCL = crcl(is_female(SEX), AGE, CREAT, WEIGHT),
     BRFC = brfc(CRCL)
   )

```
