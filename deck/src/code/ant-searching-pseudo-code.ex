def ant_move(ant = %Ant{food?: false}) do
  cond do
    see_food? -> grab_food(ant)
    see_strong_pheromone? -> move_to_pheromone(ant)
    see_weak_pheromone? -> ant_move(ant)
    true -> ant_move(ant)
  end
end