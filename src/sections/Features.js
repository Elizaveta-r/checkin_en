import React from "react";
import Image from "next/image";

import FirstFeature from "@/assets/img/create-task.png";
import Line from "@/assets/icons/Line";
import LineFull from "@/assets/icons/LineFull";
import Telegram from "@/assets/icons/Telegram";
import { BellRing, CalendarClock, Repeat } from "lucide-react";

import SecondChildImg1 from "@/assets/img/features/2.1.png";
import SecondChildImg2 from "@/assets/img/features/2.2.png";
import SecondChildImg3 from "@/assets/img/features/2.3.png";

import Report from "@/assets/img/report.png";
import SectionTitle from "@/components/SectionTitle";

export default function Features() {
  return (
    <section className="flex flex-col sm:gap-15 gap-4" id="features">
      <SectionTitle
        label={"WEB + TELEGRAM"}
        labelStyle={"border-[#FFD97D] bg-[rgba(255,217,125,0.15)]"}
        title={"Features that turn standards into routine"}
        description={
          "Thanks to our unique Telegram integration, your team doesn’t waste time learning new software. You set up workflows in the web dashboard, and we make sure they are followed on the ground."
        }
      />
      <div className="grid grid-cols-1 gap-7.5">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-7.5">
          <Card
            title={"Precise timing"}
            text={
              <>
                Assign routine tasks to specific roles or departments with a
                strict time slot. <br /> The system will automatically send
                reminders and make sure tasks are completed exactly on time.
              </>
            }
          >
            <FirstChild />
          </Card>
          <Card
            title={"Scale without complexity"}
            text={
              <>
                Create <strong>Departments</strong> and <strong>Roles</strong>{" "}
                in the web dashboard. <br /> Assign routine tasks to a specific{" "}
                <strong>Role</strong> (for example, {`"Sales Associate"`})
                instead of assigning them to each employee individually.
              </>
            }
          >
            <SecondChild />
          </Card>
        </div>
        <Card
          hasBg={false}
          title={"One-click reporting: simple for your team"}
          text={
            "Employees receive tasks in the messenger they already use. To complete a task, they simply send a photo, checklist, or short text. Minimal effort for the team, maximum visibility for you."
          }
        >
          <ThirdChild />
        </Card>
      </div>
    </section>
  );
}

const Card = ({ title, text, children, hasBg = true }) => {
  return (
    <div className="relative overflow-hidden z-1 py-10 px-7.5 rounded-4xl bg-[#F8F4F1] flex lg:gap-10 gap-6 justify-between flex-col">
      <div className="flex flex-col gap-3">
        <h3 className="font-medium text-foreground lg:text-4xl text-2xl leading-normal">
          {title}
        </h3>
        <p className="font-normal text-foreground lg:text-base text-sm leading-[170%]">
          {text}
        </p>
      </div>
      {hasBg ? (
        <div className="py-3.5 bg-[rgba(248,244,241,0.4)] shadow-[0_4px_10px_rgba(240,227,220,0.502)] rounded-2xl">
          {children}
        </div>
      ) : (
        children
      )}
      <figure
        className={`absolute ${
          hasBg ? "left-0" : "left-1/2 -translate-x-1/2"
        } ${!hasBg ? "bottom-7.5" : "-bottom-14"} -z-1`}
      >
        {hasBg ? <Line /> : <LineFull />}
      </figure>
    </div>
  );
};

const FirstChild = () => {
  return (
    <div className="relative flex items-center justify-center py-3">
      <figure className="absolute sm:left-7 left-1 top-13 p-2.5 bg-white rounded-lg shadow-icons">
        <CalendarClock size={30} />
      </figure>
      <figure className="absolute sm:left-11 -left-2 bottom-7 rotate-3 p-2.5 bg-white rounded-lg shadow-icons">
        <Repeat size={35} />
      </figure>
      <figure className="absolute sm:right-14 right-3 top-4.5 rotate-6 p-2.5 bg-white rounded-lg shadow-icons">
        <BellRing size={24} />
      </figure>
      <figure className="absolute sm:right-5 -right-2 bottom-17 rotate-4 p-2.5 bg-white rounded-lg shadow-icons">
        <Telegram />
      </figure>
      <div className="xl:max-w-[25vw] lg:max-w-[30vw] md:max-w[45vw] max-w-[65vw] px-4">
        <Image
          src={FirstFeature}
          className="object-cover w-full rounded-2xl"
          alt="Task creation"
        />
      </div>
    </div>
  );
};

const SecondChild = () => {
  return (
    <div className="px-4 py-6 flex items-center justify-center">
      <div className="grid grid-cols-[2fr_140px] gap-4 items-center">
        <div className="grid grid-cols-1 gap-2.5 w-full">
          <Image
            className="rounded-2xl h-34 object-cover object-left"
            src={SecondChildImg1}
            alt="Roles"
          />
          <Image
            className="rounded-2xl h-34 object-cover object-left"
            src={SecondChildImg2}
            alt="Departments"
          />
        </div>
        <Image src={SecondChildImg3} alt="Department creation" />
      </div>
    </div>
  );
};

const ThirdChild = () => {
  return (
    <div className="flex items-center justify-center">
      <Image
        className="shadow-report rounded-lg"
        loading="eager"
        src={Report}
        alt="Reports"
      />
    </div>
  );
};
