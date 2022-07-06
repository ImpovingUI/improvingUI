import React, {FC} from "react";

export interface MonthYearSelectionProps {
year: number;
month: number;
setYear: (year: number) => void;
setMonth: (month: number) => void;
years: number[][];
setSelectedOption: (option: string) => void;
getYears:any;

selectedOption: any;

}
const months = [
    ["Jan", "Feb", "Mar"],
    ["Apr", "May", "Jun"],
    ["Jul", "Aug", "Sep"],
    ["Oct", "Nov", "Dec"],
  ];

export const MonthYearSelection: FC<MonthYearSelectionProps> = ({year, month, setYear, setMonth, years, setSelectedOption, getYears, selectedOption}) => {
    
    const showYear = () => {
        return (
          <div className="years">
            <table>
              <tbody>
                {years.map((i:any, index) => {
                  return (
                    <tr key={index}>
                      {i.map((year:any, index2:number) => {
                        return (
                          <td
                            key={index2 * index}
                            onClick={() => {
                              setYear(year);
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
        );
      };
      const contentMonth = () => {
        return (
          <>
            {months.map((month, index) => {
              return (
                <tr key={index}>
                  {month.map((month, index2) => {
                    return (
                      <td
                        key={index2 * index}
                        title={month}
                        onClick={() => {
                          setMonth(index2 + index * 3);
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
          </>
        );
      };
return(
  <>
    {selectedOption === "month" ? (
        <div className="months">
          <table>
            <tbody>{contentMonth()}</tbody>
          </table>
        </div>
      ) : null}

      {selectedOption === "year" ? showYear() : null}
    </>
    )
}