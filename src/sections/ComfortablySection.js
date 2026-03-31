import SectionTitle from "@/components/SectionTitle";
import React from "react";

const renderData = [
  {
    title: "1. Runs Directly in Telegram",
    description: (
      <p className="lg:text-base text-sm leading-[170%] text-foreground">
        No need to install extra apps. <br /> Create your{" "}
        <strong>own company Telegram bot</strong> in just a couple of minutes.{" "}
        <br />
        Just send the bot link to your employees — and{" "}
        <strong>half the job is already done</strong>.
      </p>
    ),
  },

  {
    title: "2. Smart Manager Dashboard",
    description: (
      <p className="lg:text-base text-sm leading-[170%] text-foreground">
        Log in to your dashboard and connect <strong>your bot token</strong>.{" "}
        <br />
        Employees appear in the list as soon as they{" "}
        <strong>send the /start command</strong> to the bot. <br />
        Assign <strong>roles and departments</strong> — then start creating
        tasks with deadlines. <br />
        <strong>Artificial Intelligence</strong> handles the rest.
      </p>
    ),
  },
  {
    title: "3. Effortless for Employees",
    description: (
      <p className="lg:text-base text-sm leading-[170%] text-foreground">
        Arrive at work — tap <strong>Check in</strong>. <br />
        The bot automatically sends tasks at the right time, and employees
        confirm with photos. <br />
        If a photo doesn't meet the standard, the AI instantly shows what needs
        to be fixed.
      </p>
    ),
  },
  {
    title: "4. Stress-Free Control",
    description: (
      <p className="lg:text-base text-sm leading-[170%] text-foreground">
        As a manager, you can receive: <br />
        - Real-time Telegram notifications on task progress, <br />- Or a{" "}
        <strong>daily unified report</strong> covering all staff. <br />
        View all details in your <strong>interactive dashboard</strong>: clear,
        visual, and no clutter.
      </p>
    ),
  },
];

export default function ComfortablySection() {
  return (
    <section className="flex flex-col sm:gap-15 gap-4" id="convenient">
      <SectionTitle
        title={"4 Steps to Effortless Order"}
        description={
          "A simple system that requires no training and works out of the box."
        }
        label={"WHY IT'S CONVENIENT"}
        labelStyle={"border-[#9966CC] bg-[rgba(153,102,204,0.15)]"}
      />
      <div className="grid lg:grid-cols-2 grid-cols-1 sm:gap-4 gap-2">
        {renderData.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

const Card = ({ title, description }) => {
  return (
    <div className="flex flex-col sm:gap-8 gap-3 sm:p-10.5 p-6 bg-white rounded-4xl shadow-[0px_0px_14px_rgba(255,217,125,0.28)]">
      <h3 className="lg:text-4xl text-xl font-bold leading-[120%] text-foreground">
        {title}
      </h3>
      {description}
    </div>
  );
};
