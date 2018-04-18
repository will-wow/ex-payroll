defmodule Payroll.Hours.Overtime do
  @week 7
  @standard_hours 8
  @time_and_a_half_hours 4
  @standard_week @standard_hours * 5

  @spec calculate_overtime([number], number) :: WorkDay.t()
  def calculate_overtime(previous_hours, current_hours) do
    previous_days = length(previous_hours)

    previous_hours
    |> Enum.map(&remove_overtime/1)
    |> Enum.sum()
    |> calculate_hours(previous_days, current_hours)
  end

  defp remove_overtime(hours)

  defp calculate_hours(previous_hours_worked, previous_days_worked, hours)
end
