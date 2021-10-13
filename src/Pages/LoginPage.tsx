import { User } from "../App";
import "./LoginPage.css";

function LoginPage(props: any) {
  const { users, logIn } = props;
  return (
    <div className="main-wrapper login">
      <section className="login-section">
        <h2>Choose your user!</h2>
        <ul>
          {users.map((user: User) => (
            <li>
              <button onClick={() => logIn(user.id)} className="user-selection">
                <img
                  className="avatar"
                  width="50"
                  height="50"
                  src={user.img}
                  alt=""
                />
                <h3>
                  {user.firstName} {user.lastName}
                </h3>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default LoginPage;
