
  
# Firebase authentication Example 
This is an example of an in-depth ReadMe.  

## Badges  

Add badges from somewhere like: [shields.io](https://shields.io/)  
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)  
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://choosealicense.com/licenses/gpl-3.0/)  
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)


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
