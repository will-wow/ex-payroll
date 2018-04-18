defmodule UseEmployee do
  alias Payroll.Employees.Employee

  def info(employee) do
    Employee.display_name(employee)
    Employee.pay(employee, 8)
  end
end
