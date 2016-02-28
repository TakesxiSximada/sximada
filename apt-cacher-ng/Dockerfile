FROM ubuntu:latest
MAINTAINER sximada@gmail.com

VOLUME ["/var/cache/apt-cacher-ng"]
RUN sed -i.bak -e "s%http://archive.ubuntu.com/ubuntu/%http://ftp.iij.ad.jp/pub/linux/ubuntu/archive/%g" /etc/apt/sources.list
RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install -y apt-cacher-ng
EXPOSE 3142
CMD /etc/init.d/apt-cacher-ng start && tail -f /var/log/apt-cacher-ng/*
