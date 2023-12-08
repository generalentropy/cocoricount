import PropTypes from "prop-types";
import Button from "./Button";
import { useEffect } from "react";

Main.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default function Main({ count, setCount, children }) {
  function handleValidation() {
    // console.log(`total of the day : ${count}`);
  }

  useEffect(() => {
    console.log(`total of the day : ${count}`);
  }, [count]);

  return (
    <div className="counter-wrapper">
      <CurrentDate />
      <p className="info-text">Récolte du jour</p>

      {children}

      <div className="content-name">{`œuf${count > 1 ? "s" : ""}`}</div>

      <div className="buttons-wrapper">
        <Button label={"reset"} onClick={() => setCount(0)} />
        <Button label={"historique"}></Button>

        <Button
          label={"valider"}
          customStyle={{ backgroundColor: "#219EBC", color: "white" }}
          onClick={handleValidation}
        />
      </div>
    </div>
  );
}

function CurrentDate() {
  const today = new Date();
  return <div className="today-date">{today.toLocaleDateString()}</div>;
}
