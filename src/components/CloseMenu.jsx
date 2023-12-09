import PropTypes from "prop-types";

CloseMenu.propTypes = {
  setIsMenuOpen: PropTypes.func,
};

export default function CloseMenu({ setIsMenuOpen }) {
  return (
    <div className="btn-close-menu" onClick={() => setIsMenuOpen(false)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path
          fill="#fff"
          stroke="#fff"
          d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94z"
        />
      </svg>
    </div>
  );
}
