import { useState } from "react";
import Header from "./Header";
import Logo from "./Logo";
import Main from "./main";
import Stats from "./Stats";
import ConfettiComponent from "./Confetti";
import Counter from "./Counter";
import userData from "../data";
import Menu from "./menu";

export default function App() {
  const [data, setData] = useState(userData);
  const [fireConfetti, setFireConfetti] = useState(false);
  const [count, setCount] = useState(0);
  const [editMode, setEditMode] = useState(true);

  return (
    <>
      <Menu />
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
