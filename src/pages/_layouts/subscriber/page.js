import React from "react";

export default function page(props) {
  return (
    <div>
      this is the sub layout
      {props.children}
      this is footer
    </div>
  );
}
