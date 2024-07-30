"use client";
// import Card from "@/app/dashboard/Card";
import { RadialChart } from "@/components/radialchart";
import { MyBarChart } from "@/components/barchart";

const page = () => {
  return (
    <div className="w-full h-full p-5 rounded">
      <div className="w-full h-fit">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Admin Dashborad</h1>
          <ul className="bg-stone-100 flex gap-2 p-2 rounded">
            <li>
              <button className="rounded border border-slate-300 px-3 py-1 bg-slate-200 text-sm">
                Report
              </button>
            </li>
            <li>
              <button className="rounded border border-slate-300 px-3 py-1 bg-slate-200 text-sm">
                Notification
              </button>
            </li>
            <li>
              <button className="rounded border border-slate-300 px-3 py-1 transition-all hover:bg-slate-200 text-sm ">
                Calender
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-fit font-bold text-xl mt-3">
        <div className="h-full grid grid-cols-4 place-items-center gap-1">
          <RadialChart />
          <RadialChart />
          <RadialChart />
          <RadialChart />
        </div>
      </div>
      <div className="flex justify-between items-center gap-1 w-[100%] h-[53%] mt-4">
        <div className="w-[49%]">
          <MyBarChart />
        </div>
        <div className="w-[49%] border rounded-l h-[99%] grid place-items-center">
          Repot, Notification, Calender
        </div>
      </div>
    </div>
  );
};

export default page;
