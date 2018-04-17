def init(:ok) do
  Supervisor.init([ChildSupervisor], strategy: :simple_one_for_one)
end

def start_simulation(data) do
  Supervisor.start_child(__MODULE__, [data]) 
end