import React from "react";
import * as R from "ramda";

import * as Employees from "../payroll/employees";
import * as Hours from "../payroll/hours";

const employee = {
  firstName: "Alice",
  lastName: "Doe",
  title: "Senior Developer",
  wage: 100
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
      <div className="pay-calculator">
        <h1>Payroll Calculator</h1>
        <p>{Employees.displayName(employee)}</p>
        <div>
          <label>
            Previous Hours
            <input onChange={this.handleChange} name="previousHours" />
          </label>
          <label>
            Current Hours
            <input onChange={this.handleChange} name="hours" />
          </label>
        </div>
        <br />
        <div>
          <strong>Pay:</strong> ${pay}
        </div>
        <br />
        <div>{straightTime} hours @ 1x</div>
        <div>{timeAndAHalf} hours @ 1.5x</div>
        <div>{doubleTime} hours @ 2x</div>
        {Boolean(currentHours) && (
          <a href={apiPayPath(previousHours, currentHours)} target="_blank">
            API Link
          </a>
        )}
      </div>
    );
  }
}

export default PayCalculator;

const parsePreviousHours = R.pipe(R.split(","), R.map(parseFloat));

const apiPayPath = (previousHours, currentHours) =>
  `/api/pay?employee=alice&hours=${currentHours}&${arrayQueryParams(
    "previous_hours",
    previousHours
  )}`;

const arrayQueryParams = (name, items) =>
  R.pipe(parsePreviousHours, R.map(item => `${name}[]=${item}`), R.join("&"))(
    items
  );
