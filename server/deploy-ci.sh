#! /bin/bash

echo Enter version
read version

echo $version >> version.txt

docker build -t fury17/expense-io:$version .

docker push fury17/expense-io:$version

ssh root@206.189.228.174 "docker pull fury17/expense-io:$version && docker tag fury17/expense-io:$version dokku/api:$version && dokku deploy api $version"