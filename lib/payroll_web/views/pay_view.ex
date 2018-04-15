defmodule PayrollWeb.PayView do
  alias Payroll.Hours

  def render("show.json", %{work_day: work_day, pay: pay}) do
    %{
      hours: Hours.work_day_to_list(work_day),
      pay: Float.round(pay, 2)
    }
  end
end
