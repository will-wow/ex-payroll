def handle_call(:move, _from, {sim, ant}) do
  x = ant.x
  y = ant.y
  surroundings = Worlds.surroundings(sim, x, y)
  ...
end