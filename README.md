# Glife Extinction Market Bot
After more than 1,5 year, I finally release the bot as open source

All files in this git are from the version we sold from our discord so there are some things that are not needed anymore.

Don't forget to leave a star if you like it / use it!


# How to install the Market Bot:

1 - Have a VPS / Proxies

2 - If not done : Install Node-Js (See the github if problem)

curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt install nodejs
sudo apt install npm (if problems with npm commands)

3 - Installed PM2 :

 npm install pm2 -g

4 - Added the Market Bot on your VPS

5 - Create an application here --> https://discord.com/developers/applications

6 - Go to 'Bot' then check, and get the token

7 - Put the token in the '.env' file (TOKEN)

8 - Oauth2 --> Retrieve the ClientID and put it in the '.env' file (CLIENTID)

9 - Right click on your discord server --> Copy the ID and put it in the file '.env' (GUILD)

10 - Create a Webhook in the channel where the bot must put the alerts (Put it in the .env file (the link of the webhook))

11 - Create a role for the ping and retrieve the identifier and put it in the file '.env' --> PINGROLE

12 - Create a role to change the price of the market bot (Put it in the file '.env' --> UPDATERROLE)

Optionnal: 
 13 - Then configure the Proxies (https://www.webshare.io/)

14 - On (Putty, Termius, etc) 'cd /root/FILENAMEMARKETBOT

15 - Then 'pm2 start index.js


Discord : https://discord.gg/k4cNWnDJEz

# Credits
Created by me (Bycop#4757) and Mistik#9871 (https://github.com/MisTik0)

Leave a star if you like it / use it!

And follow for more projects like this one!
