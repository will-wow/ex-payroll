import React from "React";
import * as Employee from "./employee";

export const Info = ({ employee }) => (
  <div>
    <div>{Employee.displayName(employee)}</div>
    <div>{Employee.pay(employee, 8)}</div>
  </div>
);
