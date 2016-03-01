PHONY: all

nginx-cert:
	openssl genrsa -out dummy.key 1024
	openssl req -new -key dummy.key -out dummy.pem -sha1
	openssl x509 -in dummy.pem -out dummy.crt -req -signkey dummy.key -days 365 -sha1
	rm dummy.pem
	mkdir -p nginx/etc/ssl/private/sximada.com/
	mv dummy.key volumes/nginx/etc/ssl/private/sximada.com/sximada.key
	mv dummy.crt volumes/nginx/etc/ssl/private/sximada.com/sximada.crt
