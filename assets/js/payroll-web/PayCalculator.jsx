import React from "react";
import * as R from "ramda";

import * as Employees from "../payroll/employees";
import * as Hours from "../payroll/hours";

const employee = {
  wage: 50
};

class PayCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hours: "",
      previousHours: ""
    };
  }

  handleChange = event => {
    const { target } = event;

    this.setState({
      [target.name]: target.value
    });
  };

  render() {
    const { hours, previousHours } = this.state;

    const currentHours = parseFloat(hours || 0);

    const workday = R.pipe(
      parsePreviousHours,
      Hours.calculateOvertime(currentHours)
    )(previousHours || "0");

    const payHours = Hours.workdayToPayHours(workday);

    const [straightTime, timeAndAHalf, doubleTime] = workday;

    const pay = Employees.pay(payHours, employee);

    return (
      <div>
        <h1>Payroll Calculator</h1>
        <label>
          Previous Hours
          <input onChange={this.handleChange} name="previousHours" />
        </label>
        <label>
          Current Hours
          <input onChange={this.handleChange} name="hours" />
        </label>
        <div>
          <strong>Pay:</strong> {pay}
        </div>
        <div>
          <strong>x1:</strong> {straightTime}
        </div>
        <div>
          <strong>x1.5:</strong> {timeAndAHalf}
        </div>
        <div>
          <strong>x2:</strong> {doubleTime}
        </div>
      </div>
    );
  }
}

export default PayCalculator;

const parsePreviousHours = R.pipe(R.split(","), R.map(parseFloat));
