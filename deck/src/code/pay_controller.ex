defmodule PayrollWeb.PayController do
  use PayrollWeb, :controller

  alias Payroll.Employees
  alias Payroll.Hours

  @spec day(Plug.Conn.t(), any) :: any
  def day(conn, %{
        "previous_hours" => previous_hours,
        "hours" => current_hours,
        "employee" => employee_name
      }) do
    current_hours = parse_hours(current_hours)

    work_day =
      previous_hours
      |> parse_previous_hours()
      |> Hours.calculate_overtime(current_hours)

    pay_hours = Hours.work_day_to_pay_hours(work_day)

    pay =
      employee_name
      |> Employees.find_user()
      |> Employees.pay(pay_hours)

    render(conn, "show.json", work_day: work_day, pay: pay)
  end
end
