const version = import.meta.env.VITE_VERSION;

export default function FooterMenu() {
  return (
    <div className="footer">
      © {new Date().getFullYear()} <span className="strong">CocoriCount</span>{" "}
      by{" "}
      <a className="underline" href="https://visualartisan.fr/">
        VisualArtisan
      </a>
      <span className="strong"> {version}</span>
    </div>
  );
}
