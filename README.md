# Docker-dev
Docker setup with webpack-dev-server, nodemon, and mysql database.

# Notes
'webpack-dev-server' command must include '--host:0.0.0.0' to be accessed by localhost

webpack config file must include 'watchPolls' configuration to allow live-reloading. An alternative is to set env variable "CHOKIDAR_USEPOLLING=true"

