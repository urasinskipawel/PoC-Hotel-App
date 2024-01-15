# Hotel Management Application

A prototype of commercial mobile application whose purpose is to control the work performed by employees at various professional levels.

## Live 🔴

Link to the live version: [here](https://hotels-management-app.netlify.app/).

## Table of Contents 📃

- [General Information](#general-information)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Testing an App](#testing-an-app)
- [Screenshots](#screenshots)
- [Ideas & Improvements](#ideas-improvements)

## General Information <a name="general-information"/> ℹ️

A project uses such technologies as React, TypeScript and Material UI. The application was created based on a graphic template created in Figma by UI/UX Designer and it is intended for the commercial needs. The application allows to easily manage the status of a rooms in specific hotel, which saves employees' time. The final version of the application will be written in React Native after approval by the Client.

The entire application has several views that are displayed depending on the role of the logged in user. The Login page allows to enter the application and set appropriate user role. The first screen after login is Hotels list where we can see all hotels belongs to owner. Each hotel has his own rooms. The next view is Hotel details. There is a list of rooms, their standard and current status. Access to each room card with the appropriate status is available to users with a specific role that was set after logging in. We can identify three types of cards : "to clean", "to control" and "controlled". When the work is done the card status changes. For example : after cleaning the card status will be change to "to control".

## Technologies Used <a name="technologies-used"/> 💻

- React,
- Context API,
- React Hook Form,
- React Router,
- Typescript,
- Material UI,
- Eslint + airbnb,
- Figma
- yarn

## Installation <a name="installation"/> 💿

> Clone the repository

> Go to it using the terminal

$ cd foldername

> Install dependencies

$ yarn

> Build for production and launch server

$ yarn build

$ yarn start

> Open the app at: http://localhost:3000/

## Testing an App <a name="testing-an-app"/> 🧪

> The application has four types of users:
- <b>Worker</b>
- <b>Supervisor</b>
- <b>Boss</b>
- <b>Admin</b>

> To log in to a given profile, you must use the convention below:
- Login : <b>user</b>@gmail.com
- Password : <b>user</b>

> After enter the App, the views are displayed depending on the role of the logged in user. 

## Screenshots <a name="screenshots"/> 🖵

- Login page
  
<a href="https://ibb.co/g6knf5h"><img src="https://i.ibb.co/pnYmMt5/Login.png" alt="Login" width = "200px"></a>
&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://ibb.co/ZX5S8fj"><img src="https://i.ibb.co/6wz8PyM/Login2.png" alt="Login2" width = "200px"></a>

- Hotels list

<a href="https://ibb.co/17FgRkk"><img src="https://i.ibb.co/Gnz6Cqq/Hotels-List.png" alt="Hotels-List" width = "200px"></a>

- Hotel details

<a href="https://ibb.co/zR1hZRN"><img src="https://i.ibb.co/tsSMDs3/Hotel-Details.png" alt="Hotel-Details" width = "200px"></a>
&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://ibb.co/vL6XyG2"><img src="https://i.ibb.co/YfF0nMv/Hotel-details2.png" alt="Hotel-details2" width = "200px"></a>
&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://ibb.co/DpByS3C"><img src="https://i.ibb.co/m8nwMQq/Hotel-details4.png" alt="Hotel-details4" width = "200px"></a>

- Cleaning card

<a href="https://ibb.co/K9QFyVv"><img src="https://i.ibb.co/vJrZzLn/Cleaning-card.png" alt="Cleaning-card" width = "200px"></a>
&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://ibb.co/YZ189MX"><img src="https://i.ibb.co/WtMF9w0/Cleaning-card2.png" alt="Cleaning-card2" width = "200px"></a>

- Control card

<a href="https://ibb.co/FKZSfyC"><img src="https://i.ibb.co/Vtn7hz5/Control-card.png" alt="Control-card" width = "200px"></a>
&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://ibb.co/DYZW47d"><img src="https://i.ibb.co/Jq9tnzZ/Control-card2.png" alt="Control-card2" width = "200px"></a>

- Result card

<a href="https://ibb.co/4TSVxhj"><img src="https://i.ibb.co/MV1CLFR/Result-card.png" alt="Result-card" width = "200px"></a>


## Ideas & Improvements <a name="ideas-improvements"/> 💡

Currently, the application is at the stage of a working prototype that can be used.
I am gradually implementing improvements and fixing bugs.

In the future, I'm going to create a database with real users and roles that the application will use. 
If the Client approves the prototype, it will be rewritten into React Native.

I am open to contact, suggestions and cooperation. If you have any ideas or encounter a problem, please email me at: uraspawel@gmail.com
