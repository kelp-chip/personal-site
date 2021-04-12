import codeIcon from "../images/icons/code.svg";
import newPageIcon from "../images/icons/new-page.svg";

function Application({ app }) {
  return (
    <div className="app-card">
      <div className="app-preview">
        <img src={app.image} alt={app.alt}></img>
      </div>
      <div className="app-text">
        <div className="app-text-header">
          <h2>{app.name} </h2>{" "}
          <div>
            <a
              className="link-btn"
              href={app.repo}
              target="_blank"
              rel="noreferrer"
            >
              code{" "}
              <img src={codeIcon} alt="code icon" className="tinyIcon"></img>
            </a>
            {app.website ? (
              <a
                className="link-btn"
                href={app.website}
                target="_blank"
                rel="noreferrer"
              >
                demo{" "}
                <img
                  src={newPageIcon}
                  alt="new page icon"
                  className="tinyIcon"
                ></img>
              </a>
            ) : (
              <span className="disabled-btn">no demo</span>
            )}
          </div>
        </div>
        <p>{app.description}</p>
        <p>{app.tech.join(" | ")}</p>
      </div>
    </div>
  );
}

export default Application;
