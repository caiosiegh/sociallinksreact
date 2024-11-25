import Photo from "./Photo.jsx";
import Link from "./Link.jsx";
import "./app.css";

function App() {
  return (
    <div className="container">
      <Photo />
      <h1>Caio Gusmão</h1>
      <h2>Minhas Gerais, Brazil</h2>
      <p>"Front-end developer and Content Creator."</p>
      <div className="links">
        <Link
          title="GitHub"
          site={"https://github.com/caiosiegh?tab=repositories"}
        ></Link>
        <Link
          title="Frontend Mentor"
          site={"https://www.frontendmentor.io/profile/caiosiegh"}
        ></Link>
        <Link
          title="LinkedIn"
          site={"https://www.linkedin.com/in/caiosiegh/"}
        ></Link>
        <Link title="YouTube" site={"https://www.youtube.com/@Siegh"}></Link>
      </div>
    </div>
  );
}

export default App;
