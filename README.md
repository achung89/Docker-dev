# Docker-dev
Docker setup with webpack-dev-server, nodemon, and mysql database.

# Notes
All docker application dev setups should include two volumes
1) one mount from the root directory to the container working directory
2) a data volume for the node_modules in the container so it is not overwritten by the node_modules in the root directory