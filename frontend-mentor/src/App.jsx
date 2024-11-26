import Photo from "./Photo.jsx";
import Link from "./Link.jsx";
import "./app.css";

function App() {
  return (
    <div className="container">
      <Photo />
      <h1>Jessica Randall</h1>
      <h2>London, United Kingdom</h2>
      <p>"Front-end developer and avid reader."</p>
      <div className="links">
        <Link title="GitHub" site={"https://github.com"}></Link>
        <Link
          title="Frontend Mentor"
          site={"https://www.frontendmentor.io"}
        ></Link>
        <Link title="LinkedIn" site={"https://www.linkedin.com"}></Link>
        <Link title="Twitter" site={"https://x.com/?lang=pt-br"}></Link>
        <Link title="YouTube" site={"https://www.youtube.com"}></Link>
      </div>
    </div>
  );
}

export default App;
