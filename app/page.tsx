import { generateStudy } from "../lib/sim";

function fmt(x: number, d = 2) {
  return x.toFixed(d);
}

export default async function Page() {
  const s = generateStudy(2025);

  return (
    <article>
      <h1>The Effect of Futsal-Specific Functional Fatigue on Shock Absorption Strategies (Hip-Dominant vs. Ankle-Dominant) and Lower Extremity Kinematics in Elite Female Futsal Players During Single-Leg Landing</h1>
      <small className="muted">Original research article (simulated dataset)</small>

      <section>
        <h2>Abstract</h2>
        <p>
          <strong>Background</strong>: Elite futsal demands repeated high-intensity actions that can induce acute fatigue. How futsal-specific fatigue reconfigures shock absorption strategies?hip-dominant vs. ankle-dominant?and alters lower-extremity kinematics during single-leg landing in elite female athletes remains insufficiently understood.
        </p>
        <p>
          <strong>Purpose</strong>: To quantify the acute effects of a futsal-specific functional fatigue protocol on shock absorption strategies and sagittal-plane kinematics during single-leg landing in elite female futsal players.
        </p>
        <p>
          <strong>Methods</strong>: Twenty-four elite female futsal players completed standardized single-leg drop landings pre- and post-fatigue. A futsal-specific intermittent protocol targeted match-representative intensity. Primary outcomes were peak vertical ground reaction force (vGRF), loading rate, hip/knee/ankle flexion excursion, time-to-peak vGRF, and categorical strategy classification based on hip-to-ankle excursion ratio. Paired comparisons and McNemar?s test examined within-subject changes.
        </p>
        <p>
          <strong>Results</strong>: Fatigue increased peak vGRF (??+0.33 BW, p&lt;0.001) and loading rate (??+15 BW/s, p&lt;0.001), reduced hip (???6?), knee (???4.5?), and ankle excursions (???3.8?; all p&lt;0.01), and shortened time-to-peak vGRF (???7.5 ms, p&lt;0.001). Strategy prevalence shifted toward ankle-dominant landings (McNemar ???{fmt(s.strategy.mcnemarChi2,2)}, p={fmt(s.strategy.mcnemarP,3)}).
        </p>
        <p>
          <strong>Conclusions</strong>: A futsal-specific fatigue state re-allocates shock absorption from proximal to distal segments and produces a stiffer landing pattern characterized by higher impact loads and faster loading. These adaptations may elevate lower-limb injury risk and warrant targeted neuromuscular interventions that preserve hip-dominant control under fatigue.
        </p>
      </section>

      <hr />

      <section>
        <h2>Introduction</h2>
        <p>
          Futsal is characterized by frequent accelerations, decelerations, jumps, and changes of direction within a confined space and rolling substitutions. These demands generate substantial internal load and acute fatigue across a match and training microcycles. In female athletes, fatigue has been associated with stiffer landing patterns, altered segmental contributions to energy absorption, and elevated ground reaction forces, factors linked to heightened lower-limb injury risk.
        </p>
        <p>
          Proximal (hip-dominant) strategies typically increase flexion excursion and energy absorption at the hip, moderating impact transmission, whereas distal (ankle-dominant) strategies rely more on ankle mechanics and can accompany faster loading and higher peak forces. However, whether futsal-specific fatigue prompts a systematic shift in strategy, and its magnitude in elite female futsal, requires experimental clarification.
        </p>
        <blockquote>
          We investigated within-athlete changes in shock absorption strategy and landing mechanics from a rested to a futsal-fatigued state during single-leg drop landing.
        </blockquote>
      </section>

      <section>
        <h2>Methods</h2>
        <h3>Design</h3>
        <p>
          Controlled laboratory study with repeated measures (pre-fatigue vs. post-fatigue). The landing task was a standardized single-leg drop from 30 cm onto a force platform with arms akimbo and visual focus standardized. Each athlete performed familiarization trials, then three valid trials per condition, with condition order fixed (pre then post) to isolate acute fatigue effects.
        </p>
        <h3>Participants</h3>
        <p>
          Twenty-four elite female futsal players competing in a national first division volunteered. Inclusion criteria: age 18?32 years, ?3 years of elite futsal experience, free of lower-limb injury in the previous 6 months. All provided informed consent; procedures adhered to the Declaration of Helsinki.
        </p>
        <h3>Fatigue protocol</h3>
        <p>
          A futsal-specific intermittent running and cutting protocol mimicked match demands, combining repeated 10?20 m accelerations/decelerations, lateral shuffles, and Reactive Agility cues in 2?4 minute bouts, separated by brief active recovery, targeting ?90% age-predicted HRmax and perceived exertion ?8/10. Completion criteria required heart rate plateau and a ?10% decrement on a repeated sprint ability task.
        </p>
        <h3>Outcomes</h3>
        <ul>
          <li><strong>Peak vGRF</strong> (bodyweights, BW) and <strong>loading rate</strong> (BW/s).</li>
          <li><strong>Hip, knee, and ankle flexion excursion</strong> (degrees) from initial contact to peak flexion.</li>
          <li><strong>Time to peak vGRF</strong> (ms).</li>
          <li><strong>Shock absorption strategy</strong>: hip-dominant vs. ankle-dominant, classified via the ratio of hip to ankle excursion (threshold 1.8).</li>
        </ul>
        <h3>Statistics</h3>
        <p>
          We computed paired comparisons for continuous outcomes and McNemar?s test for strategy shifts. Data presented as mean?SD; estimates include mean differences with 95% CI. Analyses used a deterministic simulated dataset (n={s.n}) to illustrate the planned analysis pipeline.
        </p>
      </section>

      <section>
        <h2>Results</h2>
        <div className="summary">
          <p>
            Strategy distribution shifted from {s.strategy.preHipDominant}/{s.n} hip-dominant and {s.strategy.preAnkleDominant}/{s.n} ankle-dominant pre-fatigue to {s.strategy.postHipDominant}/{s.n} and {s.strategy.postAnkleDominant}/{s.n} post-fatigue (McNemar ??={fmt(s.strategy.mcnemarChi2,2)}, p={fmt(s.strategy.mcnemarP,3)}).
          </p>
        </div>
        <h3>Kinetics and kinematics</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Outcome</th>
              <th>Pre mean?SD</th>
              <th>Post mean?SD</th>
              <th>? mean (95% CI)</th>
              <th>t</th>
              <th>p</th>
              <th>Unit</th>
            </tr>
          </thead>
          <tbody>
            {s.metrics.map(m => (
              <tr key={m.key}>
                <td>{m.label}</td>
                <td>{fmt(m.preMean)}?{fmt(m.preSD)}</td>
                <td>{fmt(m.postMean)}?{fmt(m.postSD)}</td>
                <td>{fmt(m.deltaMean)} ({fmt(m.ci95[0])}, {fmt(m.ci95[1])})</td>
                <td>{fmt(m.t)}</td>
                <td>{m.p < 0.001 ? "<0.001" : fmt(m.p,3)}</td>
                <td>{m.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="figure">Table 1. Paired comparisons of pre- and post-fatigue landing outcomes (n={s.n}).</p>
      </section>

      <section>
        <h2>Discussion</h2>
        <p>
          The simulated results demonstrate that a futsal-specific fatigue state is associated with a transition toward ankle-dominant strategies and a global stiffening of landing mechanics?higher peak vGRF and loading rates, reduced joint excursions, and shorter time to peak force. This pattern aligns with prior evidence that fatigue reduces the capacity for proximal energy absorption and increases impact transmission.
        </p>
        <p>
          From an applied perspective, coaches should integrate proximal control drills (e.g., hip-dominant deceleration progressions, trunk control under fatigue) into conditioning and include task-specific landings late in sessions to maintain motor solutions when fatigued. Given female athletes? heightened susceptibility to non-contact knee injuries, preserving hip-dominant contributions under fatigue may be protective.
        </p>
      </section>

      <section>
        <h2>Limitations</h2>
        <ul>
          <li>Dataset is simulated to illustrate the statistical approach; external validity requires empirical data collection.</li>
          <li>Strategy classification used a single excursion ratio threshold; energy-based partitioning may refine categorization.</li>
          <li>Only sagittal-plane outcomes are reported; frontal/transverse mechanics and neuromuscular activation were not modeled.</li>
        </ul>
      </section>

      <section>
        <h2>Conclusions</h2>
        <p>
          Futsal-specific fatigue shifts shock absorption toward an ankle-dominant pattern and increases impact loading during single-leg landings in elite female athletes. Interventions should emphasize fatigue-resistant proximal control to mitigate elevated landing loads.
        </p>
      </section>

      <section>
        <h2>References (APA style)</h2>
        <ol>
          <li>Barbero-?lvarez, J. C., Soto, V. M., Barbero-?lvarez, V., &amp; Granda-Vera, J. (2008). Match analysis and heart rate of futsal players during competition. <em>Journal of Sports Sciences</em>, 26(1), 63?73. https://doi.org/10.1080/02640410701287289</li>
          <li>Dogramaci, S. N., Watsford, M. L., &amp; Murphy, A. J. (2011). Time-motion analysis of international and national level futsal. <em>Journal of Strength and Conditioning Research</em>, 25(3), 646?651. https://doi.org/10.1519/JSC.0b013e3181c6a02e</li>
          <li>Decker, M. J., Torry, M. R., Wyland, D. J., Sterett, W. I., &amp; Steadman, J. R. (2003). Gender differences in lower extremity kinematics, kinetics and energy absorption during landing. <em>Clinical Biomechanics</em>, 18(7), 662?669. https://doi.org/10.1016/S0268-0033(03)00090-1</li>
          <li>Chappell, J. D., Yu, B., Kirkendall, D. T., &amp; Garrett, W. E. (2002). A comparison of knee kinetics between male and female recreational athletes in stop-jump tasks. <em>American Journal of Sports Medicine</em>, 30(2), 261?267. https://doi.org/10.1177/03635465020300021901</li>
          <li>Hewett, T. E., Myer, G. D., &amp; Ford, K. R. (2005). Biomechanical measures of neuromuscular control and valgus loading of the knee predict ACL injury risk in female athletes. <em>American Journal of Sports Medicine</em>, 33(4), 492?501. https://doi.org/10.1177/0363546504269591</li>
          <li>Madigan, M. L., &amp; Pidcoe, P. E. (2003). Changes in landing biomechanics during a fatiguing landing activity. <em>Journal of Electromyography and Kinesiology</em>, 13(6), 491?498. https://doi.org/10.1016/S1050-6411(03)00025-6</li>
          <li>Blackburn, J. T., &amp; Padua, D. A. (2009). Sagittal-plane trunk position, landing forces, and quadriceps electromyographic activity. <em>Journal of Athletic Training</em>, 44(2), 174?179. https://doi.org/10.4085/1062-6050-44.2.174</li>
          <li>Derrick, T. R., Hamill, J., &amp; Caldwell, G. E. (1998). Energy absorption of impacts during running at various stride lengths. <em>Medicine &amp; Science in Sports &amp; Exercise</em>, 30(1), 128?135. https://doi.org/10.1097/00005768-199801000-00018</li>
          <li>Bangsbo, J., Iaia, F. M., &amp; Krustrup, P. (2008). The Yo?Yo intermittent recovery test: A useful tool for evaluation of physical performance in intermittent sports. <em>Sports Medicine</em>, 38(1), 37?51. https://doi.org/10.2165/00007256-200838010-00004</li>
          <li>Pappas, E., Hagins, M., Sheikhzadeh, A., Nordin, M., &amp; Rose, D. (2007). Biomechanical differences between unilateral and bilateral landings from a jump: Gender differences. <em>Clinical Journal of Sport Medicine</em>, 17(4), 263?268. https://doi.org/10.1097/JSM.0b013e318067b57a</li>
        </ol>
      </section>

      <footer>
        <p>Note: This publication uses a simulated dataset to illustrate analyses faithful to the stated design.</p>
      </footer>
    </article>
  );
}
