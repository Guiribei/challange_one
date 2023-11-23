all: run-and-clean

up:
	docker-compose -f server_approach/docker-compose.yml run challenge
down:
	docker-compose -f server_approach/docker-compose.yml down

restart: down up


clean:
	docker-compose -f server_approach/docker-compose.yml down --volumes --remove-orphans --rmi all

run-and-clean: up clean

.PHONY: up down restart
