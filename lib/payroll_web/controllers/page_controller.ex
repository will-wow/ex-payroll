defmodule PayrollWeb.PageController do
  use PayrollWeb, :controller

  def index(conn, _) do
    render(conn, "index.html")
  end
end
