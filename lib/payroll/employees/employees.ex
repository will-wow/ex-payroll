defmodule Payroll.Employees do
  alias Payroll.Employees.Employee

  @spec find_user(String.t()) :: Employee.t()
  def find_user("alice") do
    %Employee{
      first_name: "Alice",
      last_name: "Doe",
      title: "Senior Developer",
      wage: 100
    }
  end

  def find_user("bob") do
    %Employee{
      first_name: "Bob",
      last_name: "Smith",
      title: "Junior Developer",
      wage: 50
    }
  end

  @spec pay(Employee.t(), number) :: number
  defdelegate pay(employee, hours), to: Employee
end
