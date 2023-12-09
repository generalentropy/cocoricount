import PropTypes from "prop-types";

IconClose.propTypes = {
  setIsMenuOpen: PropTypes.func,
};

export default function IconClose({ setIsMenuOpen }) {
  return (
    <div className="btn-close-menu" onClick={() => setIsMenuOpen(false)}>
      <img src="/close.svg" />
    </div>
  );
}
