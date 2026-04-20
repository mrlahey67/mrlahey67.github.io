---
layout: post
title: "Crossing the Divide: Bloc-Switching Voters in Denmark, 2011–2022"
date: 2026-03-18
category: "Thesis Analysis"
excerpt: "A descriptive analysis of voters who cross the bloc divide in Danish elections. Using four waves of the Danish National Election Study, I profile bloc-crossing voters, trace party-level flows, and examine which issue attitudes predict cross-bloc movement — with a particular focus on the welfare chauvinist voter profile."
---

*Descriptive Patterns from the Danish National Election Study*

*Victor Marques Fejø — March 2026*

---

# 1. Introduction and Research Design

This document presents a descriptive analysis of voters who cross the bloc divide in Danish elections. Using four waves of the Danish National Election Study (DNES: 2011, 2015, 2019, and 2022), I profile bloc-crossing voters, trace the party-level flows that carry voters across the red-blue divide, and examine which issue attitudes predict cross-bloc movement. The analysis covers a period of significant partisan realignment in Denmark, during which the Social Democrats (Socialdemokratiet, S) adopted an increasingly restrictive immigration stance while maintaining left-economic positions, and Dansk Folkeparti (DF) experienced dramatic decline.

The descriptive patterns documented here are intended to motivate a subsequent survey experiment on cross-bloc voter appeal. By identifying who crosses, where they come from, and what drives them, I aim to generate empirically grounded hypotheses about which combinations of policy positions are most effective at attracting voters from the opposing bloc.

The analysis proceeds in five parts: first, I map the size and composition of the bloc-switching segment across waves; second, I profile the attitudinal differences between crossers and loyalists; third, I test whether red-to-blue and blue-to-red switchers have distinct attitudinal profiles; fourth, I use logistic and multinomial regression to identify the strongest attitudinal predictors of bloc-crossing and assess whether these predictors change over time; and fifth, I test the robustness of the main findings to an alternative bloc classification in which Radikale Venstre is treated as a center-bloc party.

Bloc membership follows standard Danish classification: the red bloc includes A (Socialdemokratiet), B (Radikale Venstre), F (SF), Ø (Enhedslisten), and Å (Alternativet, from 2015). The blue bloc includes V (Venstre), C (Konservative), I (Liberal Alliance), O (Dansk Folkeparti), K (Kristendemokraterne), D (Nye Borgerlige, from 2019), and Æ (Danmarksdemokraterne, 2022). Moderaterne (M, 2022 only) is classified as cross-bloc. Previous vote is measured via recall questions in each wave. Survey weights (weight_1) are applied where available (2019, 2022); 2011 and 2015 analyses are unweighted.

---

# 2. The Switching Landscape

## 2.1 How Large is the Bloc-Crossing Segment?

Across the four waves, the overall bloc-crossing rate ranges from 10.1% to 17.4% of voters with valid switching data. The 2022 wave shows a substantially higher rate (17.4%), largely driven by Moderaterne, which attracted 230 voters (9.6% of the switching sample) from both blocs. Excluding Moderaterne, the traditional bloc-crossing rate in 2022 (red-to-blue + blue-to-red) is 7.7%, comparable to other waves.

![Voter switching typology by wave (percentage of voters with valid switching data)](/assets/figures/fig01_switch_types_by_wave.png)

*Figure 1. Voter switching typology by wave (percentage of voters with valid switching data).*

## 2.2 Where Do Bloc-Crossers Flow?

The dominant direction of cross-bloc movement varies across waves. In 2011 and 2019, the net flow is blue-to-red: 137 and 148 blue-bloc voters moved to the red bloc, compared to only 41 and 49 in the reverse direction. In 2015, the flow reverses: 115 red-to-blue vs. 88 blue-to-red, reflecting the strong performance of Dansk Folkeparti and Liberal Alliance in attracting former red-bloc voters. In 2022, the picture is dominated by Moderaterne, which drew 144 voters from the blue bloc and 86 from the red.

The top party-to-party flows that cross the bloc divide are remarkably consistent. V→A and O→A are among the largest flows in every wave. In 2011, V→A (N=37, 20.8% of crossers) and O→A (N=23, 12.9%) were the top two. By 2019, O→A overtook V→A as the largest flow (N=40, 20.3% vs. N=30, 15.2%), reflecting DF's collapse and the Social Democrats' successful appeal to DF voters through restrictive immigration policy.

![Party origins of bloc-crossing voters by wave and direction](/assets/figures/fig02_party_origins_crossers.png)

*Figure 2. Party origins of bloc-crossing voters by wave and direction.*

## 2.3 The 2019 Election as Critical Case

The 2019 election is the central case for this analysis because the Social Democrats ran explicitly on a dual strategy: restrictive immigration combined with expanded welfare (the Arne pension). The data confirm that 2019 was distinctive in several respects. First, the blue-to-red flow was the largest in absolute terms (N=148), tied with 2011 as the highest share of valid switchers (7.6%). Second, the party composition of blue-to-red switchers shifted: in 2019, 42.6% came from DF, up from 23.4% in 2011 and 21.6% in 2015. Third, S remained the primary destination for blue-to-red crossers across all waves (51.8% in 2011, 58.0% in 2015, 52.7% in 2019, 71.0% in 2022), but the origin profile shifted toward DF voters.

In 2022, the picture changes dramatically. The blue-to-red flow drops to just 69 voters (2.9%), as Moderaterne captures many of the moderate swing voters who might otherwise have crossed blocs. Among Moderaterne voters, 42.6% came from Venstre and 17.8% from Socialdemokratiet, suggesting that M drew from the traditional centrist swing segment rather than the ideologically motivated bloc-crossers.

---

# 3. Who Crosses the Divide? Attitudinal Profiles

## 3.1 Mean Attitudes by Switching Type

Across waves, bloc-crossers are systematically more immigration-restrictive and less welfare-generous than loyal voters. Pooling all waves, crossers score 0.27 points higher on the immigration welfare rights item (p < 0.001, Cohen's d = 0.22) and 0.25 points lower on welfare generosity (p < 0.001, d = 0.24). Crossers are also slightly less politically interested (d = 0.19) and place themselves slightly further right on the left-right scale (d = 0.13). The demographic profiles of crossers and loyalists are similar: comparable age distributions, gender balance, and education levels.

![Mean attitudes by switch type and wave](/assets/figures/fig03_attitudes_by_switch_type.png)

*Figure 3. Mean attitudes by switch type and wave. Higher values indicate more restrictive immigration attitudes (1–5), greater welfare generosity (1–5), higher political interest (1–4), and more right-wing self-placement (0–10).*

## 3.2 Directional Asymmetry

A key question is whether red-to-blue and blue-to-red switchers have distinct attitudinal profiles. The data suggest meaningful directional differences. Blue-to-red switchers are consistently more welfare-generous than red-to-blue switchers (welfare generosity difference of 0.29–0.69 points across waves), while red-to-blue switchers tend to be more immigration-restrictive in 2015 (difference of 0.54 points). This pattern is consistent with the hypothesis that blue-to-red movement is partly welfare-motivated (voters attracted by left-economic positions) while red-to-blue movement is more immigration-driven.

In 2019, blue-to-red switchers are notably restrictive on immigration (mean = 4.06 on welfare rights, 3.50 on cultural threat), exceeding the loyal-voter average and approaching the red-to-blue level. This suggests that the 2019 blue-to-red flow included voters who were both immigration-restrictive and welfare-supportive, a profile consistent with welfare chauvinism.

![Attitudinal profiles of red-to-blue vs. blue-to-red switchers by wave (means with 95% CIs)](/assets/figures/fig04_directional_asymmetry.png)

*Figure 4. Attitudinal profiles of red-to-blue vs. blue-to-red switchers by wave (means with 95% CIs).*

## 3.3 The Welfare Chauvinist Profile

Using wave-specific medians to classify respondents into four quadrants (welfare chauvinist, universalist, market liberal, nationalist minimalist), I find that blue-to-red switchers are disproportionately welfare chauvinist compared to loyal voters. In 2019, 37.1% of blue-to-red switchers fall in the welfare chauvinist quadrant, compared to 23.8% of loyal voters. This pattern is strongest in 2019, the year S ran on the explicit combination of immigration restriction and welfare expansion. In 2022, the welfare chauvinist share among blue-to-red switchers remains elevated at 34.5%, though the small N (69) warrants caution.

Moderaterne voters in 2022 show a different profile: only 19.0% fall in the welfare chauvinist quadrant, close to the market liberal quadrant. This suggests Moderaterne captured centrist pragmatists rather than the ideologically distinctive welfare chauvinist segment.

![Share of welfare chauvinists by switch type and wave](/assets/figures/fig05_welfare_chauvinist_quadrants.png)

*Figure 5. Share of welfare chauvinists by switch type and wave.*

---

# 4. What Predicts Bloc-Crossing? Regression Results

## 4.1 Per-Wave Logistic Regressions

Per-wave logistic regressions with bloc-crossing (binary) as the dependent variable confirm that both immigration attitudes and welfare generosity are significant predictors. The interaction between immigration restrictiveness and welfare generosity is positive and significant in all four waves, indicating that the combination of restrictive immigration attitudes and generous welfare preferences is particularly associated with bloc-crossing. Pseudo-R² values range from 0.030 (2015) to 0.065 (2019), suggesting modest but consistent explanatory power.

## 4.2 Pooled Model with Wave Interactions

The pooled model with wave interactions (reference: 2011) tests whether the attitudinal drivers of bloc-crossing changed over time. The wave interaction terms for immigration and welfare attitudes are generally not statistically significant at conventional levels, though the immigration × 2015 interaction approaches significance (p = 0.066). The three-way interaction (immigration × welfare × wave) is also non-significant across waves. This suggests that the basic attitudinal structure of bloc-crossing is relatively stable over the 2011–2022 period, even as the political context changed substantially. The consistently significant positive interaction between immigration restrictiveness and welfare generosity in the per-wave models, combined with the non-significant wave interactions, points to a durable welfare chauvinist dynamic in cross-bloc voting.

## 4.3 Multinomial Model: Direction of Switching

The multinomial logit model (reference category: loyal) reveals that the attitudinal predictors of red-to-blue and blue-to-red switching are qualitatively similar but differ in magnitude. Both directions are predicted by immigration restrictiveness and welfare generosity, with positive interactions. However, the welfare generosity coefficient is stronger for red-to-blue switching (β = −1.283 vs. −0.919 for blue-to-red), suggesting that low welfare generosity is a particularly strong driver of rightward movement. The immigration coefficient is stronger for blue-to-red switching (β = −0.825 vs. −0.675), consistent with immigration restrictiveness pulling voters leftward (toward S) from the blue bloc.

## 4.4 Party Competence on Refugee Policy

Cross-tabulations of refugee policy competence attributions by switch type reveal that blue-to-red switchers increasingly attribute refugee competence to S over time. In 2015, 41% of blue-to-red switchers named A as best at handling refugees, rising to 58% in 2022. This is consistent with S's successful cultivation of a restrictive immigration reputation that attracted former blue-bloc voters. Red-to-blue switchers, by contrast, most frequently attribute competence to DF (O) or V, suggesting they are voters who value restrictive policy but seek it from the traditional restrictive parties.

---

# 5. Robustness: Radikale Venstre as Center Bloc

The main analysis classifies Radikale Venstre (B) as a red-bloc party, following the standard Danish bloc classification. However, B occupies a distinctive centrist position in the Danish party system: economically moderate, socially liberal, and historically willing to support governments of either bloc. Voters switching from blue parties to B may be making a relatively short ideological journey to the center rather than genuinely crossing the political divide. To test whether the main findings are sensitive to this classification, all analyses are re-estimated with B reclassified as a center-bloc party alongside Moderaterne. Under this specification, switches involving B are removed from the red-to-blue and blue-to-red categories.

The bloc-crossing rate drops modestly under this specification — from 10–11% to 8–9.5% in most waves — because B-bound voters are reclassified as moving to the center rather than crossing blocs. In 2019, 44 voters are removed from the blue-to-red category (21 V→B, 9 I→B, 9 O→B, 5 C→B).

The most important consequence is that the crosser profile sharpens considerably. Once B is removed, the remaining blue-to-red crossers are more distinctively immigration-restrictive (Cohen's d rises from 0.22 to 0.30 on the welfare rights item, and from 0.11 to 0.22 on cultural threat). At the same time, the welfare generosity difference between crossers and loyalists essentially vanishes (d drops from −0.24 to near zero). In the main specification, crossers appeared less welfare-generous than loyalists, but this was partly an artifact of including B-bound voters, who tend to be economically moderate. Stripping them out reveals that the true red-blue crossers are immigration-driven but not anti-welfare — a purer welfare chauvinist profile.

The welfare chauvinist quadrant signal also strengthens. In 2019, 44.9% of blue-to-red crossers fall in the welfare chauvinist quadrant under the B-as-center specification (up from 37.1% in the main analysis), compared to 24.8% of loyalists. The gap widens because the removed B-bound voters were relatively immigration-moderate (mean 3.54 vs. 4.06 for the remaining crossers) and not particularly welfare-generous (3.02 vs. 3.47).

The regression results are more mixed. The immigration coefficient falls below significance in 2015 (p = 0.26) and 2022 (p = 0.66), and the interaction term weakens. This is partly an N problem — removing B-bound voters reduces crosser cell sizes by 30–50% in some waves — but also suggests that B-bound voters contributed real predictive variance in those models. In 2019, however, the immigration × welfare interaction term remains significant (p = 0.002), confirming that the welfare chauvinist pull is robust to the reclassification precisely in the wave where S ran the explicit dual strategy.

The B-as-center specification is arguably the cleaner test of the bloc-crossing phenomenon. It isolates voters making a genuine leap across the political divide — from right-economic parties to left-economic parties or vice versa — rather than voters drifting to a centrist option. The fact that the welfare chauvinist signal gets stronger under this specification is reassuring: the main findings are not driven by moderate centrist-seekers migrating to Radikale Venstre, but by genuinely immigration-restrictive, welfare-supportive voters crossing to S and SF.

---

# 6. Summary and Implications

This descriptive analysis yields several key findings about bloc-crossing voters in Denmark between 2011 and 2022.

First, the bloc-crossing segment is modest but consistent (10–11% in most waves), with a notable spike in 2022 driven by Moderaterne. The dominant cross-bloc flows are V→A and O→A, with the latter becoming increasingly important by 2019 as DF voters were drawn to the Social Democrats' restrictive immigration platform.

Second, bloc-crossers have a distinctive attitudinal profile: more immigration-restrictive and less welfare-generous than loyal voters, with lower political interest. The directional asymmetry suggests that blue-to-red movement is driven by a welfare chauvinist combination (restrictive on immigration, generous on welfare), while red-to-blue movement is more associated with low welfare generosity and high immigration restrictiveness. This profile sharpens considerably when Radikale Venstre is reclassified as a center-bloc party (Section 5): the remaining blue-to-red crossers are more distinctively immigration-restrictive while no longer appearing less welfare-generous than loyalists, yielding a purer welfare chauvinist profile.

Third, the welfare chauvinist quadrant is disproportionately populated by blue-to-red switchers, especially in 2019 (37.1% vs. 23.8% among loyalists). This share rises to 44.9% under the B-as-center specification, confirming that the finding is not driven by moderate centrist-seekers. The pattern is consistent with the hypothesis that S's dual strategy of restrictive immigration and expanded welfare was particularly effective at attracting welfare chauvinist voters from the blue bloc.

Fourth, regression analysis confirms that both immigration attitudes and welfare generosity predict bloc-crossing, with a consistently significant positive interaction term. The attitudinal structure of bloc-crossing is relatively stable across waves, suggesting a durable underlying dynamic.

## 6.1 Implications for Experimental Design

These findings suggest several priorities for a follow-up survey experiment. The experiment should test the welfare chauvinist appeal directly: presenting voters with candidate profiles that combine restrictive immigration with generous welfare positions (the S strategy) and comparing their cross-bloc pull to profiles with only one of these elements. The target population should include current blue-bloc voters with welfare chauvinist profiles (high welfare generosity, high immigration restrictiveness), as this is the segment most likely to cross. The experiment should also vary the source party of the candidate to test whether the appeal depends on partisan branding (an S candidate vs. a generic left candidate). Finally, the 2022 findings on Moderaterne suggest testing whether centrist framing can attract the same crossover segment or whether the welfare chauvinist appeal requires explicitly left-economic positioning.
