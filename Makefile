.PHONY: clear-apt-cacher-ng

clear-apt-cacher-ng:
	rm -rf volumes/apt-cacher-ng/var/cache/apt-cacher-ng/*
