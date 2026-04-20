---
layout: post
title: "The New Incumbency Advantage: Danish Municipal Elections, 2005–2025"
date: 2026-03-20
category: "Thesis Analysis"
excerpt: "When a new party wins the mayoral post in a Danish municipality, does it gain a vote share bonus at its first reelection? Using panel data from six elections across all 98 municipalities, I find a robust incumbency advantage of 2.5–4.5 percentage points — significant across all specifications and robustness checks."
---

*Analytical Results from Danish Municipal Elections, 2005–2025*

*Victor Marques Fejø — March 2026*

---

# 1. Introduction and Research Design

When a new party wins the mayoral post in a Danish municipality, does the new mayor's party gain a vote share bonus at its first reelection? The incumbency advantage literature suggests it should. Incumbents benefit from greater visibility, media exposure, credit-claiming for public service delivery, and preferential access to the municipal administration. In Denmark, where the *borgmester* is indirectly elected through post-election coalition negotiations (*konstituering*) rather than by direct popular vote, these mechanisms may be especially important: the borgmester is the most visible local politician and the face of the municipal government, even though voters do not directly choose the mayor.

The international literature on local incumbency advantages includes Dahlgaard (2016), who documents a personal incumbency advantage for municipal council members in Danish local elections using a regression discontinuity design. Freier (2015) studies German mayors, and Furdas and Homolkova (2008) examine Czech local elections. Notably, while Dahlgaard establishes that individual council incumbents enjoy a reelection bonus, the question of whether the mayor's party specifically benefits from holding the borgmester post remains unanswered. This is a distinct question: the mayor has access to institutional resources, media visibility, and credit-claiming opportunities that ordinary council members lack. If an incumbency bonus exists at the council level, it should be even stronger for the party that controls the mayoral office.

This analysis uses polling-station-level data from the Danish Election Database for six municipal elections (KV2005 through KV2025), aggregated to the municipality level, combined with a hand-coded dataset of borgmester party affiliations for all 98 Danish municipalities. The panel yields 470 municipality-election observations with valid lagged vote share data, including 149 turnover events and 115 first reelections — a substantially larger sample than earlier analyses restricted to three elections.

The dependent variable is the change in the mayor's party vote share from one election to the next (Δ mayor party share). The key independent variable is a binary indicator for 'first reelection' — coded 1 when the current mayor's party defends the borgmester post for the first time after a power shift. Controls include the party's national trend, municipal population (log), the outgoing mayor's tenure length, and the number of competing parties.

---

# 2. Descriptive Patterns

The dataset covers 98 municipalities across six elections (KV2005–KV2025), yielding 470 municipality-election observations. Table 1 presents summary statistics.

**Table 1: Summary Statistics**

| Variable | Mean | SD | Min | Max | N |
|---|---|---|---|---|---|
| Δ Mayor party share | 0.747 | 8.164 | −23.573 | 31.483 | 470 |
| Mayor party share | 34.274 | 10.098 | 6.406 | 61.781 | 470 |
| Turnover | 0.317 | 0.466 | 0.0 | 1.0 | 470 |
| First reelection | 0.245 | 0.43 | 0.0 | 1.0 | 470 |
| National trend | −1.402 | 2.929 | −8.925 | 6.827 | 470 |
| Log population | 10.029 | 0.743 | 7.1 | 12.693 | 470 |
| Previous tenure | 2.553 | 1.506 | 1.0 | 6.0 | 470 |
| N parties | 8.219 | 1.301 | 4.0 | 12.0 | 470 |

The mean change in the mayor party's vote share is +0.7 percentage points, indicating that mayor parties on average hold their ground or gain slightly. Nearly a third (31.7%) of observations involve a mayoral turnover, and 24.5% represent first reelections. Municipal politics in Denmark is characterized by frequent power shifts: 158 turnovers occurred across the five transition periods, averaging roughly 30 per election cycle. KV2009 saw the most turnovers (39), likely reflecting the post-financial-crisis electoral volatility, while KV2025 (37 turnovers) captures the fallout from the SVM government's national unpopularity.

The high turnover rate underscores the relevance of the research question. With roughly one in three municipalities changing mayor party each cycle, the incumbency advantage — or lack thereof — has significant implications for local party strategy and coalition formation.

![Distribution of vote share changes, split by first reelection status](/assets/figures/incumbency_fig1_distribution.png)

*Figure 1: Density plots of Δ mayor party vote share, split by first reelection status. Dashed lines indicate group means.*

Figure 1 reveals a clear rightward shift for first-reelection municipalities. The mean vote share change for new mayor parties at their first reelection is approximately +4.6 pp, compared to a near-zero mean for continuing mayors. The distributions overlap substantially, indicating considerable heterogeneity, but the location shift is visually striking.

![Mean vote share change by category](/assets/figures/incumbency_fig2_means.png)

*Figure 2: Mean Vote Share Change by Category.*

![Timeline of notable turnovers](/assets/figures/incumbency_fig3_timelines.png)

*Figure 3: Mayor party vote share across elections for the 8 largest municipalities experiencing turnovers. Party letters and colours identify the mayor party at each election.*

---

# 3. Regression Results

Table 2 presents the main regression results. All standard errors are heteroskedasticity-robust (HC1). The analysis sample is 470 observations spanning five transition periods.

**Table 2: Main Regression Results**

| Variable | Model 1 | Model 2 | Model 3 | Model 4 | Model 5 |
|---|---|---|---|---|---|
| **First reelection** | **4.582** | **4.094** | **2.888** | **2.383** | **4.273** |
| (SE) | (0.837) | (0.821) | (0.893) | (0.902) | (1.176) |
| National trend | | 0.993 | 0.903 | 0.878 | |
| (SE) | | (0.111) | (0.109) | (0.124) | |
| Log population | | | −0.692 | −0.340 | |
| Previous tenure | | | −0.953 | −1.159 | |
| N parties | | | −0.195 | −0.819 | |
| Election FE | No | No | No | Yes | Yes |
| Municipality FE | No | No | No | No | Yes |
| N | 470 | 470 | 470 | 470 | 470 |
| R² | 0.058 | 0.185 | 0.223 | 0.236 | |

*Note: Robust (HC1) standard errors in parentheses. DV is Δ mayor party vote share (pp). Model 5 includes municipality and election fixed effects with clustered standard errors. \* p < 0.1, \*\* p < 0.05, \*\*\* p < 0.01.*

The results are consistent and statistically significant across all specifications. In the bivariate model (Model 1), the first reelection coefficient is 4.58 pp (p < 0.001), indicating that new mayor parties gain nearly 5 percentage points more than continuing mayors at their first reelection. Controlling for national party trends (Model 2) attenuates the estimate modestly to 4.09 pp (p < 0.001).

With full municipal-level controls (Model 3), the estimate is 2.89 pp and remains highly significant (p = 0.001). The control for previous tenure captures mean reversion (−0.7 pp per term), while the national trend coefficient is positive and significant, confirming that parties riding national tailwinds also gain locally. Adding election fixed effects (Model 4) reduces the estimate to 2.38 pp (p = 0.008), absorbing election-specific shocks but leaving the core finding intact.

The municipality fixed effects model (Model 5) produces the strongest estimate: 4.27 pp (p < 0.001). This is the most demanding specification, absorbing all time-invariant municipality characteristics and all election-specific shocks. The estimate is identified purely from within-municipality variation: the same municipality performs differently when its mayor party is defending for the first time versus when it has been in power for multiple terms. That the coefficient is largest in this specification suggests that unobserved municipal characteristics that correlate with both turnover probability and vote share changes were attenuating the OLS estimates (downward confounding).

![Coefficient plot across model specifications](/assets/figures/incumbency_fig4_coefplot.png)

*Figure 4: Point estimates and 95% confidence intervals for the 'first reelection' coefficient across model specifications.*

---

# 4. Robustness Checks

**Table 3: Robustness Checks (First Reelection Coefficient, Model 3 Specification)**

| Specification | Coef | SE | p-value | N |
|---|---|---|---|---|
| 7a: Bloc DV | 1.785 | 0.819 | 0.029 | 372 |
| 7b: Predecessor loss | 2.409 | 0.937 | 0.010 | 470 |
| 7c: Excl. coalition | 2.883 | 0.932 | 0.002 | 457 |
| 7d: SVM control | 2.915 | 0.891 | 0.001 | 470 |

All robustness checks support the main finding. Using bloc vote share as the dependent variable (7a) yields a significant but smaller coefficient of 1.79 pp (p = 0.029), suggesting that the incumbency bonus accrues partly but not entirely to the mayor's party alone; some spillover to coalition partners exists, but the party-specific effect dominates. Controlling for the predecessor's loss magnitude (7b) reduces the coefficient to 2.41 pp (p = 0.010), confirming that the effect is not simply mechanical: new mayor parties gain even after accounting for how badly their predecessor performed.

Excluding the 16 coalition-driven turnovers (7c) — cases where the outgoing party gained or held vote share but lost the borgmester via *konstituering* — leaves the coefficient essentially unchanged (2.88 pp, p = 0.002). Controlling for SVM government party status at KV2025 (7d) likewise has no effect (2.92 pp, p = 0.001), indicating that the result is not driven by the peculiar dynamics of the 2025 election.

---

# 5. Summary and Discussion

This analysis finds a robust and statistically significant new incumbency advantage in Danish municipal politics. New mayor parties gain approximately 2.5–4.5 percentage points at their first reelection after a power shift, depending on specification. The effect is significant at the 1% level in the bivariate, controlled OLS, and municipality fixed effects models. It survives all robustness checks, including controls for national party trends, predecessor collapse, coalition-driven turnovers, and government party status.

The magnitude of the effect is substantively meaningful. An average gain of 3 percentage points for a party that typically holds 30–35% of the vote represents roughly a 10% increase in vote share — enough to shift coalition arithmetic and strengthen the new mayor's bargaining position at the next *konstituering*. The effect is consistent with the theoretical mechanisms emphasized in the incumbency advantage literature: new mayors gain visibility, control over the municipal administration, and opportunities for credit-claiming that translate into electoral support.

Two findings deserve particular emphasis. First, the municipality fixed effects estimate (Model 5) is the largest coefficient in the table, suggesting that simple cross-sectional comparisons underestimate the true effect because municipalities that experience turnovers differ systematically from those that do not. Second, the bloc-level analysis shows that while the mayor's party captures the bulk of the bonus, some spillover to the broader coalition exists — a finding consistent with voters rewarding the governing alliance rather than just the mayor's party.

Limitations remain. The panel design cannot fully address the endogeneity of turnover: parties win the borgmester when local conditions favour them, and separating this selection effect from a genuine incumbency bonus requires stronger identification. A regression discontinuity design exploiting narrow seat margins in coalition formation would provide cleaner causal evidence but faces feasibility constraints given the small number of near-threshold cases. The six-election panel provides at most five transitions per municipality, limiting the precision of the fixed effects estimates. Finally, the borgmester data is hand-coded and, as the substantial corrections between data versions demonstrated, measurement error in mayor party assignment can significantly affect results.

For the case of Frederiksberg, where Socialdemokratiet gained the borgmester in 2021 and increased its vote share from 17.1% to 20.7% at KV2025 (+3.7 pp), the gain is consistent with the estimated incumbency bonus of 2.5–4.5 pp. The broader pattern across 158 turnover events over two decades suggests that this is not an anomaly but a systematic feature of Danish municipal politics.
