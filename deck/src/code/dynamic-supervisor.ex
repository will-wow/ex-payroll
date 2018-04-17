def init(:ok) do
  DynamicSupervisor.init(strategy: :one_for_one)
end

def start_simulation(data) do
  DynamicSupervisor.start_child(__MODULE__, {ChildSupervisor, data})
end
