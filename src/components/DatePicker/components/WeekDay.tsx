import React from "react";

export default function WeekDay(props: { title: string; label: string }) {
  return (
    <>
      <div aria-label={props.label}>{props.title}</div>
    </>
  );
}
