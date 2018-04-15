defmodule PayrollWeb.Router do
  use PayrollWeb, :router

  pipeline :api do
    plug(:accepts, ["json", "html"])
  end

  scope "/api", PayrollWeb do
    pipe_through(:api)

    get("/pay", PayController, :day)
  end
end
