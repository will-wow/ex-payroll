import React from 'React';
import {displayName, pay} from './employee';

export const Info = ({ employee }) => (
  <div>
    <div>{displayName(employee)}</div>
    <div>{pay(employee, 8)}</div>
  </div>
);
