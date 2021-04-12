// import codeIcon from "../images/icons/code.svg";
// import newPageIcon from "../images/icons/new-page.svg";
import applications from "./applicationData";
import Application from "./Application";

function Applications() {
  return (
    <>
      {applications.map((app, i) => (
        <Application app={app} key={i} />
      ))}
    </>
  );
}

export default Applications;
