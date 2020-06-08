import React from "react";

import Header from "./components/header";

export default function Page(props) {
  return (
    <div>
      <Header />
      <div className="main">{props.children}</div>
      {/* this is footer */}
    </div>
  );
}
