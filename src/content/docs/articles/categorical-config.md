---
title: "Configuring categorical functions"
pagefind: true
---

Several categorical functions ship with standard mappings that you can
override through options: `racen()` maps race strings to codes, while
`agec()` and `bmic()` bin a number into codes using fixed bands.

## Race codes (`racen()`)

`racen()` maps race strings to numeric codes. There are six built-in
categories:

``` r
racen(c(
  "WHITE",
  "BLACK",
  "ASIAN",
  "AMERICAN INDIAN OR ALASKA NATIVE",
  "PACIFIC ISLANDER",
  "OTHER"
))
#> [1] 1 2 3 4 5 6
```

Set `scicalc.racen_config` (a named numeric vector, names
case-insensitive) to change them.

## Override a built-in code

``` r
options(scicalc.racen_config = c(white = 10, black = 20))
racen(c(
  "WHITE",
  "BLACK",
  "ASIAN",
  "AMERICAN INDIAN OR ALASKA NATIVE",
  "PACIFIC ISLANDER",
  "OTHER"
))
#> [1] 10 20  3  4  5  6
```

`WHITE` and `BLACK` use the overrides; all others keeps their default.

## Add a new category

Names that aren’t built-ins become new mappings, matched before the
defaults.

``` r
options(scicalc.racen_config = c("multiple" = 7))
racen(c("WHITE", "MULTIPLE"))
#> [1] 1 7
```

## Age and BMI bands (`agec()`, `bmic()`)

`agec()` and `bmic()` bin a number into codes using fixed bands (FDA age
bands, WHO BMI bands). By default:

``` r
agec(c(1, 10, 30, 70))
#> [1] 2 3 5 6
#> attr(,"category_standard")
#> [1] "FDA"
```

Set `scicalc.agec_config` to a data frame of bands — `label`, `min`
(lower bound), and `code` — to replace them. Bands are half-open
`[min, next min)`, with the top band open-ended.

``` r
options(scicalc.agec_config = data.frame(
  label = c("child", "adult", "senior"),
  min   = c(0, 18, 65),
  code  = c(1, 2, 3)
))
agec(c(5, 30, 70))
#> [1] 1 2 3
#> attr(,"category_standard")
#> [1] "custom"
```

`bmic()` works the same way through `scicalc.bmic_config`:

``` r
options(scicalc.bmic_config = data.frame(
  label = c("lean", "high"),
  min   = c(0, 27),
  code  = c(1, 2)
))
bmic(c(22, 30), age = c(40, 40))
#> [1] 1 2
#> attr(,"category_standard")
#> [1] "custom"
```

With the options set, the package startup message reports the active
configuration:

    ── scicalc options ─────────────────────────────────────────────────────────────
    ✔ scicalc.missing_value : -999
    ── Categorical Configurations ──────────────────────────────────────────────────
    ℹ scicalc.racen_config:
        white -> 1
        black -> 2
        asian -> 3
        american native -> 4
        pacific islander -> 5
        other -> 6
        multiple -> 7
    ℹ scicalc.agec_config:
        0 <= age < 18 -> child, [1]
        18 <= age < 65 -> adult, [2]
        65 <= age -> senior, [3]
    ℹ scicalc.bmic_config:
        0 <= bmi < 27 -> lean, [1]
        27 <= bmi -> high, [2]
