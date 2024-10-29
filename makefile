start:
	docker-compose up -d --build
	docker-compose exec front npm run dev

start-extended:
	docker-compose up -d --build
	make app-update
	docker-compose exec front npm run dev

app-update:
	docker-compose exec front npm i