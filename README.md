# Setup Instructions

## Requirements
   - Node.js >= 8
   - MongoDB >= 3.2
   
## EcommEasy Admin Dashboard Installation

- **Clone Git repository**
```shell
git clone https://github.com/EcommEasy/EcommEasy-Admin.git
```
- **Go to EcommEasy-Admin app folder**
```shell
 cd EcommEasy-Admin
 ```

- **Install dependencies**
 ```shell
 npm install
 ```

- **Run Application**

**P.S. Your backend (api) must be online. Follow this [README](https://github.com/EcommEasy/EcommEasy/blob/master/README.md) file before you run EcommEasy-Admin.**

Start the application in the background
```shell
pm2 start process.json
```

At this setup your EcommEasy admin dashboard app is now connected to api and available in browser at http://localhost:3002 

