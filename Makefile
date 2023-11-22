all: up

up:
	docker-compose -f server_approach/docker-compose.yml up --build
down:
	docker-compose -f server_approach/docker-compose.yml down

restart: down up

.PHONY: up down restart
