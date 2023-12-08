import PropTypes from "prop-types";

Counter.propTypes = {
  count: PropTypes.number,
  setCount: PropTypes.func,
  setFireConfetti: PropTypes.func,
  editMode: PropTypes.bool,
};

export default function Counter({
  count,
  setCount,
  setFireConfetti,
  editMode,
}) {
  function handleRemove() {
    setCount((count) => (count > 0 ? count - 1 : count));
  }

  function handleAdd() {
    setCount((count) => count + 1);
    triggerConfetti();
  }

  const triggerConfetti = () => {
    setFireConfetti(true);
  };

  return (
    <div className="counter">
      {editMode && (
        <AdjustButtons OnSetCount={handleRemove}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#fff"
              d="M34 18a3 3 0 0 1-3 3H5a3 3 0 1 1 0-6h26a3 3 0 0 1 3 3z"
            />
          </svg>
        </AdjustButtons>
      )}

      <span className="counter-number"> {count}</span>

      {editMode && (
        <AdjustButtons OnSetCount={handleAdd}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#fff"
              d="M31 15H21V5a3 3 0 1 0-6 0v10H5a3 3 0 1 0 0 6h10v10a3 3 0 1 0 6 0V21h10a3 3 0 1 0 0-6z"
            />
          </svg>
        </AdjustButtons>
      )}
    </div>
  );
}

AdjustButtons.propTypes = {
  children: PropTypes.element,
  OnSetCount: PropTypes.func,
};

function AdjustButtons({ children, OnSetCount }) {
  return (
    <div className="btn-counter" onClick={OnSetCount}>
      {children}
    </div>
  );
}
