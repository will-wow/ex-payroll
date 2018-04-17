def ant_move(ant = %Ant{food?: true}) do
  if at_home do
    ant
    |> drop_off_food()
    |> ant_move()
  else
    ant
    |> deposit_pheromone()
    |> ant_move()
  end
end