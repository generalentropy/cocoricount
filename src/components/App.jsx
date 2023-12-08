import { useState } from "react";
import Header from "./Header";
import Logo from "./Logo";
import Main from "./main";
import Stats from "./Stats";
import ConfettiComponent from "./Confetti";
import Counter from "./Counter";
import userData from "../data";

export default function App() {
  const [data, setData] = useState(userData);
  const [fireConfetti, setFireConfetti] = useState(false);
  const [count, setCount] = useState(0);
  const [editMode, setEditMode] = useState(true);

  // const findItemBasedOnDate = function (target) {
  //   const currDay = new Date();
  //   currDay.setHours(0, 0, 0, 0);
  //   const todayTimestamp = currDay.getTime();
  //   const timestamp = target ? target : todayTimestamp;
  //   const targetItem = userData.find((item) => item.date === timestamp);

  //   console.log(targetItem);
  //   return targetItem;
  // };

  return (
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
  );
}
