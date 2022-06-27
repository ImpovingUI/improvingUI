import React, { FC, useEffect } from "react";
import { validationColor } from "./validation";
import "./DatePicker.css";
import Month from "./components/Month";
const arrowleft = require("./assets/icons/arrowleft.svg");
const arrowright = require("./assets/icons/arrowright.svg");

export interface DatePickerProps {
  className?: string;
  color?:
    | "primary"
    | "secondary"
    | "dark"
    | "success"
    | "info"
    | "warning"
    | "danger";
}

export const DatePicker: FC<DatePickerProps> = ({
  color = "primary",
  className,
  ...props
}) => {
  //set state month and year
  const [month, setMonth] = React.useState(new Date().getMonth());
  const [year, setYear] = React.useState(new Date().getFullYear());
  const [focus, setfocus] = React.useState(false);
  const [focusTable, setfocusTable] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState("");
  //hook of matriz of days
  const [daysInMonth, setDaysInMonth] = React.useState([[""], [""]]);
  const [selectedOption, setSelectedOption] = React.useState("");
  const [yearRange, setYearRange] = React.useState("");
  const [years, setYears] = React.useState([[0], [0]]);

  // const [date, setDate] = React.useState({year:new Date().getFullYear(),month:new Date().getMonth()});

  const months = [
    ["Jan", "Feb", "Mar"],
    ["Apr", "May", "Jun"],
    ["Jul", "Aug", "Sep"],
    ["Oct", "Nov", "Dec"],
  ];

  //get month in text
  const [monthText, setMonthText] = React.useState(
    new Date().toLocaleString("en-us", {
      month: "long",
    })
  );

  const getDaysInMonth = (month: number, year: number) => {
    let firstDay = new Date(year, month, 1);
    let days = new Date(year, month + 1, 0).getDate();
    let weekday = firstDay.getDay();

    let daysaux = [];
    let daysaux2 = [];

    for (let i = 0; i < weekday; i++) {
      daysaux.push("");
    }

    for (let i = 0; i < days; i++) {
      daysaux.push((i + 1).toString());

      if (daysaux.length % 7 === 0) {
        daysaux2.push(daysaux);
        daysaux = [];
      }

      if (i === days - 1) {
        daysaux2.push(daysaux);
      }
    }
    return daysaux2;
  };

  const getYears = (year: number) => {
    let yearaux = Math.floor(year / 10) * 10;
    let years = [];
    let yearMatrix: number[][] = [];
    yearaux = yearaux - 1;
    for (let i = 0; i < 13; i++) {
      if (i % 3 === 0) {
        yearMatrix.push(years);
        years = [];
      }
      years.push(yearaux + i);
    }
    setYearRange(yearaux + " - " + (yearaux + 11));
    //setMonthText("Hola")
    // console.log("estoy en getYears");
    setYears([...yearMatrix]);
  };


  //change to previous month
  const prevMonth = () => {
    if (selectedOption === "") {
      // console.log("prev month");
      //change month to previous month0
      if (month === 0) {
        // setDate({month:11,year:year-1});
        setMonth(11);
        setYear(year - 1);
      } else {
        setMonth(month - 1);
        // setDate({month:month-1,year:year});
      }
    } else if (selectedOption === "year") {
      setYear(year - 10);
      // setDate({month:month,year:year-10});

      getYears(year);
    }
  };

  //next month
  const nextMonth = () => {
    if (selectedOption === "") {
      //change month to next month
      if (month === 11) {
        setMonth(0);
        setYear(year + 1);
        // setDate({month:0,year:year+1})
      } else {
        setMonth(month + 1);
        // setDate({month:month+1,year:year})
      }
    }
    if (selectedOption === "year") {
      setYear(year + 10);
      getYears(year);
      // setDate({month:month,year:year+10})
    }
  };

 
  useEffect(() => {
    //if selected date is not equal to mm/dd/yyyy add class selected to the day
    if (selectedDate !== "mm/dd/yyyy") {
      //add class selected to the day with the same title of the selected date
      let day = document.querySelector(`.day[title="${selectedDate}"]`);
      if (day) {
        day.classList.add("selected");
        // console.log(day);
        // console.log(selectedDate);
      }
    }
  }, [selectedDate]);
  
  useEffect(() => {
    if(month ===-1){
      setMonthText("Invalid Date");
    }else{
      
    setDaysInMonth([...getDaysInMonth(month, year)]);

    let montht = new Date(year, month).toLocaleString("en-us", {
      month: "long",
    });
    setMonthText(montht);
    }
  }, [month, year]);
  

  const changeDateToday = () => {
    //set selected date to today
    //set month and year to today
    setMonth(new Date().getMonth());
    setYear(new Date().getFullYear());
    // setDate({month:new Date().getMonth(),year:new Date().getFullYear()});
    setDaysInMonth([...getDaysInMonth(month, year)]);
    setMonthText(
      new Date().toLocaleString("en-us", {
        month: "long",
      })
    );

    //set day
    let day1 = new Date().getDate().toString();
    let month1 = new Date().getMonth();
    let year1 = new Date().getFullYear();

    setSelectedDate(
      (month1 + 1 < 10 ? "0" + (month1 + 1) : month1 + 1) +
        "/" +
        (day1.length < 2 ? "0" + day1 : day1) +
        "/" +
        year1
    );
  };

  const content=()=>{

  }

  return (
    <div id="container-datepicker">
      <div className="container-datepicker-input">
        <input
          type="text"
          placeholder="mm/dd/yyyy"
          className="picker__input"
          id="input"
          onFocus={(e) => {
            setfocus(true);
          }}

          // onChange={(e) => {
          //   //in the input just allow to enter numbers and "/"
          //   let value = e.target.value;
          //   let newValue = "";
          //   let num = 0;

          //   let day ="";
          //   let month ="";
          //   let year ="";
          //   let aux=""
          //   let flag = false;

          //   if(e.target.value.length < selectedDate.length){
          //     flag = true;
          //   }

          //   for (let i = 0; i < value.length; i++) {
          //     if (
          //       value[i] === "/" ||
          //       (value[i] >= "0" && value[i] <= "9")
          //     ) {
          //       if (value[i] >= "0" && value[i] <= "9"){
          //         num++;
                  
          //         if(num<=2){
          //           day += value[i];
          //           console.log(day);
          //         }

          //         if(num<=4 && num>2){
          //           month += value[i];
          //           console.log(month);
          //         }

          //         if(num<=8 && num>4){
          //           year += value[i];
          //           console.log(year);
          //         }
          //       } 
          //     }
          //   }
            
          //   let count = (e.target.value.match(/\//g) || []).length;

          //   console.log(count);

          //   if (count === 2 ) {
          //     setSelectedDate(day + "/" + month+"/"+year);  
          // }}}

          onChange={(e) => {

            let pos = e.target.selectionStart;
            //set selected date to the input
            if(e.target.value.search(/[a-zA-Z]/g) === -1){
            if (e.target.value.length === 2 && e.target.value.search("/") === -1) {
              
              if (/^\d+$/.test(e.target.value[1])) {
              
                e.target.value = e.target.value + "/";
              }
            }
            // console.log("\n/1:"+e.target.value.search("/"));
            // console.log("\n/2:"+e.target.value.split("/", 2).join("/").length);

            if (e.target.value.length === 5  && e.target.value.split("/", 2).join("/").length===5) {
              
                e.target.value = e.target.value + "/";
              
            }
            if(pos){
              // console.log(pos);
              if(e.target.value[pos] ==="/"&&pos!=1 && pos!=4){
                // console.log("AAAA")
                  e.target.setSelectionRange(
                    pos+1,
                    pos+1
                  );
                
              }
              if(e.target.value.length < selectedDate.length){
                // console.log("delete:"+pos)
              }
            
            
          }
            if (e.target.value.length <= 10) {
              if (
                e.target.value.search("/") === 3 &&
                e.target.value.charAt(6) != "/"
              ) {
                e.target.setSelectionRange(4, 4);
              } else if (e.target.value.charAt(6) === "/") {
                // console.log("entro");
                //delete number that is before the position
                //e.target.value = e.target.value.slice(0, pos - 1) + e.target.value.slice(pos);
                e.target.setSelectionRange(
                  e.target.value.split("/", 2).join("/").length + 1,
                  e.target.value.split("/", 2).join("/").length + 1
                );
              } else {
                setSelectedDate(e.target.value);
              }
            }
            if (e.target.value.length === 10) {

              setSelectedOption("");
              let date = e.target.value.split("/");
              //check if the date is valid
              if (
                parseInt(date[0]) <= 12 &&
                parseInt(date[1]) <= 31 
              ) {
              setMonth(parseInt(date[0]) - 1);
              setYear(parseInt(date[2]));
              // setDate({month:parseInt(date[0])-1,year:parseInt(date[2])});
              setDaysInMonth([...getDaysInMonth(month, year)]);
              setMonthText(
                new Date(
                  parseInt(date[2]),
                  parseInt(date[0]) - 1
                ).toLocaleString("en-us", {
                  month: "long",
                })
              );
            }else{
              setMonthText("Invalid date");
              // console.log(monthText);
              setMonth(-1);
            }
          }
          }
        }
        }
          onKeyDown={(e) => {
            if (e.keyCode === 8) {
              let pos = e.currentTarget.selectionStart;
              if(pos){
                // console.log("pos:" + pos);
                if(e.currentTarget.value[pos-1] ==="/"){
                  // console.log("change:"+pos)
                  e.currentTarget.setSelectionRange(pos - 1, pos - 1);
                }
                if(e.currentTarget.value[pos] ==="/"){
                  // console.log("delete")
                  if(e.currentTarget.value.length<4){
                  e.currentTarget.value =
                    e.currentTarget.value.slice(0, pos -1 ) +
                    e.currentTarget.value.slice(pos);
                  e.currentTarget.setSelectionRange(pos, pos);
                  }
                }
              }
            }
          }}
          
          value={selectedDate}
        />
      </div>
      {focus || focusTable ? (
        <div
          className={`container-picker ${validationColor(color)} ${className}`}
          {...props}
          onFocus={(e) => {
            setfocusTable(true);
          }}
          onBlur={(e) => {
            setfocus(false);
            setfocusTable(false);
          }}
          tabIndex={0}
          id="container-datepicker"
        >
          <div className="container-picker__header">
            <span>
              <img
                src={arrowleft}
                alt="arrow-left"
                onClick={() => prevMonth()}
              />
            </span>
            <div className="container-picker__date">
              {selectedOption === "year" ? (
                <span>{yearRange}</span>
              ) : (
                <>
                  <span
                    onClick={() => {
                      setSelectedOption("month");
                    }}
                  >
                    {monthText}
                  </span>
                  <span
                    onClick={() => {
                      setSelectedOption("year");
                      getYears(year);
                    }}
                  >
                    {year}
                  </span>
                </>
              )}
            </div>
            <span>
              <img
                src={arrowright}
                alt="arrow-right"
                onClick={() => nextMonth()}
              />
            </span>
          </div>

          <div className="container-picker__body">
            {selectedOption == "" ? (
              <table id="calendar" className="picker-content">
                <thead>
                  <Month />
                </thead>

                <tbody>
                  {daysInMonth.map((day, index) => {
                    return (
                      <tr key={index}>
                        {day.map((day, index) => {
                          return (
                            <td
                              key={index}
                              title={
                                (month + 1 < 10
                                  ? "0" + (month + 1)
                                  : month + 1) +
                                "/" +
                                (day.length < 2 ? "0" + day : day) +
                                "/" +
                                year
                              }
                              //if selected date is equal to the title of the day add class selected
                              className={
                                selectedDate ===
                                (month + 1 < 10
                                  ? "0" + (month + 1)
                                  : month + 1) +
                                  "/" +
                                  (day.length < 2 ? "0" + day : day) +
                                  "/" +
                                  year
                                  ? "selected"
                                  : ""
                              }
                              // if click on day, set selectedDate to title of td
                              onClick={() => {
                                //clear the class selected
                                // let selected = document.querySelector(
                                //   ".selected"
                                // );
                                // if (selected) {
                                //   selected.classList.remove("selected");
                                // }
                                if (day != "") {

                                  setSelectedDate(
                                    (month + 1 < 10
                                      ? "0" + (month + 1)
                                      : month + 1) +
                                      "/" +
                                      (day.length < 2 ? "0" + day : day) +
                                      "/" +
                                      year
                                  );
                                }
                              }}

                              //add a target event to the td that add a class selected to the td and clear the class selected of the other td
                            >
                              {day}
                            </td>
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
              </table>
            ) : null}
          </div>

          {selectedOption === "month" ? (
            <div className="months">
              <table>
                <tbody>
                  {months.map((month, index) => {
                    return (
                      <tr key={index}>
                        {month.map((month, index2) => {
                          return (
                            <td
                              key={index2 * index}
                              title={month}
                              // className={
                              //   selectedMonth === month
                              //     ? "selected"
                              //     : ""
                              // }
                              onClick={() => {
                                setMonth(index2 + index * 3);
                                // setDate({month: index2 + index * 3,year:year})
                                setSelectedOption("year");
                                getYears(year);
                              }}
                            >
                              {month}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : null}

          {selectedOption === "year" ? (
            <div className="years">
              <table>
                <tbody>
                  {years.map((i, index) => {
                    return (
                      <tr key={index}>
                        {i.map((year, index2) => {
                          return (
                            <td
                              key={index2 * index}
                              onClick={() => {
                                setYear(year);
                                // setDate({month:month,year:year})
                                setSelectedOption("");
                              }}
                            >
                              {year}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};
