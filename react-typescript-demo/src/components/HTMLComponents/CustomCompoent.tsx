//extract prop types from another component

import React from "react";
import { Greet } from "../Greet";

function CustomCompoent(props: React.ComponentProps<typeof Greet>) {
  return <div>{props.isLoggedIn}</div>;
}

export default CustomCompoent;
