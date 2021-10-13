import { TimeTable } from "../App";
import "./TimeTables.css";

const TimeTablesWeekly = (props: any) => {
  const { timeTable } = props;

  return (
    <ul className="timeList">
      {timeTable.map((time: TimeTable, index: any) => {
        return (
          <li key={index} className={`timeItem${index}`}>
            <div className="time">
              <h2>{time.title}</h2>
              <p className="current">{time.timeframes.weekly.current}hrs</p>
              <p className="previous">
                Last Week - {time.timeframes.weekly.previous}hrs
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TimeTablesWeekly;
