defmodule Ants.Worlds.Tile do
  @type t :: Land.t() | Rock.t() | Home.t() | Food.t()
end