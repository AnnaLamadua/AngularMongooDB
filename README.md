# Tour Of Heroes With MongoDB
This application is based on popular Angular 2 [Tour of Heroes](https://angular.io/docs/ts/latest/tutorial/) tutorial. So here we'll be using angular 2 with Typescript.
However in this example, I have implemented basic CRUD operations using REST services hosted on node server. 

## Pre-requisites
Node and npm should be installed. Since all code is done in typescript, so typescript compiler must be installed as well.
Also, **since we are gonna use REST services, so first we have to set that up locally. For that, please use [this repository](https://github.com/anandprajapati1/CRUD-operation-using-mongo-node). 
Just follow simple steps given and you are all set!**

## Getting Started
### Installing packages
Clone repository and run following command in command prompt/terminal(in root folder).
```
npm install
```
This will install dependencies in your local application environment.
Now set service base url into **hero.service.ts**. Eg-
```
private baseUrl = 'http://localhost:3000';
```


### Run in Browser
Run following command in command prompt/terminal(in root folder)
```
npm start
```
This will start application and run in browser on default port 3001. And thats all!
If your server is up and running, this application will work as the default hero app.


Thanks!
