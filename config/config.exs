# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :payroll, ecto_repos: [Payroll.Repo]

# Configures the endpoint
config :payroll, PayrollWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "mW6r0zC4ZOI8IA2axQhw0XxAFinwzDZTnCMMks4QnkXzFnf71ByzehLT4RqtW/bP",
  render_errors: [view: PayrollWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: Payroll.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
