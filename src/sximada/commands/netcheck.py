#! /usr/bin/env python
# -*- coding: utf-8 -*-
import os
import sys
import argparse
import requests

from logging import getLogger
_logger = getLogger(__name__)

URL = 'http://example.com/'
HOME_DIR = os.environ.get('HOME', '/tmp')
FLAG_DIR = os.path.join(HOME_DIR, 'ng/var/sximada', 'NETCHECK')


def touch(path):
    _logger.error('touch file: %s', path)
    open(path, 'a').close()
    os.utime(path, None)


def rm(path, force=False, recursive=False):
    _logger.error('remove file or dir: %s', path)
    os.remove(path)


class FlagFile(object):
    def __init__(self, path):
        self._path = path

    def enable(self):
        abspath_ = os.path.abspath(self._path)
        absdir_ = os.path.dirname(abspath_)
        if not os.path.isdir(absdir_):
            _logger.error('create flag file directory: %s', absdir_)
            os.makedirs(absdir_)
        touch(self._path)

    def disable(self):
        rm(self._path)

    @property
    def is_enable(self):
        return os.path.exists(self._path)


def main(argv=sys.argv[1:]):
    parser = argparse.ArgumentParser()
    parser.add_argument('--flagfile', default=FLAG_DIR)
    parser.add_argument('--url', default=URL)
    args = parser.parse_args(argv)

    url = args.url
    flagfile = FlagFile(args.flagfile)

    try:
        requests.get(url)
    except requests.ConnectionError:
        _logger.error('offline now!!')
        flagfile.disable()
    else:  # connected
        _logger.error('online now!!')
        flagfile.enable()

if __name__ == '__main__':
    sys.exit(main())
