import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import React from "react";

import CreateTask from "@/assets/img/screenshots/create-task.svg";
import Deadline from "@/assets/img/screenshots/deadline.png";
import DashboardScreenshot from "@/assets/img/dashboard.png";

// "A manager sets up a task in under a minute: chooses who receives it and when — daily, one-time, on specific weekdays, or on specific days of the month. Then selects the confirmation type: photo, text, or a “completed” button."

export default function HowItWorks() {
  return (
    <section className="flex flex-col sm:gap-15 gap-4" id="how-it-works">
      <SectionTitle
        title={
          "Our workflow: 3 steps to order and discipline without your involvement"
        }
        description={
          "You no longer need to keep track of employees or repeat messages in chats. We’ve built an autonomous workflow where the manager simply sets standards in a convenient web dashboard, while the system handles reminders, collects photo reports through Telegram, and provides analytics. Your involvement is only needed to review the final results."
        }
        label={"CONTROL AUTOMATION"}
        labelStyle={"border-[#C9FF85] bg-[rgba(201,255,133,0.15)]"}
      />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-7.5">
        <Card
          label={"Control down to the details"}
          title={"Standard setup"}
          text={
            "A manager sets up a task in under a minute: chooses who receives it and when — daily, one-time, on specific weekdays, or on specific days of the month. Then selects the confirmation type: photo, text, or a “completed” button."
          }
          img={CreateTask}
          style={"bg-[rgba(153,102,204,0.15)] text-foreground "}
        />
        <Card
          label={"Easy for your team"}
          title={"Notification and response"}
          text={
            "An instant Telegram notification arrives exactly on schedule. Submitting a photo takes the employee less than 30 seconds."
          }
          img={Deadline}
          style="bg-[rgba(78,205,196,0.15)] text-foreground"
        />
        <Card
          label={"Instant analytics"}
          title={"Dashboard: result tracking"}
          text={
            "The system automatically records the response time, attaches the photo, and highlights the status in green or red."
          }
          imgStyle="max-h-full shadow-report"
          img={DashboardScreenshot}
          style="bg-[rgba(255,217,125,0.15)] lg:col-span-2 text-foreground"
        />
      </div>
    </section>
  );
}

// col-span-2 - full width for the grid

const Card = ({ label, title, text, img, style, imgStyle }) => {
  return (
    <div
      className={`p-10 rounded-4xl ${style} flex flex-col gap-7.5 justify-between`}
    >
      <div className="flex flex-col gap-4">
        <div className="py-0.5 px-4 bg-white w-max rounded-full ">
          <p className="font-bold sn:text-sm text-xs leading-[170%] text-foreground">
            {label}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="lg:text-4xl text-xl font-bold leading-[115%]">
            {title}
          </h3>
          <p className="font-normal lg:text-lg text-sm leading-[170%] ">
            {text}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image
          className={`rounded-xl max-h-70 object-cover ${imgStyle}`}
          src={img}
          alt={title}
        />
      </div>
    </div>
  );
};
