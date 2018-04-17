def move(pid) do
  GenServer.call(pid, :move)
end

def deposit_pheromones(pid) do
  GenServer.call(pid, :deposit_pheromones)
end