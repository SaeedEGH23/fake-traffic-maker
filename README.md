# Fake Traffic Maker
This app generates fake traffic between 2 servers (Server1 and Server2) using Node.js and Express. 

## Server 1: Downloader 
This server is responsible for downloading a file from Server2. 

## Server 2: Provider 
This server is responsible for providing a file to Server1 for download. 

## Instructions: 
1. Install npm on both servers 
2. Clone the repository 
3. Run `npm install` 
4. Set the provider server IP and port in `server1/download.sh` (the downloader) 
5. Set the port in `server2/main.js` (the provider) 
6. Put a file with the desired size in the `app` directory of Server2 and rename it to `filename` 
7. Install the pm2 package globally on both servers with `npm install pm2 -g` 
8. Start the Server2 (file provider) with `pm2 start server2/main.js` 
9. Start the Server1 (downloader) with `pm2 start server1/main.js` 

## License 
This app is licensed under the MIT License. 
