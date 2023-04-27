#!/bin/bash
echo pull Stella fronted

cd .. 

git pull

echo Copying source dist folder to nginx dir
sudo rm -r /var/www/html/stella

sudo cp -R dist /var/www/html/stella

echo Restarting nginx
sudo systemctl restart nginx

