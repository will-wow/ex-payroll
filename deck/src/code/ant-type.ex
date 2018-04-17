defmodule Ants.Ants.Ant
  @type t :: %Ant{
          x: integer,
          y: integer,
          food?: boolean
        }

  defstruct x: nil, y: nil, food?: false
end