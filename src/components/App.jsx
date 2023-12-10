import { useState, useEffect } from "react";
import Header from "./Header";
import Logo from "./Logo";
import Main from "./Main";
import Stats from "./Stats";
import ConfettiComponent from "./Confetti";
import Counter from "./Counter";
import userData from "../data";
import CookieConsent from "react-cookie-consent";
import Menu from "./Menu";

export default function App() {
  const [data, setData] = useState(() => {
    const savedUserData = localStorage.getItem("userData");
    return savedUserData ? JSON.parse(savedUserData) : userData;
  });
  const [fireConfetti, setFireConfetti] = useState(false);
  const [count, setCount] = useState(0);
  const [editMode, setEditMode] = useState(true);

  const handleConsent = function () {
    console.log("cookie acceptés");
  };

  const handleDecline = function () {
    console.log("cookies refusés");
  };

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(data));
  }, [data]);

  return (
    <>
      <CookieConsent
        onAccept={handleConsent}
        onDecline={handleDecline}
        location="bottom"
        buttonText="Compris!"
        cookieName="cocoricount2"
        style={{ background: "#023047" }}
        buttonStyle={{
          color: "#fff",
          fontSize: "16px",
          background: "green",
          padding: "10px 20px",
        }}
        expires={150}
        enableDeclineButton
        declineButtonText="Je refuse"
        declineButtonStyle={{
          color: "#fff",
          fontSize: "16px",
          background: "red",
          padding: "10px 20px",
        }}
      >
        {`Cette application souhaite utiliser des cookies (aux œufs frais) afin d'améliorer
        votre expérience utilisateur.`}
      </CookieConsent>
      <Menu setData={setData} setCount={setCount} data={data} />
      <div className="app">
        <ConfettiComponent
          fireConfetti={fireConfetti}
          setFireConfetti={setFireConfetti}
        />
        <Header>
          <Logo />
        </Header>
        <Main
          count={count}
          setCount={setCount}
          data={data}
          setData={setData}
          editMode={editMode}
          setEditMode={setEditMode}
        >
          <Counter
            count={count}
            setCount={setCount}
            setFireConfetti={setFireConfetti}
            editMode={editMode}
            setEditMode={setEditMode}
          ></Counter>
        </Main>
        <Stats userData={data} />
      </div>
    </>
  );
}
