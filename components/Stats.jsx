"use client";

import CountUp from "react-countup";

const stats = [
  { num: 2, text: "Years of experience" },
  { num: 8, text: "Technologies mastered" },
  { num: 20, text: "Projects completed" },
  { num: 1000, text: "Code commits" },
];

const formatNumber = (num) => {
  if (num >= 1_000_000_000)
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
  if (num >= 1_000_000)
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return num.toString();
};

const Stats = () => {
  return (
    <section className="pt-8 xl:pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center"
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                formattingFn={formatNumber}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
