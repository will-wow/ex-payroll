defmodule PayrollWeb.Router do
  use PayrollWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", PayrollWeb do
    pipe_through :api
  end
end
