FROM ubuntu:latest
MAINTAINER TakesxiSximada <sximada@gmail.com>

ENV LANG C.UTF-8

# IIJ mirror
RUN sed -i.bak -e "s%http://archive.ubuntu.com/ubuntu/%http://ftp.iij.ad.jp/pub/linux/ubuntu/archive/%g" /etc/apt/sources.list
RUN apt-get update -y
RUN apt-get install -y software-properties-common  # >= 14.04
RUN apt-add-repository ppa:fkrull/deadsnakes
RUN apt-get update -y

# for python3.5
RUN apt-get install -y git mercurial curl
RUN apt-get install -y python3.5 python3.5-dev python3-pip python-virtualenv  # use python3.5
RUN curl https://bootstrap.pypa.io/get-pip.py -o tmp/get-pip.py
