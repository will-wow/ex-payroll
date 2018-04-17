defmodule Payroll.Hours.Overtime do
  @week 7
  @standard_hours 8
  @time_and_a_half_hours 4
  @standard_week @standard_hours * 5

  @spec calculate_overtime([number], number) :: WorkDay.t()
  def calculate_overtime(previous_hours, current_hours) do
    previous_hours
    |> Enum.map(&remove_overtime/1)
    |> Enum.sum()
    |> calculate_hours(length(previous_hours), current_hours)
  end

  defp calculate_hours(previous_hours_worked, previous_days_worked, hours) do
    if previous_days_worked < @week - 1 do
      calculate_weekday_hours(hours, previous_hours_worked)
    else
      calculate_seventh_day_hours(hours)
    end
  end

  @spec calculate_weekday_hours(number, number) :: WorkDay.t()
  defp calculate_weekday_hours(hours, previous_hours) do
    standard_time = remove_overtime(hours)

    time_and_a_half = cap_up(hours - standard_time, @time_and_a_half_hours)
    double_time = hours - standard_time - time_and_a_half

    weekly_overtime = cap_down(previous_hours + standard_time - @standard_week, 0)

    {standard_time - weekly_overtime, time_and_a_half + weekly_overtime, double_time}
  end

  @spec calculate_seventh_day_hours(number) :: WorkDay.t()
  defp calculate_seventh_day_hours(hours) do
    time_and_a_half = remove_overtime(hours)
    double_time = hours - time_and_a_half

    {0, time_and_a_half, double_time}
  end

  @spec remove_overtime(number) :: number
  defp remove_overtime(hours) do
    cap_up(hours, @standard_hours)
  end

  @spec cap_up(number, number) :: number
  defp cap_up(x, max) do
    if x < max, do: x, else: max
  end

  @spec cap_down(number, number) :: number
  defp cap_down(x, min) do
    if x > min, do: x, else: min
  end
end
