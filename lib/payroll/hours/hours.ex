require IEx

defmodule Payroll.Hours do
  alias Payroll.Hours.WorkDay
  alias Payroll.Hours.Overtime

  @spec calculate_overtime([number], number) :: WorkDay.t()
  defdelegate calculate_overtime(previous_hours, current_hours), to: Overtime

  @spec work_day_to_pay_hours(WorkDay.t()) :: number
  defdelegate work_day_to_pay_hours(work_day), to: WorkDay, as: :to_pay_hours

  @spec work_day_to_list(WorkDay.t()) :: [number]
  defdelegate work_day_to_list(work_day), to: WorkDay, as: :to_list
end
