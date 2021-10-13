import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";

export type User = {
  id: Number;
  firstName: string;
  lastName: string;
  age: Number;
  img: string;
};

export type TimeTable = {
  title: string;
  timeframes: {
    daily: {
      current: Number;
      previous: Number;
    };
    weekly: {
      current: Number;
      previous: Number;
    };
    monthly: {
      current: Number;
      previous: Number;
    };
  };
};

export type App = {
  buttonChange: string;
  setButtonChange: (input: string) => void;
  timeTable: TimeTable[];
  users: User[];
  currentUser: User;
  logOut: () => void;
  otherUsers: User[];
  logIn: () => void;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [timeTable, setTimeTable] = useState<TimeTable[]>([]);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [buttonChange, setButtonChange] = useState("daily");

  // Who is currently logged in?
  const currentUser = users.find((user) => user.id === currentUserId);

  // What other users are available?
  const otherUsers = users.filter((user) => user.id !== currentUserId);

  const history = useHistory();

  // How do I log in?
  function logIn(userId: any) {
    setCurrentUserId(userId);
  }

  // How do I log out?
  function logOut() {
    setCurrentUserId(null);
  }

  useEffect(() => {
    fetch(`http://localhost:3000/users`)
      .then((response) => response.json())
      .then(setUsers);
  }, [setUsers]);

  useEffect(() => {
    fetch(`http://localhost:3000/timeTable`)
      .then((response) => response.json())
      .then(setTimeTable);
  }, [setTimeTable]);

  useEffect(() => {
    if (!currentUserId) {
      setTimeTable([]);
      history.push("/login");
    } else {
      fetch(`http://localhost:3000/timeTable?userId=${currentUserId}`)
        .then((resp) => resp.json())
        .then(setTimeTable);

      history.push("/logged-in");
    }
  }, [currentUserId, history]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/login">
          <LoginPage users={users} logIn={logIn} />
        </Route>
        <Route exact path="/logged-in">
          <MainPage
            currentUser={currentUser}
            logOut={logOut}
            otherUsers={otherUsers}
            buttonChange={buttonChange}
            setButtonChange={setButtonChange}
            timeTable={timeTable}
            users={users}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
