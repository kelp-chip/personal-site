import Bio from "./Bio";
import Applications from "./Applications";

function Layout() {
  return (
    <>
      <Bio />
      <div className="container">
        <div className="applications"></div>
      </div>
    </>
  );
}

export default Layout;
