import { useEffect } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import PropTypes from "prop-types";

const ConfettiComponent = ({ fireConfetti, setFireConfetti }) => {
  const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  };

  ConfettiComponent.propTypes = {
    fireConfetti: PropTypes.bool,
    setFireConfetti: PropTypes.func,
  };

  useEffect(() => {
    if (fireConfetti) {
      setFireConfetti(false);
    }
  }, [fireConfetti, setFireConfetti]);

  return (
    <div>
      <ReactCanvasConfetti fire={fireConfetti} style={canvasStyles} />
    </div>
  );
};

export default ConfettiComponent;
