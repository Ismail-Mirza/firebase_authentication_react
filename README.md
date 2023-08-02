
  
# Firebase authentication Example 
-- Firebase authentication
-- Simple Ui with bootstrap
-- custom signup and login form 
-- phone number authentication
-- email and password authentication

## Tech Stack  

**Client:** React,Vite,Bootstrap,react-router-dom  

**Server:** Firebase

## Features  

- Google authentication 
- Phone authentication 
- Context Api 
- Email and password authentication with custom login and signup form 


## Run Locally  

Clone the project  

~~~bash  
  git clone https://github.com/Ismail-Mirza/firebase_authentication_react.git
~~~

Go to the project directory  

~~~bash  
  cd firebase_authentication_react
~~~

Install dependencies  

~~~bash  
yarn install 
or 
npm install 
~~~

Start the server  

~~~bash  
npm run dev

~~~
~~~bash  
yarn dev

~~~

## Firbase account and create new project and modify 'config.example.ts' with your credientials and rename it to 'config.ts'
```
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

```
## License  

[MIT](https://choosealicense.com/licenses/mit/)
