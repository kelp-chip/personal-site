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
