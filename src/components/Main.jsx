import PropTypes from "prop-types";
import Button from "./Button";
import { useEffect } from "react";

Main.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  data: PropTypes.array,
  setData: PropTypes.func,
  editMode: PropTypes.bool,
  setEditMode: PropTypes.func,
};

export default function Main({
  count,
  setCount,
  data,
  setData,
  children,
  editMode,
  setEditMode,
}) {
  function updateUserData() {
    setEditMode((editMode) => !editMode);

    function createTimestamp() {
      const now = new Date();
      // nouvel objet Date pour le début du jour dans le fuseau horaire local
      const currDay = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
      );
      // to timestamp
      return currDay.getTime();
    }

    const today = createTimestamp();

    const filteredUserData = data.filter((obj) => obj.date !== today);

    if (!editMode) return;

    setData([
      ...filteredUserData,
      {
        date: today,
        count: count,
      },
    ]);
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
        {editMode && <Button label={"reset"} onClick={() => setCount(0)} />}
        <Button label={"historique"}></Button>

        <Button
          label={editMode ? "valider" : "modifier"}
          customStyle={{
            backgroundColor: editMode ? "#10a364" : "#fb8500",
            color: "white",
          }}
          onClick={updateUserData}
        />
      </div>
    </div>
  );
}

function CurrentDate() {
  const today = new Date();
  return <div className="today-date">{today.toLocaleDateString()}</div>;
}
