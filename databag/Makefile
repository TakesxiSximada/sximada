.PHONY: enc dec current init clean

current:
	ln -sf $(TARGET) current

enc:
	$(SHELL) crypto.sh enc

dec:
	$(SHELL) crypto.sh dec

init:
	rm -f current/*.gpg

clean:
	rm -f *.env
