import { TimeTable } from "../App";
import "./TimeTables.css";

const TimeTablesDaily = (props: any) => {
  const { timeTable } = props;

  return (
    <ul className="timeList">
      {timeTable.map((time: TimeTable, index: any) => {
        return (
          <li key={index} className={`timeItem${index}`}>
            <div className="time">
              <h2>{time.title}</h2>
              <p className="current">{time.timeframes.daily.current}hrs</p>
              <p className="previous">
                Last Day - {time.timeframes.daily.previous}hrs
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TimeTablesDaily;
