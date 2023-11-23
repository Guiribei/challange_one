all: up

up:
	docker-compose -f server_approach/docker-compose.yml run challenge
down:
	docker-compose -f server_approach/docker-compose.yml down

restart: down up

.PHONY: up down restart
