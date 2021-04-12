function Application({ app }) {
  return (
    <div className="app-card">
      <div className="app-preview">
        <img src={app.image} alt={app.alt}></img>
      </div>
      <div className="app-text">
        <p>{app.description}</p>
        <div className="link-buttons">
          <a
            className="link-btn"
            href={app.website}
            target="_blank"
            rel="noreferrer"
          >
            demo
          </a>
          <a
            className="link-btn"
            href={app.repo}
            target="_blank"
            rel="noreferrer"
          >
            code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Application;
