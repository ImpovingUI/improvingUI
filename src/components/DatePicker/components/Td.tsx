import React from "react";

export default function Td(props: { title: string; label: string }) {
  return (
    <>
      <td aria-label={props.label}>{props.title}</td>
    </>
  );
}
