defmodule PayrollWeb.Router do
  use PayrollWeb, :router

  pipeline :browser do
    plug(:accepts, ["html"])
  end

  pipeline :api do
    plug(:accepts, ["json", "html"])
  end

  scope "/", PayrollWeb do
    pipe_through(:browser)

    get("/", PageController, :index)
  end

  scope "/api", PayrollWeb do
    pipe_through(:api)

    get("/pay", PayController, :day)
  end
end
