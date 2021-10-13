import { App, User } from "../App";
import "./Profile.css";

const Profile = (props: any) => {
  const { currentUser, logOut, users, setButtonChange }: App = props;

  return (
    <div className="profile-container">
      <>
        <div className="prof-container">
          <div className="profile-info">
            <img
              className="profile-image"
              src={currentUser.img}
              alt="profile"
            />
            <div className="text-info">
              <p>
                Report for: <br />
                <span className="profile-name">
                  {" "}
                  {currentUser.firstName} {currentUser.lastName}
                </span>
              </p>
              <p>Age: {currentUser.age}</p>
            </div>
          </div>
          <div className="button-group">
            <button
              onClick={() => {
                setButtonChange("weekly");
              }}
            >
              Daily
            </button>
            <button
              onClick={() => {
                setButtonChange("daily");
              }}
            >
              Weekly
            </button>
            <button
              onClick={() => {
                setButtonChange("monthly");
              }}
            >
              Monthly
            </button>
          </div>
          <button className="logOut" onClick={logOut}>
            LOG OUT
          </button>
        </div>
      </>
    </div>
  );
};

export default Profile;
