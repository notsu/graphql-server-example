db.create:
	docker exec -it app node_modules/.bin/sequelize db:create

db.migrate:
	docker exec -it app node_modules/.bin/sequelize db:migrate

db.migrate.generate:
	docker exec -it app node_modules/.bin/sequelize migration:generate --name $(name)

db.migrate.undo:
	docker exec -it app node_modules/.bin/sequelize db:migrate:undo

db.migrate.undo.all:
	docker exec -it app node_modules/.bin/sequelize db:migrate:undo:all

db.seed.generate:
	docker exec -it app node_modules/.bin/sequelize seed:generate --name $(name)

db.seed.all:
	docker exec -it app node_modules/.bin/sequelize db:seed:all

db.seed.undo:
	docker exec -it app node_modules/.bin/sequelize db:seed:undo

db.seed.undo.all:
	docker exec -it app node_modules/.bin/sequelize db:seed:undo:all

db.reset:
	make db.seed.undo.all
	make db.migrate.undo.all
	make db.migrate
	make db.seed.all
