import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import "./index.css";

import Header from "./components/Header";
import Feed from "./pages/Feed";
import SearchMain from "./pages/Map/SearchMain";
import Payment from "./pages/Iamport/Payment";

import Calendar from "./pages/Calendar/Calendar";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";

import "./index.css";
import StudyForm from "./pages/StudyForm";
import MyStudy from "./pages/MyStudy";
import GroupStudy from "./pages/GroupStudy/GroupStudy";

import { signIn, premium } from "./pages/login/Auth";
import MyProfile from "./pages/MyProfile/MyProfile";
import GroupStudyEdit from "./pages/GroupStudyEdit";
// import { useLocalStorage } from "./services/useLocalStorage";

export default function App() {

const history = useHistory();
  // 유저의 이메일 정보
  const [userEmail, setUserEmail] = useState(
    window.localStorage.getItem("email")
  );

  // 회원가입 유저의 확인
  const [yesUser, setYesUser] = useState(
    window.localStorage.getItem("yesUser")
  );

  // SNS로그인 유저의 확인
  const authenticated = userEmail != null;

  // user 이메일 정보 삭제할 때
  const logout = () => {
    setUserEmail(null);
    setYesUser(null);
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("yesUser");
    window.localStorage.removeItem("premium");
  };

  //로그인한 유저정보를 가지고 온다. mail로 가지고 오게 된다.
  const signUserIn = async (email) => {
    const Member = await signIn(email);
    const premiumCheck = await premium(email);
    console.log("Member의 값" + Member);
    if (Member == "NotUser") {
      setUserEmail(email);
      setYesUser(false);

      console.log("로그인했지만 회원아님");
    } else {
      setUserEmail(email);
      setYesUser(true);
      window.localStorage.setItem("email", email);
      window.localStorage.setItem("yesUser", email);
      window.localStorage.setItem("premium", premiumCheck); // True False
      console.log("premium : ", premiumCheck);

      console.log("storage value : ", window.localStorage.getItem("email"));
      console.log("로그인한 회원임");
      history.push("/");
    }
  };
  return (
    <div>
      {/* 로그인 했을경우 Header가 보여지게 된다. */}
      {authenticated && yesUser && <Header logout={logout} />}

      {/* 로그인 했을 경우 */}
      {authenticated && yesUser && (
        <>
          <Switch>
            <Route exact path="/" component={Feed} />
            <Route path="/search" component={SearchMain} />
            <Route path="/mystudy" component={MyStudy} />
            <Route path="/study/generate" component={StudyForm} />
            <Route
              path="/calendar"
              render={() => (
                <Calendar userEmail={window.localStorage.getItem("email")} />
              )}
            />

            <Route path="/payment" component={Payment} />
            <Route path="/GroupStudy" component={GroupStudy} />
            <Route path="/MyProfile" component={MyProfile} />
            <Route path="/groupstudyedit/:id" component={GroupStudyEdit} />
            <Route path="*" render={() => <div>404</div>} />
          </Switch>
        </>
      )}

      {/* 회원가입 페이지로 이동*/}
      {authenticated && !yesUser && (
        <>
          <Route
            path="/"
            render={() => <Register email={userEmail} logout={logout} />}
          />
        </>
      )}

      {/* 로그인하지 못했을 경우 */}
      {!authenticated && !yesUser && (
        <>
          <Route path="/" render={() => <Login signUserIn={signUserIn} />} />
        </>
      )}
    </div>
  );
};
