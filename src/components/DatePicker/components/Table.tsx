import React from "react";
import Row from "./Row";

export default function Table(props: { data: Object[] }) {
  // console.log(props.data[0].abb);

  return (
    <>
      <table className="container-picker__content">
        <thead>
          <tr>
            {props.data.map((day) => (
              <th>{day.abb}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <Row />
        </tbody>
      </table>
    </>
  );
}
