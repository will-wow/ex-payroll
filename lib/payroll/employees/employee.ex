defmodule Payroll.Employees.Employee do
  alias __MODULE__

  @type t :: %Employee{
          first_name: String.t(),
          last_name: String.t(),
          title: String.t(),
          wage: number
        }

  defstruct [:first_name, :last_name, :title, :wage]

  @spec pay(t, number) :: number
  def pay(%Employee{wage: wage}, hours) do
    wage * hours
  end
end
