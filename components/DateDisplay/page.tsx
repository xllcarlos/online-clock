import React from "react";

const weekDays = {
  0: "Domingo",
  1: "Segunda-feira",
  2: "Terça-feira",
  3: "Quarta-feira",
  4: "Quinta-feira",
  5: "Sexta-feira",
  6: "Sábado"
}

export default function DateDisplay({ date }) {
  if (!!date.weekDay) {
    return <h3>{weekDays[date.weekDay]}, {date.day}/{date.month}/{date.year}</h3>
  }
}