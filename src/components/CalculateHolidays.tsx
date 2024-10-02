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
    if (metk > 14) bealeMetk = "Meskrem";
    else bealeMetk = "Tikimt";

    console.log("wongelawi", wongelawi);
    console.log("metene rabit", meteneRabit);
    console.log("enkutatash", eleteEnkutatash);
    console.log("medeb", medeb);
    console.log("abekte", abekte);
    console.log("metk", metk);
    console.log(" bealemetk", bealeMetk, " ", metk);
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
