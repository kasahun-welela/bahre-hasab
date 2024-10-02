"use client";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function CalculateHolidays() {
  const returnWongelawi = (n: number) => {
    switch (n) {
      case 1:
        return "Matewos";
      case 2:
        return "Markos";
      case 3:
        return "Lukas";
      case 4:
        return "Yohannes";
    }
  };
  const returnNewYearDay = (n: number) => {
    switch (n) {
      case 0:
        return "Monday";
      case 1:
        return "Tuesday";
      case 2:
        return "Wednesday";
      case 3:
        return "Thursday";
      case 4:
        return "Friday";
      case 5:
        return "Saturday";
      case 6:
        return "Sunday";
    }
  };

  const calculateDayOfWeek = (firstDay: any, day: any) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const firstDayIndex = days.indexOf(firstDay);
    const dayIndex = (firstDayIndex + (day - 1)) % 7;
    return days[dayIndex];
  };

  const monthsOfYear = (month: any) => {
    const months = [
      "Meskerem",
      "Tikmt",
      "Hidar",
      "Tesas",
      "Tirr",
      "Yekatit",
      "Megabit",
      "Miyaziya",
      "Ginbot",
      "Sene",
      "Hamle",
      "Nehase",
    ];
    const monthIndex = months.indexOf(month);
    const dayIndex = monthIndex + 1;
    return months[dayIndex];
  };

  const returnEletTewsak = (n: string) => {
    switch (n) {
      case "Monday":
        return 6;
      case "Tuesday":
        return 5;
      case "Wednesday":
        return 4;
      case "Thursday":
        return 3;
      case "Friday":
        return 2;
      case "Saturday":
        return 8;
      default:
        return 7;
    }
  };
  const calculate = () => {
    const ameteKunene = 5500;
    const ameteMhret = 2017;
    const ameteAlem = ameteKunene + ameteMhret;
    const meteneRabit = Math.floor(ameteAlem / 4);

    const wongelawi = returnWongelawi(ameteAlem % 4);
    const eleteEnkutatash = returnNewYearDay((ameteAlem + meteneRabit) % 7);
    const medeb = ameteAlem % 19;
    const wenber = medeb - 1;
    const abekte = (wenber * 11) % 30;
    const metk = (wenber * 19) % 30;
    let bealeMetk = "";
    if (metk > 14) bealeMetk = "Meskerem";
    else bealeMetk = "Tikimt";

    // help us to get the day of bealeMetk
    const firstDay = eleteEnkutatash;
    const eleteMetk = calculateDayOfWeek(firstDay, metk);
    const tewsakElet = returnEletTewsak(eleteMetk);
    //calculating feast of Nineveh / Nenewe
    let neneweTsomMegbiyaWer = bealeMetk == "Meskerem" ? "Tirr" : "Yekatit";

    const mebajaHamer = (tewsakElet + metk) % 30;
    // const neneweTsom = tewsakElet + metk > 30 ? monthsOfYear("Tirr") : "Tirr";
    const nenewe = calculateFastingAndHoliday(
      tewsakElet,
      metk,
      neneweTsomMegbiyaWer
    );
    neneweTsomMegbiyaWer = calculateFastingAndHoliday(
      tewsakElet,
      metk,
      neneweTsomMegbiyaWer
    )[0];
    const abiyTsom = calculateFastingAndHoliday(
      14,
      mebajaHamer,
      neneweTsomMegbiyaWer
    );
    neneweTsomMegbiyaWer = calculateFastingAndHoliday(
      14,
      metk,
      neneweTsomMegbiyaWer
    )[0];
    const debreZeit = calculateFastingAndHoliday(
      11,
      mebajaHamer,
      neneweTsomMegbiyaWer
    );
    neneweTsomMegbiyaWer = calculateFastingAndHoliday(
      11,
      metk,
      neneweTsomMegbiyaWer
    )[0];
    const Hosanna = calculateFastingAndHoliday(
      2,
      mebajaHamer,
      neneweTsomMegbiyaWer
    );
    const siklet = calculateFastingAndHoliday(
      7,
      mebajaHamer,
      neneweTsomMegbiyaWer
    );
    const tinsae = calculateFastingAndHoliday(
      9,
      mebajaHamer,
      neneweTsomMegbiyaWer
    );
    const rkbeKahnat = calculateFastingAndHoliday(
      3,
      mebajaHamer,
      neneweTsomMegbiyaWer
    );
    const erget = calculateFastingAndHoliday(
      18,
      mebajaHamer,
      neneweTsomMegbiyaWer
    );
    const peraklitos = calculateFastingAndHoliday(
      28,
      mebajaHamer,
      neneweTsomMegbiyaWer
    );
    const tsomeHawariyat = calculateFastingAndHoliday(
      29,
      mebajaHamer,
      neneweTsomMegbiyaWer
    );
    const tsomeDhnet = calculateFastingAndHoliday(
      1,
      mebajaHamer,
      neneweTsomMegbiyaWer
    );

    // console.log("wongelawi", wongelawi);
    // console.log("metene rabit", meteneRabit);
    // console.log("enkutatash", eleteEnkutatash);
    // console.log("medeb", medeb);
    // console.log("abekte", abekte);
    // console.log("metk", metk);
    // console.log(" bealemetk", bealeMetk, " ", metk);
    // console.log("abekte day", eleteMetk);
    // // console.log("nenewe", neneweTsomMegbiyaWer, mebajaHamer);
    // // console.log("nenewe megbiya", neneweTsomMegbiyaWer, mebajaHamer);
    // console.log("nenewe", nenewe);
    console.log("nenewe", nenewe);
    console.log("abiy tsom", abiyTsom);
    console.log("debre zeit", debreZeit);
    console.log("hossana", Hosanna);
    console.log("siklet", siklet);
    console.log("tinsae", tinsae);
    console.log("rkbe kahnat", rkbeKahnat);
    console.log("erget", erget);
    console.log("perakitos", peraklitos);
    console.log("tsome hawariyat", tsomeHawariyat);
    console.log("tsome dhnet", tsomeDhnet);
  };
  const calculateFastingAndHoliday = (tewsak: any, metk: any, month: any) => {
    const currentMonth = tewsak + metk > 30 ? monthsOfYear(month) : month;
    const day = (tewsak + metk) % 30;
    // return `${currentMonth}  ${day}`;
    return [currentMonth, day];
  };

  return (
    <div>
      <div className="relative md:w-[400px]">
        <Button
          onClick={calculate}
          className="ri-search-2-line text-white font-bold absolute top-1/2 left-2 transform -translate-y-1/2"
        >
          Calculate
        </Button>
        <Input
          placeholder="Search Events"
          type="text"
          className="pl-10 pr-3 py-2 border rounded-lg w-full"
        />
      </div>

      <Table className="md:w-[50%] mx-auto">
        <TableCaption>A list of Holiday in 2017 E.c</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Holiday Name</TableHead>
            <TableHead>Celebrated on</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>New year</TableCell>
            <TableCell>Meskerem 1</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default CalculateHolidays;
