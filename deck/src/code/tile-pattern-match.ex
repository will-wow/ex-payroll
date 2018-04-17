@spec rating(Tile.t()) :: boolean
def rating(tile) do
  case tile do
    %Land{pheromone: pheromone} -> pheromone
    %Food{food: food} -> food
    %Home{food: food} -> food
    %Rock{} -> -1
  end
end