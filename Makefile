all: build up

# Build the container
build:
	cd ./deployments && docker-compose build

# Build and run the container
up:
	cd ./deployments && docker-compose up

# Down and remove container
stop: 
	cd ./deployments && docker-compose down

# Run all tests: 
test:
	npm test