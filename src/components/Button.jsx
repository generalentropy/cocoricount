import PropTypes from "prop-types";

export default function Button({
  label,
  onClick,
  Icon,
  iconSize,
  customStyle,
  children,
  className = "buttons-control",
}) {
  const baseStyle = {
    backgroundColor: "#fff",
    border: "none",
    color: "#ffb703",
    fontWeight: "700",
    padding: "8px 22px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "50px",
    opacity: "0.9",
    boxShadow: `0.3px 0.5px 0.7px hsl(42deg 85% 36% / 0.36),
    0.8px 1.6px 2px -0.8px hsl(42deg 85% 36% / 0.36),
    2.1px 4.1px 5.2px -1.7px hsl(42deg 85% 36% / 0.36),
    5px 10px 12.6px -2.5px hsl(42deg 85% 36% / 0.36)`,
  };

  const buttonStyle = { ...baseStyle, ...customStyle };

  const iconStyle = {
    width: iconSize,
    height: iconSize,
    marginRight: "8px",
  };

  return (
    <button className={className} onClick={onClick} style={buttonStyle}>
      {Icon && <Icon style={iconStyle} />}
      {label}
      {children}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  Icon: PropTypes.elementType,
  iconSize: PropTypes.string,
  customStyle: PropTypes.object,
  children: PropTypes.any,
  className: PropTypes.string,
};
