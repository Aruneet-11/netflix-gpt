#Netflix GPT

1.Create-react-app
2.Configured tailwindCSS into the app.
3.Set up the Routing: react-router-dom.: npm i -D react-router-dom
4.Created header and login compoonents.
5.Login form
6.SignUp form
7.when clicks on the sign up button sign in form should convert into sign up form. using toggle feature
8.Form Validation
9.useRef hook used for getting the reference of email and password text entered by the user.
10.form onSubmit= {(e)=>e.preventDefault()} --- used for preveting the form from submitting.
11.Building the Authentication.-- for building the authetication we need backend and for that we will use firebase.(Firebase Setup)
12.Deploying our app to production.
13.SignUp user account.
14.Implement SignIn using API.
15.Created Redux Store withe userSlice.
16.Implemented signout
17.Update profile api call
18.Fetch data from TMDB movie.
19.BugFix:signup user display name update.
20.BugFix: if the user is not logged in redirect them to login page and vice-versa.
21.unsubscribed to the onAuthState change callback when the componet unmounts.
22.Registered on TMDB and created the app
23.Get data from TMDB now playing movies list API.
24.get the trailer data from videos api.
25.created the custom hook for now playing Movies.
26.created movie slice.
27.updated the movie slice with movies data.
28.upsated store with trailer video data.
29.embedded the you tube video made it autoplay and mute.
30.Added TailwindCss to make it look awesome. 31. Also added Font Awesome in the project for the icons.
32.build the secondary component.
33.GPT search Feature.
34.Created GptSearch bar and GptMoviesSuggestions.
35.Created GptSearch Page.
36.(\*\*\*) Multi Language feature in our app.
37.Integrate GPT APIs.

#Features of our app
-Login/Signup page
-contains signin/signup form
-once logged in redirect to browse page
-Browse page(after authentication)
-Header
-Main Movie
-Trailer in the bg
-Title Desc
-Play Button
-Movie Suggestions
-Movie List

-NetflixGPT
-searchbar
-Suggest movies based on your search

#Note
-instead of dispatching the action again and again on signup,signin and signout. We will write it only one time in the body.js using a function onAuthStateChanged.
-if I use strict mode a lot of things happen twice.
