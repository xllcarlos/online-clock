"use client";

import React from "react";
import styles from "./Home.module.css";
import ClockDisplay from "../components/ClockDisplay/page";
import DateDisplay from "../components/DateDisplay/page";
import Footer from "../components/Footer/page";

export default function Home() {

  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 })
  const [clock, setClock] = React.useState({ hours: "", minutes: "" });
  const [date, setDate] = React.useState({ weekDay: "", day: "", month: "", year: "" });

  // Update clock info every 1 seconds
  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    if (hours == "00" && minutes == "00") {
      getDate();
    }

    setClock({ hours, minutes });
    setTimeout(updateClock, 1000);
  }

  // Generates today's date
  function getDate() {
    const now = new Date();
    console.log(now);
    const weekDay = String(now.getDay());
    const day = String(now.getDate()).padStart(2, "0");
    // "+ 1" to correct month value, because zero indicates the first month of the year
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = String(now.getFullYear()).padStart(2, "0");

    setDate({ weekDay, day, month, year });
  }

  React.useEffect(() => {
    function getDimensions() {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }

    getDimensions();
    updateClock();
    getDate();
  }, []);

  return (
    <>
      <header>
        <title>It's just a clock</title>
      </header>
      <div className={styles.container}>
        <ClockDisplay clock={clock} dimensions={dimensions} />
        <DateDisplay date={date} />
        <Footer />
      </div>
    </>
  );
}