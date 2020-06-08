import React from "react";

export default function Page(props) {
  return (
    <div>
      The About Page <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
}
