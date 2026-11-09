import type { PostMeta } from "../types";
import { Callout, MathBlock, Takeaways } from "../components";

export const meta: PostMeta = {
  slug: "how-much-can-i-spend",
  title: "How much can I spend? Find your safe-to-spend number",
  seoTitle: "How Much Can I Spend? Find Your Safe-to-Spend Number",
  description:
    "Your bank balance isn't what you can spend. Work out a safe-to-spend number after bills and savings, plus a daily figure you can use at the checkout.",
  excerpt:
    "Your bank balance answers the wrong question. Here's the number that answers the right one, and how to use it before you tap pay.",
  keywords: [
    "how much can I spend",
    "safe to spend",
    "spendable balance",
    "daily spending limit",
    "how much money can I spend per day",
    "can I afford this",
    "spending plan",
  ],
  category: "Spendable balance",
  published: "2026-11-09",
  readingMinutes: 6,
  coverStat: { value: "$25", label: "a day, safe to spend" },
  sections: [
    { id: "bank-balance", label: "Why your bank balance misleads you" },
    { id: "the-formula", label: "The safe-to-spend formula" },
    { id: "daily-number", label: "Turning it into a daily number" },
    { id: "before-you-buy", label: "Checking before you buy" },
    { id: "when-it-says-no", label: "When the answer is no" },
    { id: "in-savefirst", label: "How SaveFirst does it" },
    { id: "faq", label: "FAQ" },
  ],
  faq: [
    {
      q: "What does safe to spend mean?",
      a: "Safe to spend is the money left after your bills and your savings target are accounted for. Spending it won't touch rent, won't touch savings, and won't leave a hole later in the month.",
    },
    {
      q: "Should my daily spending number be the same every day?",
      a: "No. It's your remaining spendable balance divided by the days left. Spend less today and tomorrow's number goes up. Spend more and it goes down. That's what keeps it honest.",
    },
    {
      q: "Does safe to spend include yearly bills?",
      a: "It should. Costs that come once or twice a year, like car registration or holiday gifts, are easiest to handle as sinking funds: a small monthly amount set aside so the bill never lands on one month.",
    },
    {
      q: "What if my safe-to-spend number is zero?",
      a: "Then the honest answer today is no, and no usually means not yet. Look at whether the savings target or a bill can move, or wait for the next income. You're not in trouble; the number is just telling you the truth early.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <Takeaways
        items={[
          "Your bank balance includes money that's already spoken for. It's true, but not useful.",
          "Safe to spend = income − bills − savings target − what you've spent so far.",
          "Divide by the days left for a daily number that rebalances itself.",
          "Before a bigger purchase, ask what it does to the rest of the month, not just whether it clears.",
        ]}
      />

      <section id="bank-balance">
        <h2>Why your bank balance misleads you</h2>
        <p>
          Say your checking account shows <strong>$1,900</strong> on the 10th. That feels like a lot.
        </p>
        <p>
          But rent ($1,200) hasn&rsquo;t gone out yet. Neither has your phone bill ($65) or the $150
          you meant to put aside. Take those out and the honest number is <strong>$485</strong>.
        </p>
        <p>
          Your bank balance answers &ldquo;how much money is in the account?&rdquo; The question you
          actually have at a checkout is different: &ldquo;how much of this can I spend without
          causing a problem later?&rdquo; Those are rarely the same number.
        </p>
      </section>

      <section id="the-formula">
        <h2>The safe-to-spend formula</h2>
        <p>
          Your <strong>safe-to-spend number</strong> (we call it your spendable balance) is what&rsquo;s
          left once everything that has to happen has been accounted for:
        </p>
        <MathBlock
          rows={[
            { label: "Income this month", value: "$2,800" },
            { label: "Bills", value: "$1,450" },
            { label: "Saved first", value: "$600" },
          ]}
          total={{ label: "Spendable", value: "$750" }}
        />
        <p>
          Two things make this work. First, <strong>savings come out before spending</strong>, not
          after. If you&rsquo;re new to that idea,{" "}
          <a href="/blog/pay-yourself-first">pay yourself first</a> explains why the order matters.
          Second, <strong>bills count when they&rsquo;re due this month</strong>, even if they
          haven&rsquo;t left your account yet. That&rsquo;s exactly what a bank balance gets wrong.
        </p>
        <p>
          As you spend, subtract it. $750 becomes $702 after a $48 dinner. That running number is
          the only one you need to look at day to day.
        </p>
      </section>

      <section id="daily-number">
        <h2>Turning it into a daily number</h2>
        <p>
          A monthly figure is hard to feel at a coffee counter. A daily one isn&rsquo;t. Divide your
          spendable balance by the days left in the month:
        </p>
        <MathBlock
          rows={[
            { label: "Spendable", value: "$750" },
          ]}
          total={{ label: "Per day, across 30 days", value: "$25" }}
          caption="$750 ÷ 30 days = $25 a day."
        />
        <p>
          The useful part is that it rebalances. Say it&rsquo;s the 16th and you&rsquo;ve spent $310
          so far. You have $440 left across 15 days, which is about $29 a day. You spent a little
          less than $25 a day, so your number went up. Spend more one week and it gently comes down
          the next. No streaks to break, no restarting.
        </p>
        <Callout title="Why daily works">
          <p>
            You don&rsquo;t need to remember a monthly plan when you&rsquo;re standing in line. One
            small number, updated as you go, is enough to decide in a second.
          </p>
        </Callout>
      </section>

      <section id="before-you-buy">
        <h2>Checking before you buy</h2>
        <p>
          Most money tools tell you what you spent three days after you spent it. The more useful
          moment is the three seconds <em>before</em> you tap pay.
        </p>
        <p>
          The question isn&rsquo;t &ldquo;does my balance cover this?&rdquo; It almost always does.
          The question is &ldquo;what does this do to the rest of my month?&rdquo;
        </p>
        <MathBlock
          rows={[
            { label: "Spendable", value: "$750" },
            { label: "AirPods", value: "$85" },
          ]}
          total={{ label: "Still spendable", value: "$665" }}
          caption="About $22 a day for the rest of the month. Savings stay untouched."
        />
        <p>
          Seeing &ldquo;$25 a day becomes $22 a day&rdquo; is a much clearer decision than
          &ldquo;$85, sure, probably fine.&rdquo; Sometimes you&rsquo;ll still buy it. That&rsquo;s
          the point: you&rsquo;ll buy it knowing.
        </p>
      </section>

      <section id="when-it-says-no">
        <h2>When the answer is no</h2>
        <p>
          Sometimes the math says no. A $400 purchase against $300 spendable doesn&rsquo;t work this
          month, and pretending otherwise just moves the problem to next month.
        </p>
        <p>
          But no usually means <strong>not yet</strong>. A few honest options:
        </p>
        <ul>
          <li>Wait for next month&rsquo;s income, when the number resets.</li>
          <li>Make it a goal with its own bucket, and fund it a little each month.</li>
          <li>Lower this month&rsquo;s savings target on purpose, and know that you did.</li>
        </ul>
        <p>Every one of those is a plan. None of them is a failure.</p>
      </section>

      <section id="in-savefirst">
        <h2>How SaveFirst does it</h2>
        <p>
          SaveFirst puts your spendable balance on the first screen of the app. You set income,
          bills and a savings target once, add spending by voice or by typing, and the number keeps
          itself current.
        </p>
        <p>
          The <strong>Pre-Spend Check</strong> is the before-you-buy step above, built in. Type in
          the price and SaveFirst takes it away from what&rsquo;s left this month, after your bills
          and savings, and shows you the result. It&rsquo;s arithmetic, not a guess, and the numbers
          behind the answer are always on screen.
        </p>
        <p>No bank linking, no imported transactions, and no score.</p>
      </section>
    </>
  );
}
