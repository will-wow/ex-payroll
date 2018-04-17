defmodule Payroll.Employees do
  alias Payroll.Employees.Employee

  @spec pay(Employee.t(), number) :: number
  defdelegate pay(employee, hours), to: Employee
end
