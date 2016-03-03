PHONY: up down restart

restart: up down

up:
	docker-volume directory
	make sximada-cert
	docker-volume add
	docker-volume mount
	docker-compose up -d

down:
	docker-compose stop
	docker-compose kill
	docker-compose rm -f
	docker-volume umount
	docker-volume remove

# ca:
# 	openssl rand 1024 -out tmp/random.dump  # seedの生成
# 	openssl genrsa -rand tmp/random.dump -out tmp/ca.key
# 	openssl rsa -in tmp/ca.key -pubout -out tmp/ca.pub

# tmp/ca.key:
# 	mkdir -p tmp
# 	openssl genrsa -out tmp/ca.key 1024


sximada-cert: tmp/dummy.key tmp/dummy.crt
	cp tmp/dummy.key volumes/sximada/etc/ssl/private/sximada/sximada.key
	cp tmp/dummy.crt volumes/sximada/etc/ssl/private/sximada/sximada.crt

tmp/dummy.crt: tmp/dummy.key
	openssl genrsa -out tmp/dummy.key 1024
	openssl req -new -key tmp/dummy.key -out tmp/dummy.pem -sha1
	openssl x509 -in tmp/dummy.pem -out tmp/dummy.crt -req -signkey tmp/dummy.key -days 365 -sha1

tmp/dummy.key:
	mkdir -p tmp
	openssl genrsa -out tmp/dummy.key 1024
