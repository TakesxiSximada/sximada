#! /usr/bin/env sh

printf "[PASSWORD] "
read -s PASSWORD

case $1 in
    "enc" )
        for ENV_FILE in `ls *.env`
        do
            ENCRYPTED_FILE="current/$ENV_FILE.gpg"
	        echo $PASSWORD | gpg -c -o $ENCRYPTED_FILE --cipher-algo AES256 --no-tty --passphrase-fd 0 $ENV_FILE
        done
    ;;
    "dec" )
        for ENCRYPTED_FILE in `ls current/*.gpg`
        do
            ENV_FILE=`basename $ENCRYPTED_FILE .gpg`
            echo $PASSWORD | gpg -d -o $ENV_FILE --cipher-algo AES256 --no-tty --passphrase-fd 0 $ENCRYPTED_FILE
        done
    ;;
    * )
        echo "Unknown command"
esac
