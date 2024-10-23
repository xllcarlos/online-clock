import React from "react";

export default function ClockDisplay({ clock, dimensions }) {

  if (dimensions.width > dimensions.height) {
    return <h1>{clock.hours}:{clock.minutes}</h1>
  }

  return (
    <>
      <h1>{clock.hours}</h1>
      <h1>{clock.minutes}</h1>
    </>
  )
}