import React, {FC} from "react";

export interface TbodyDaysProps {
  selectedDate: string;
  setSelectedDate:any;
  blockedDates: any;
  daysInMonth: any;
  month:any;
  year:any;
  validDate: any;
  setValidDate: any;
  changeDateToday: any;
}

export const TbodyDays: FC<TbodyDaysProps> = ({selectedDate, setSelectedDate, blockedDates, daysInMonth, month, year, validDate, setValidDate, changeDateToday}) => {


  blockedDates = ["06/10/2022", "06/15/2022"];
  return (
    <tbody>
      {daysInMonth.map((day:string[], index:number) => {
        return (
          <tr key={index}>
            {day.map((day, index) => {
              let content:string =
                (month + 1 < 10 ? "0" + (month + 1) : month + 1) +
                "/" +
                (day.length < 2 ? "0" + day : day) +
                "/" +
                year;
              return (
                //if content is in blockedDates, add class blocked
                //extract waht is inside blockedDates json

                !blockedDates.includes(content) ? (
                  <td
                    key={index}
                    title={content}
                    //if selected date is equal to the title of the day add class selected
                    className={
                      selectedDate === content && validDate ? "selected" : ""
                    }
                    // if click on day, set selectedDate to title of td
                    onClick={() => {
                      if (
                        day != "" &&
                        parseInt(day) > 0 &&
                        month > 0 &&
                        month <= 12
                      ) {
                        setSelectedDate(content);

                        setValidDate(true);
                      }
                    }}
                  >
                    {day}
                  </td>
                ) : (
                  <td className="blocked">{day}</td>
                )
              );
            })}
          </tr>
        );
      })}
      <tr className="todayButton">
        <td colSpan={7} onClick={changeDateToday}>
          Today
        </td>
      </tr>
    </tbody>
  );
}