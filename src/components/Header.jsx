import PropTypes from "prop-types";

Header.propTypes = {
  children: PropTypes.element,
};

export default function Header({ children }) {
  return <div className="header">{children}</div>;
}
