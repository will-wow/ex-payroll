defmodule Payroll.HoursTest do
  use ExUnit.Case

  alias Payroll.Hours

  test "less than 8 hours is straight time" do
    assert Hours.calculate_overtime([], 6)  == {6, 0, 0}
  end

  test "8 hours is straight time" do
    assert Hours.calculate_overtime([], 8)  == {8, 0, 0}
  end

  test "10 hours has overtime" do
    assert Hours.calculate_overtime([], 10)  == {8, 2, 0}
  end

  test "14 hours has double time" do
    assert Hours.calculate_overtime([], 14)  == {8, 4, 2}
  end

  test "after 40 hours, overtime" do
    assert Hours.calculate_overtime([8, 10, 8, 12, 8], 10)  == {0, 10, 0}
  end

  test "after almost 40 hours, some overtime" do
    assert Hours.calculate_overtime([8, 10, 8, 12, 6], 10)  == {2, 8, 0}
  end

  test "extra overtime on sundays" do
    assert Hours.calculate_overtime([8, 10, 8, 12, 8, 8], 10)  == {0, 8, 2}
  end

  test "extra overtime on sundays no matter what" do
    assert Hours.calculate_overtime([1, 1, 1, 1, 1, 1], 10)  == {0, 8, 2}
  end
end
