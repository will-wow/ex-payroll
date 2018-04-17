defmodule Ants.Worlds.Point do
  @type x :: integer
  @type y :: integer
  @type t :: {x, y}
end

defmodule Ants.Ants.Move do
  @type dx :: integer
  @type dy :: integer
  @type t :: {dx, dy}
end