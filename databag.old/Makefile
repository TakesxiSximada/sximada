.PHONY: enc dec current init clean

current:
	ln -sf $(TARGET) current

enc:
	$(SHELL) bin/crypto.sh enc

dec:
	$(SHELL) bin/crypto.sh dec

init:
	rm -f current/*.gpg

clean:
	rm -f *.env
