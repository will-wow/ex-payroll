defmodule Payroll.Employees.Employee do
  @type t :: %Employee{
          first_name: String.t(),
          last_name: String.t(),
          title: String.t(),
          wage: number
        }
  defstruct [:first_name, :last_name, :title, :wage]

  @spec display_name(t) :: String.t
  def display_name(%Employee{first_name: first_name, last_name: last_name, title: title}) do
    "#{first_name} #{last_name}: #{title}"
  end

  @spec pay(t, number) :: number
  def pay(%Employee{wage: wage}, hours) do
    wage * hours
  end
end
