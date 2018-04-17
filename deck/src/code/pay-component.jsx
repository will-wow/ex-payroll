import * as Employees from "../payroll/employees";
import * as Hours from "../payroll/hours";

class PayCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hours: "", previousHours: "" };
  }

  handleChange = event => {
    const { target } = event;

    this.setState({ [target.name]: target.value });
  };

  render() {
    const { hours, previousHours } = this.state;

    const currentHours = parseNumber(hours);

    const workday = R.pipe(
      parsePreviousHours,
      Hours.calculateOvertime(currentHours)
    )(previousHours);

    const payHours = Hours.workdayToPayHours(workday);

    const [straightTime, timeAndAHalf, doubleTime] = workday;

    const pay = Employees.pay(payHours, employee);

    return <div className="pay-calculator" />;
  }
}
