import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

//@ts-ignore
import testWrapper from "remote_auth_frontend/TestWrapper";

const App = () => {
  const divRef = useRef(null);

  useEffect(() => {
    testWrapper(divRef.current);
  }, []);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: react-host</div>
      <div ref={divRef}></div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
