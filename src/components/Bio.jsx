// import substackIcon from "../images/icons/substack.svg";

function Bio() {
  return (
    <div className="bio-container">
      <h1>Lexy Kramer</h1>
      <p>
        I'm a software engineer currently based in Raleigh, NC. I have a
        background in art and a passion for building web apps that are intuitive
        and fun to use.
      </p>
      <p>
        When I'm not coding I'm either rock climbing or playing with my cats.
      </p>
      <div className="icon-links">
        <a href="https://github.com/lexykio">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/lexyk/">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
}

export default Bio;
