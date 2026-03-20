---
layout: post
title: "Intra-Municipal Inequality and Geographic Vote Polarization in Denmark"
date: 2026-03-20
category: "Thesis Analysis"
excerpt: "Does socioeconomic inequality within a municipality predict how sharply its neighborhoods divide along partisan lines? Using polling-station data from three Danish municipal elections, I find a consistent null result: income dispersion across parishes does not predict geographic vote polarization."
---

*Analytical Results*

*Victor Marques Fejø — March 2026*

---

# 1. Introduction and Research Design

This study investigates whether intra-municipal socioeconomic inequality predicts the geographic polarization of partisan voting at the polling-station level in Danish municipal elections. The core prediction is straightforward: municipalities with sharper internal socioeconomic gradients — measured as income dispersion across parishes — should exhibit greater variance in red-bloc versus blue-bloc vote shares across their polling stations. If affluent and disadvantaged neighborhoods within the same municipality differ substantially in income composition, their voting patterns should diverge correspondingly.

The analysis draws on two data sources. Income inequality is measured using parish-level data from Arbejderbevægelsens Erhvervsråd (AE), which reports the share of each parish's population in the national top-10% and bottom-10% income deciles. The key independent variable is the standard deviation of the top-10% decile share across parishes within each municipality, capturing how unevenly high earners are distributed across a municipality's neighborhoods. Voting data come from the Danish Election Database (valgdatabase.dst.dk), providing polling-station-level results for three municipal elections: KV2017, KV2021, and KV2025.

The dependent variable is within-municipality vote dispersion: the standard deviation of each polling station's red-bloc vote share (computed as the red-bloc share of the two-bloc vote, excluding Moderaterne and local lists). The analytical approach combines cross-sectional OLS regressions for the most recent election (KV2025) with pooled panel models exploiting variation across all three elections. After matching parishes to municipalities and polling stations to municipalities, the final sample comprises 86 municipalities observed across three elections (258 municipality-election observations). Six municipalities were excluded from the inequality data due to having fewer than three parishes (Glostrup, Vallensbæk, Ishøj, Fanø, Samsø, Dragør), and an additional six could not be matched between datasets due to municipality name discrepancies.

---

# 2. Descriptive Patterns

Table 1 presents summary statistics for the KV2025 cross-section. The mean within-municipality standard deviation of red-bloc share is 0.079, indicating that in a typical municipality, polling stations differ by roughly 8 percentage points in their red-bloc orientation. The most polarized municipality has a vote SD of 0.131, while the least polarized has only 0.003. Intra-municipal income inequality (measured as the SD of the top-10% decile share) ranges from 1.1 to 24.9, with a mean of 4.1 and substantial right skew driven by wealthy North Zealand municipalities. The average municipality has 14 polling stations and 21 parishes with valid income data.

**Table 1: Summary Statistics (KV2025, N = 86 municipalities)**

| Variable | N | Mean | SD | Min | Max |
|---|---|---|---|---|---|
| Vote SD (red share) | 86 | 0.079 | 0.027 | 0.003 | 0.131 |
| Inequality SD (top 10%) | 86 | 4.087 | 3.312 | 1.104 | 24.886 |
| Inequality Range (top 10%) | 86 | 13.766 | 7.936 | 2.700 | 46.100 |
| N polling stations | 86 | 13.826 | 8.593 | 3.000 | 54.000 |
| N parishes | 86 | 21.314 | 13.135 | 3.000 | 62.000 |
| Mean top-10% share | 86 | 10.255 | 7.255 | 4.667 | 43.944 |
| Mean red-bloc share | 86 | 0.433 | 0.129 | 0.186 | 0.723 |
| Log population | 86 | 10.755 | 0.623 | 8.674 | 13.323 |
| Mean turnout | 86 | 0.710 | 0.042 | 0.568 | 0.801 |

Table 2 shows the ten most and least internally unequal municipalities. The top of the list is dominated by affluent North Zealand municipalities: Hørsholm (SD = 24.9), Furesø (15.0), Rudersdal (12.2), and Gentofte (10.4). These municipalities contain a mix of extremely wealthy parishes and more modest ones. København ranks ninth (SD = 7.4), reflecting its internal socioeconomic diversity across 56 parishes. The least unequal municipalities are smaller, more homogeneous communities: Ærø (1.1), Rødovre (1.3), and Langeland (1.5). Notably, high inequality does not consistently correspond to high vote polarization: Hørsholm has the highest inequality but only moderate vote dispersion (0.058), while some low-inequality municipalities like Tønder (1.8) show substantial vote dispersion (0.100).

**Table 2: Most and Least Internally Unequal Municipalities (KV2025)**

| Rank | Municipality | Ineq SD | Vote SD | Parishes | Top 10% | Red share |
|---|---|---|---|---|---|---|
| 1 | Hørsholm | 24.9 | 0.058 | 3 | 37.9 | 0.24 |
| 2 | Furesø | 15.0 | 0.085 | 3 | 31.0 | 0.55 |
| 3 | Rudersdal | 12.2 | 0.089 | 8 | 39.6 | 0.34 |
| 4 | Fredensborg | 10.6 | 0.100 | 4 | 22.2 | 0.54 |
| 5 | Gentofte | 10.4 | 0.076 | 9 | 43.9 | 0.30 |
| 6 | Gladsaxe | 9.5 | 0.050 | 8 | 14.3 | 0.66 |
| 7 | Helsingør | 9.3 | 0.070 | 10 | 15.8 | 0.47 |
| 8 | Hillerød | 8.1 | 0.119 | 15 | 16.1 | 0.46 |
| 9 | København | 7.4 | 0.075 | 56 | 11.6 | 0.72 |
| 10 | Høje-Taastrup | 6.2 | 0.076 | 7 | 10.3 | 0.44 |
| 1 | Ærø | 1.1 | 0.112 | 6 | 4.7 | 0.51 |
| 2 | Rødovre | 1.3 | 0.035 | 4 | 8.8 | 0.69 |
| 3 | Langeland | 1.5 | 0.065 | 13 | 4.7 | 0.35 |
| 4 | Morsø | 1.6 | 0.063 | 19 | 5.0 | 0.41 |
| 5 | Faaborg-Midtfyn | 1.7 | 0.088 | 33 | 5.3 | 0.52 |
| 6 | Odsherred | 1.7 | 0.070 | 13 | 5.9 | 0.62 |
| 7 | Tønder | 1.8 | 0.100 | 26 | 5.9 | 0.29 |
| 8 | Haderslev | 1.8 | 0.103 | 26 | 6.2 | 0.33 |
| 9 | Vordingborg | 1.9 | 0.076 | 26 | 6.9 | 0.46 |
| 10 | Varde | 2.1 | 0.080 | 28 | 7.2 | 0.24 |

*Top panel: 10 highest inequality. Bottom panel: 10 lowest.*

The scatter plot of inequality vs. vote polarization reveals no clear positive association. The linear fit is essentially flat (r = −0.07, p = 0.506). Several municipalities stand out as interesting cases: København combines high inequality with moderate vote dispersion, while Hillerød and Fredensborg show high inequality alongside relatively high dispersion. Rødovre, a socioeconomically homogeneous red-bloc municipality, has very low vote dispersion (0.035). The absence of a clear bivariate pattern sets the stage for the regression analysis below.

Tracking vote dispersion over time and comparing high-inequality and low-inequality municipalities (split at the median), both groups show a slight upward trend in polarization from KV2017 to KV2025, but the difference between groups is minimal. High-inequality municipalities do not consistently exhibit more vote dispersion than low-inequality ones. The KV2025 election shows a marginal divergence, but the confidence intervals overlap substantially. This temporal pattern is consistent with a general, slow increase in geographic vote polarization across Danish municipalities, unrelated to their internal income structure.

---

# 3. Regression Results

**Table 3: OLS Regression Results (DV = within-municipality SD of red-bloc share, KV2025)**

| | Model 1 | Model 2 | Model 3 |
|---|---|---|---|
| ineq_sd_top10 | −0.0006 | 0.0001 | 0.0004 |
| | (0.0005) | (0.0012) | (0.0013) |
| log_pop | | −0.0167 | −0.0115 |
| | | (0.0076)\*\* | (0.0086) |
| n_stations | | 0.0022 | 0.0019 |
| | | (0.0006)\*\*\* | (0.0006)\*\*\* |
| mean_top10 | | 0.0002 | −0.0001 |
| | | (0.0005) | (0.0005) |
| mean_red_share | | | −0.0390 |
| | | | (0.0253) |
| R² | 0.005 | 0.204 | 0.233 |
| N | 86 | 86 | 86 |

*Robust (HC1) standard errors in parentheses. \*\*\* p<0.01, \*\* p<0.05, \* p<0.10.*

The core finding is a null result: intra-municipal income inequality does not significantly predict geographic vote polarization in any specification. In the bivariate model (Model 1), the coefficient on inequality is negative but insignificant (β = −0.0006, p = 0.268), and the model explains virtually no variance (R² = 0.005). Adding controls for population size, number of polling stations, and mean affluence level (Model 2) renders the coefficient essentially zero (β = 0.0001, p = 0.965). Including the municipality's mean red-bloc share (Model 3) does not change the picture.

The substantive magnitude is negligible. A one-standard-deviation increase in inequality (3.31 points) predicts only a 0.0002 change in vote SD in Model 2 — effectively zero relative to the mean vote SD of 0.079. The strongest predictor of within-municipality vote dispersion is the number of polling stations (β = 0.0022, p < 0.001), which is a mechanical relationship: municipalities with more stations have more opportunities for variation. Log population has a significant negative effect (β = −0.0167, p = 0.028), suggesting that larger municipalities — controlling for number of stations — exhibit somewhat less vote dispersion, perhaps reflecting averaging effects in densely populated areas.

---

# 4. Panel Results

Three panel specifications exploit variation across the KV2017, KV2021, and KV2025 elections (N = 258 municipality-election observations). Model 4 (pooled OLS with election fixed effects) confirms the cross-sectional null: the inequality coefficient is β = −0.0004 (p = 0.551). The election dummies show no significant time trend, though KV2025 has a marginally higher mean dispersion than KV2017 (+0.003, p = 0.403).

Model 5 (municipality fixed effects) absorbs all time-invariant municipality characteristics, including inequality. The within-municipality variation over time is limited: the KV2021 coefficient is essentially zero (0.0000, p = 0.998), while KV2025 shows a modest but insignificant increase (0.0030, p = 0.114). The high R² of 0.862 confirms that most variation in vote dispersion is between municipalities, not within them over time — consistent with geographic polarization being a stable structural feature rather than a dynamic process over this short panel.

Model 6 (between-effects model) regresses municipality means on municipality means, recovering the cross-sectional relationship while using all available waves. The inequality coefficient is again insignificant (β = −0.0004, p = 0.713), fully consistent with the cross-sectional findings.

---

# 5. Robustness Checks

**Table 4: Sensitivity to Alternative Inequality Measures (Model 2 specification, KV2025)**

| IV Measure | Coefficient | SE | p-value | R² |
|---|---|---|---|---|
| SD top 10% (main) | 0.00005 | 0.00118 | 0.9652 | 0.204 |
| Range top 10% | 0.00100 | 0.00052 | 0.0557 | 0.237 |
| CV top 10% | 0.01095 | 0.02322 | 0.6373 | 0.206 |
| SD bottom 10% | 0.00274 | 0.00234 | 0.2409 | 0.216 |

Only the range of the top-10% decile share approaches significance (p = 0.056), suggesting that the distance between the richest and poorest parish within a municipality has a weak positive association with vote dispersion. The coefficient of variation and bottom-decile dispersion are both insignificant. The null finding is therefore robust to the operationalization of inequality.

Alternative dependent variables (IQR and range of red-bloc share instead of SD) yield similarly null results. Using IQR, the coefficient is −0.00089 (p = 0.699); using range, it is −0.00012 (p = 0.974). The turnout dispersion model suggests a marginally positive relationship between inequality and within-municipality variation in turnout (β = 0.00249, p = 0.102, N = 86), though this does not reach significance at conventional levels.

Two additional sensitivity checks confirm the robustness of the null. Including Moderaterne in the blue bloc (KV2025 only) yields β = 0.00054 (p = 0.670). Excluding København and Aarhus — outliers with 56 and 54 parishes respectively — produces β = 0.00050 (p = 0.692). The core null result is entirely stable.

---

# 6. Summary and Discussion

The central finding of this analysis is a null result: intra-municipal socioeconomic inequality, measured as the dispersion of top-income-decile shares across parishes, does not predict the geographic polarization of partisan voting across polling stations in Danish municipal elections. This null holds across three elections (KV2017–KV2025), five model specifications, four inequality operationalizations, three dependent variable definitions, and multiple sample restrictions. The coefficient on inequality is consistently small, statistically insignificant, and substantively negligible.

Several explanations may account for this non-finding. First, the ecological fallacy looms large: parish-level income composition need not translate linearly into parish-level (or polling-station-level) voting patterns. Income is only one of many predictors of vote choice, and the Danish welfare state may attenuate the political consequences of income inequality relative to, say, the United States. Second, residential sorting in Denmark may operate differently than in contexts where income inequality predicts political polarization. Danish municipalities are relatively compact, and even internally unequal municipalities like Hørsholm or Gentofte may have politically homogeneous electorates despite income variation — both rich and less-rich residents in these North Zealand municipalities lean blue-bloc. Third, the inequality measure is time-invariant (based on a single AE dataset using 2019 income data), limiting the ability to detect dynamic effects. If inequality has changed over the 2017–2025 period, this is not captured.

Fourth, and perhaps most fundamentally, the unit of analysis may be wrong. The prediction that inequality produces political divergence may operate more naturally at the national or regional level than within municipalities. Danish municipal elections also feature local lists and incumbency effects that may dampen the class-based partisan sorting that national-level income inequality might produce. The finding that the number of polling stations is the strongest predictor of vote dispersion reinforces the suspicion that much of the measured dispersion is mechanical or spatial rather than socioeconomic in origin.

Despite the null result, this analysis contributes a useful data point to the comparative literature on inequality and political geography. The Danish case — with its strong welfare state, proportional representation, and relatively compressed income distribution — may represent a scope condition under which the inequality-polarization link does not hold. Future research might examine whether the relationship emerges at other spatial scales (e.g., regions or electoral districts), with different inequality measures (e.g., Gini coefficients or education-based measures), or in institutional contexts with stronger geographic winner-take-all incentives.
