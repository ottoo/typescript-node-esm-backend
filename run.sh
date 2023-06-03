# Runs the server in a docker container at port 4000, database at port 5439
# https://docs.docker.com/desktop/networking/#i-want-to-connect-from-a-container-to-a-service-on-the-host
docker run -e DATABASE_URL="postgres://user:password@host.docker.internal:5439/example_database" -p 4000:4000 example-server
