import type { PostMeta } from "../types";
import { Callout, MathBlock, Takeaways } from "../components";

export const meta: PostMeta = {
  slug: "pay-yourself-first",
  title: "Pay yourself first: how the save-first method actually works",
  seoTitle: "Pay Yourself First: How the Save-First Method Works",
  description:
    "Pay yourself first, explained with real numbers. How saving before you spend works, how to pick a savings target, and why what's left is yours to spend.",
  excerpt:
    "Saving whatever's left at the end of the month usually means saving nothing. Flip the order and the math changes.",
  keywords: [
    "pay yourself first",
    "save first method",
    "how to save money",
    "saving money tips",
    "how to start saving money",
    "money clarity app",
    "budget alternative",
  ],
  category: "The method",
  published: "2026-11-09",
  readingMinutes: 7,
  coverStat: { value: "$600", label: "saved before you spend a dollar" },
  sections: [
    { id: "why-saving-last-fails", label: "Why saving last fails" },
    { id: "what-it-means", label: "What paying yourself first means" },
    { id: "the-math", label: "The math, on one page" },
    { id: "picking-a-target", label: "Picking your savings target" },
    { id: "spending-whats-left", label: "Spending what's left" },
    { id: "when-a-month-goes-sideways", label: "When a month goes sideways" },
    { id: "in-savefirst", label: "How SaveFirst does it" },
    { id: "faq", label: "FAQ" },
  ],
  faq: [
    {
      q: "Is pay yourself first the same as the SaveFirst method?",
      a: "It's the same idea. Pay yourself first is the principle: savings come out before spending. SaveFirst builds the whole app around the number that principle leaves you with, your spendable balance.",
    },
    {
      q: "How much should I pay myself first?",
      a: "There's no number that's right for everyone, and we won't pretend there is. A good starting point is an amount you'd still keep aside in a tight month. You can set it as a fixed dollar amount or a percentage of income, and raise it once it feels easy.",
    },
    {
      q: "What if I need the money I saved?",
      a: "It's still your money. Moving some back isn't failing. Change the target, and the plan works from the new number. The goal is a habit you keep, not a perfect month.",
    },
    {
      q: "Do I need to link my bank to pay myself first in SaveFirst?",
      a: "No. SaveFirst never links to your bank and never imports transactions. You set your income, bills and savings target once, and add what you spend by voice or by typing.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <Takeaways
        items={[
          "Saving what's left at month end usually means saving nothing. Save when income arrives instead.",
          "Income − bills − saved first = your spendable balance. That's the only number you need day to day.",
          "Pick a savings target you'd keep in a tight month. Raise it later.",
          "A missed month isn't a failure. Change the number and keep going.",
        ]}
      />

      <section id="why-saving-last-fails">
        <h2>Why saving last fails</h2>
        <p>
          The usual advice goes like this: pay your bills, live your life, and save whatever is left.
          It sounds reasonable. It almost never works.
        </p>
        <p>
          Spending expands to fill the space it&rsquo;s given. A $6.50 coffee here, a $48 dinner
          there, a sale you weren&rsquo;t planning on. None of it feels big. But by the 30th, the
          money that was supposed to become savings has quietly become a month.
        </p>
        <p>
          This isn&rsquo;t a character flaw. It&rsquo;s an ordering problem. When savings sit at the
          end of the line, they get whatever survives. And not much survives a whole month of small,
          reasonable decisions.
        </p>
      </section>

      <section id="what-it-means">
        <h2>What paying yourself first means</h2>
        <p>
          <strong>Pay yourself first</strong> means your savings get set aside the moment income
          arrives, before any spending decision is made. Your future self is the first bill you pay.
        </p>
        <p>The order changes from this:</p>
        <ol>
          <li>Get paid</li>
          <li>Spend</li>
          <li>Save what&rsquo;s left (usually nothing)</li>
        </ol>
        <p>To this:</p>
        <ol>
          <li>Get paid</li>
          <li>Save first, and cover your bills</li>
          <li>Spend what&rsquo;s left, freely</li>
        </ol>
        <p>
          That last word matters. Once savings and bills are handled, the money that remains is
          genuinely yours. You don&rsquo;t need to second-guess every purchase, because the
          important stuff already happened.
        </p>
      </section>

      <section id="the-math">
        <h2>The math, on one page</h2>
        <p>Here&rsquo;s a real-looking month. Monthly take-home pay of $2,800:</p>
        <MathBlock
          rows={[
            { label: "Income", value: "$2,800" },
            { label: "Bills", value: "$1,450" },
            { label: "Saved first", value: "$600" },
          ]}
          total={{ label: "Spendable", value: "$750" }}
          caption="Rent, phone, insurance and subscriptions are in bills. Savings come out the day income arrives."
        />
        <p>
          That $750 is your <strong>spendable balance</strong>. Groceries out, coffee, a night out,
          the thing in your cart. It&rsquo;s the honest answer to &ldquo;what can I actually
          spend?&rdquo;
        </p>
        <p>
          Compare it to your bank balance on payday, which might say $3,100. That number includes
          rent you haven&rsquo;t paid yet and savings you haven&rsquo;t moved yet. It&rsquo;s true,
          but it isn&rsquo;t useful. The spendable balance is.
        </p>
        <Callout title="Want the daily version?">
          <p>
            $750 across a 30-day month is $25 a day. We walk through how that number moves in{" "}
            <a href="/blog/how-much-can-i-spend">How much can I spend? Find your safe-to-spend number</a>.
          </p>
        </Callout>
      </section>

      <section id="picking-a-target">
        <h2>Picking your savings target</h2>
        <p>
          You can set a savings target two ways: a <strong>fixed dollar amount</strong> ($600 a
          month) or a <strong>percentage of income</strong> (say, 10% of whatever comes in). Fixed
          amounts are easier to picture. Percentages flex when income does, which helps if your pay
          changes month to month.
        </p>
        <p>
          We won&rsquo;t tell you what your number should be. Your rent, your city and your goals
          aren&rsquo;t ours to judge. But one test works for almost everyone:
        </p>
        <Callout>
          <p>
            <strong>Pick the amount you&rsquo;d still keep aside in a tight month.</strong> A small
            number you keep beats a big number you undo by the 15th.
          </p>
        </Callout>
        <p>
          If $600 feels like a stretch, start at $200. If $200 turns out to be easy, raise it next
          month. The habit is the hard part. The number can grow later.
        </p>
      </section>

      <section id="spending-whats-left">
        <h2>Spending what&rsquo;s left</h2>
        <p>
          Here&rsquo;s the part most money advice skips: once you&rsquo;ve saved first, you&rsquo;re
          allowed to spend the rest. Not grudgingly. Actually spend it.
        </p>
        <p>
          The coffee isn&rsquo;t a problem when it comes out of $750 that was already meant for
          spending. The math was done when your income arrived. You don&rsquo;t have to redo it at
          the checkout.
        </p>
        <p>
          The one question worth asking before a bigger purchase is simple: what does this do to the
          rest of my month? If you&rsquo;re eyeing $85 headphones with $750 spendable, the answer
          is:
        </p>
        <MathBlock
          rows={[
            { label: "Spendable", value: "$750" },
            { label: "Headphones", value: "$85" },
          ]}
          total={{ label: "Still spendable", value: "$665" }}
          caption="About $22 a day for the rest of a 30-day month. Savings untouched."
        />
        <p>That&rsquo;s a decision you can make in three seconds, with the numbers in front of you.</p>
      </section>

      <section id="when-a-month-goes-sideways">
        <h2>When a month goes sideways</h2>
        <p>
          Some months, the car needs tires or a friend gets married or the hours get cut. You might
          not hit your savings target. That&rsquo;s fine.
        </p>
        <p>
          You&rsquo;re not in trouble. Lower the target for this month, or pause it, and keep going.
          The point of saving first is building a habit that survives real life, not a streak that
          breaks the first time life happens.
        </p>
        <p>
          If the same expense keeps knocking you off course, it probably isn&rsquo;t a surprise. It
          might be a known cost that needs its own bucket. That&rsquo;s what{" "}
          <a href="/blog/what-is-a-sinking-fund">sinking funds</a> are for.
        </p>
      </section>

      <section id="in-savefirst">
        <h2>How SaveFirst does it</h2>
        <p>
          SaveFirst is a money clarity app for iPhone built around exactly this order. You tell it
          what comes in and what your recurring bills are, once. You set a savings target. It shows
          you one number: your spendable balance.
        </p>
        <ul>
          <li>
            <strong>Spendable balance</strong>: what&rsquo;s actually safe to spend, after savings
            and bills.
          </li>
          <li>
            <strong>Pre-Spend Check</strong>: type in what you&rsquo;re about to buy and see what it
            does to your month, with the math shown.
          </li>
          <li>
            <strong>Goals and sinking funds</strong>: an emergency fund, a trip, next year&rsquo;s
            tuition, each with its own bucket.
          </li>
          <li>
            <strong>No bank linking</strong>: you add what you spend by voice or by typing. Every
            number is one you put there.
          </li>
        </ul>
        <p>No spreadsheet. No lecture. No score.</p>
      </section>
    </>
  );
}
