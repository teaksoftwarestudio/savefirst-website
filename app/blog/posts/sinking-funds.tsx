import type { PostMeta } from "../types";
import { Callout, MathBlock, Takeaways } from "../components";

export const meta: PostMeta = {
  slug: "what-is-a-sinking-fund",
  title: "What is a sinking fund? Examples, math, and how to start",
  seoTitle: "What Is a Sinking Fund? Examples and Simple Math",
  description:
    "A sinking fund turns a known future cost into a small monthly number. What sinking funds are, how they differ from an emergency fund, and worked examples.",
  excerpt:
    "Car registration isn't an emergency. You knew it was coming. A sinking fund turns it into a small number you never think about again.",
  keywords: [
    "sinking fund",
    "what is a sinking fund",
    "sinking fund examples",
    "sinking fund vs emergency fund",
    "irregular expenses",
    "how to save for annual expenses",
    "budget sinking funds",
  ],
  category: "Goals & sinking funds",
  published: "2026-11-09",
  readingMinutes: 6,
  coverStat: { value: "$100", label: "a month covers three known costs" },
  sections: [
    { id: "what-is", label: "What a sinking fund is" },
    { id: "why-surprises", label: "Why 'surprise' costs aren't surprises" },
    { id: "the-formula", label: "The one formula you need" },
    { id: "examples", label: "Sinking fund examples" },
    { id: "vs-emergency-fund", label: "Sinking fund vs emergency fund" },
    { id: "starting-late", label: "Starting late" },
    { id: "in-savefirst", label: "How SaveFirst does it" },
    { id: "faq", label: "FAQ" },
  ],
  faq: [
    {
      q: "What is a sinking fund in simple terms?",
      a: "A sinking fund is money you set aside a little at a time for a specific cost you know is coming, like car registration or holiday gifts. When the bill arrives, the money is already there.",
    },
    {
      q: "What's the difference between a sinking fund and an emergency fund?",
      a: "A sinking fund is for a known cost on a known date. An emergency fund is for costs you can't predict, like a sudden repair or a gap in income. Keeping them separate means a planned bill never drains your emergency money.",
    },
    {
      q: "How many sinking funds should I have?",
      a: "One for each known cost that would otherwise knock a normal month off course. Starting with two or three is easier to keep up than starting with ten. Add more once the first few feel automatic.",
    },
    {
      q: "Do sinking funds need separate bank accounts?",
      a: "Not necessarily. Where you keep the money is your call. What matters is that each fund has its own target, date and monthly amount, so you can see what's covered at a glance.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <Takeaways
        items={[
          "A sinking fund is a bucket for a known cost on a known date.",
          "Monthly amount = (target − already saved) ÷ months left.",
          "Three small funds of $30, $60 and $10 cover $960 of costs a year for $100 a month.",
          "Sinking funds are for the predictable. Your emergency fund is for everything else.",
        ]}
      />

      <section id="what-is">
        <h2>What a sinking fund is</h2>
        <p>
          A <strong>sinking fund</strong> is money you set aside a little at a time for one specific
          cost you know is coming. It has three parts: a <strong>target</strong> (how much), a{" "}
          <strong>date</strong> (when), and a <strong>monthly amount</strong> (what it takes to get
          there).
        </p>
        <p>
          When the bill arrives, the money is already sitting there. The month it lands in looks
          like any other month.
        </p>
      </section>

      <section id="why-surprises">
        <h2>Why &lsquo;surprise&rsquo; costs aren&rsquo;t surprises</h2>
        <p>
          Holiday gifts happen in December every year. Car registration comes on the same date every
          year. The annual renewal on that app you use shows up when it did last time.
        </p>
        <p>
          These costs feel like emergencies because they don&rsquo;t show up in a normal month. Then
          one month they all show up at once, and a $600 December wipes out what should have been
          savings.
        </p>
        <p>
          A sinking fund spreads that cost back across the months before it, where it&rsquo;s small
          enough to not notice.
        </p>
      </section>

      <section id="the-formula">
        <h2>The one formula you need</h2>
        <MathBlock
          rows={[
            { label: "Target", value: "$600" },
            { label: "Already saved", value: "$0" },
          ]}
          total={{ label: "Still needed", value: "$600" }}
          caption="Then divide by the months left: $600 ÷ 10 months = $60 a month."
        />
        <p>
          That&rsquo;s it. <strong>(Target − already saved) ÷ months left = monthly amount.</strong>{" "}
          If the number looks too big, you have two honest levers: a smaller target, or more months
          (by starting earlier next time).
        </p>
      </section>

      <section id="examples">
        <h2>Sinking fund examples</h2>
        <p>Three common ones, with real-looking numbers:</p>
        <div className="post-table-scroll">
          <table className="post-table">
            <thead>
              <tr>
                <th scope="col">Fund</th>
                <th scope="col">Target</th>
                <th scope="col">Months left</th>
                <th scope="col">Per month</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Car registration</td>
                <td>$240</td>
                <td>8</td>
                <td>$30</td>
              </tr>
              <tr>
                <td>Holiday gifts</td>
                <td>$600</td>
                <td>10</td>
                <td>$60</td>
              </tr>
              <tr>
                <td>Annual app renewals</td>
                <td>$120</td>
                <td>12</td>
                <td>$10</td>
              </tr>
              <tr className="post-table-total">
                <td>Total</td>
                <td>$960</td>
                <td></td>
                <td>$100</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          $100 a month, set aside before spending, means $960 of &ldquo;surprises&rdquo; stop being
          surprises. Other good candidates: next fall&rsquo;s tuition, a friend&rsquo;s wedding, a
          trip home, a new phone when the current one is on its last legs.
        </p>
        <Callout title="Where it fits in your month">
          <p>
            Sinking fund amounts come out with your savings, before your spendable balance. So if
            your spendable balance is $750, it&rsquo;s $750 with December already handled. More on
            that number in{" "}
            <a href="/blog/how-much-can-i-spend">How much can I spend?</a>
          </p>
        </Callout>
      </section>

      <section id="vs-emergency-fund">
        <h2>Sinking fund vs emergency fund</h2>
        <p>They both hold money for later, but they do different jobs:</p>
        <ul>
          <li>
            <strong>Sinking fund</strong>: known cost, known date. Tuition in September. Gifts in
            December.
          </li>
          <li>
            <strong>Emergency fund</strong>: unknown cost, unknown date. A burst pipe. A gap between
            jobs.
          </li>
        </ul>
        <p>
          Keeping them separate protects both. If holiday gifts come out of your emergency fund, it
          isn&rsquo;t there when the real emergency shows up. And if you can see that December is
          already covered, you won&rsquo;t be tempted to dip into the money meant for the unexpected.
        </p>
      </section>

      <section id="starting-late">
        <h2>Starting late</h2>
        <p>
          Found out about sinking funds in October, with gifts due in December? You&rsquo;re not
          behind. You&rsquo;re just starting with fewer months.
        </p>
        <p>
          Run the formula with the months you have. If $600 ÷ 2 months is more than you can set
          aside, lower the target to something that fits, and start next year&rsquo;s fund in
          January. Every month you add makes the monthly number smaller.
        </p>
      </section>

      <section id="in-savefirst">
        <h2>How SaveFirst does it</h2>
        <p>
          In SaveFirst, every goal and sinking fund gets its own bucket with a target, a due date
          and a percentage complete. Each one is funded every month as part of saving first, before
          your spendable balance is worked out.
        </p>
        <p>
          So instead of a vague sense that December will be expensive, you see something like{" "}
          <strong>Holiday gifts: $360 of $600, 60%</strong>. Next to it, your emergency fund keeps
          growing separately. Then you stop thinking about it.
        </p>
      </section>
    </>
  );
}
