defmodule Payroll.Hours.WorkDay do
  @type t :: {number, number, number}

  def to_pay_hours({straight_time, time_and_a_half, double_time}) do
    straight_time + time_and_a_half * 1.5 + double_time * 2
  end

  @spec to_list(t) :: [number]
  def to_list(work_day) do
    Tuple.to_list(work_day)
  end
end
