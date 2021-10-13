import Profile from "../Components/Profile";
import TimeTablesDaily from "../Components/TimeTablesWeekly";
import TimeTablesWeekly from "../Components/TimeTablesDaily";
import TimeTablesMonthly from "../Components/TimeTablesMonthly";
import { App } from "../App";
import "./MainPage.css";

const MainPage = (props: any) => {
  const {
    currentUser,
    logOut,
    otherUsers,
    users,
    timeTable,
    buttonChange,
    setButtonChange,
  }: App = props;
  if (!currentUser) return null;

  return (
    <>
      <div className="mainPage">
        <div className="profile">
          {" "}
          <Profile
            currentUser={currentUser}
            users={users}
            logOut={logOut}
            setButtonChange={setButtonChange}
          />{" "}
        </div>
        <div>
          {buttonChange === "daily" ? (
            <TimeTablesDaily timeTable={timeTable} />
          ) : null}
          {buttonChange === "weekly" ? (
            <TimeTablesWeekly timeTable={timeTable} />
          ) : null}
          {buttonChange === "monthly" ? (
            <TimeTablesMonthly timeTable={timeTable} />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default MainPage;
