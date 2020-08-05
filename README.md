<img src='/app/assets/images/readme/logo.PNG' width='300'>


YimYum is food-themed video sharing website inspired by [TikTok](https://tiktok.com/) where users can upload, watch, and interact with each other's videos through comments and likes. Users can also follow other users It was built utlizing a Rails backend with a React/Redux frontend.

Please check it out [Live Link](https://yimyum.herokuapp.com//).

## Technologies Used:

* Ruby on Rails
* React
* Redux
* Postresql
* Javascript
* HTML/CSS



## Features
 * BCrypt encrypted user authentication from frontend to backend
 * Logged in users can upload videos
   * Once uploaded, videos are added to a main video feed.
 * Logged in users can like or dislike a video only once.
   * Each video displays its accumulated likes in order to measure its popularity.
 * Logged in users have a profile page.
  * Users can edit their own profile picture and bio.
 * Logged in users can also comment on a video.
 * Users have access to a nav bar that can assist them in navigating to key locations of the site.


## Secure User Sign-up/Login:

User Authentication with both Login and Signup functionality.

<img src='/app/assets/images/readme/login.PNG' width='300'> <img src='/app/assets/images/readme/signup.PNG' width='300'>


## Video Upload
Once logged in, users can click on the cloud icon located within the header. They will be met by the following page:
 
 <img src='/app/assets/images/readme/upload.PNG' width='600'>

 
Users can select a video file to add by clicking on the upload field. They will have the option to input a title caption if they choose and then they just need to click on the 'Post' button, after which, they will be sent to the home page and be able to see their video be added to the master list of videos.


## Video Feed
After a user logs in they are directed to a video feed that contains all video uploaded.

 <img src='/app/assets/images/readme/video_feed.PNG'>


### Following Videos
  Following account's videos appear in this video feed.
  
  
## Comments
  Users can post and delete comments upon clicking on a video which will open up a modal for the video.
  
   <img src='/app/assets/images/readme/modal.PNG'>

  
  
## Likes
Once logged in, users can decide whether or not they would like to like the video they are watching. All they need to do is click on the heart icon below the video player. The exmaple below points out the icons' location with respect to the video title and comment count. 


## Profiles
Users each have a a profile page where you can see each user's videos. You can also see the user's profile picture, bio, as well as the following stats: video count, follower count, following count.

 <img src='/app/assets/images/readme/profile.PNG' width='600'>
 
 ### Edit Profile
 Users can edit their own profile picture and bio. 
  <img src='/app/assets/images/readme/edit-prof.PNG' width='500'>

## Followers and Following
Once logged in, users can decide whether or not they would like to follow other users. You can follow users through the suggested accounts, video feed, or video modal.
  ### Suggested Accounts
   Accounts that the logged in user isn't following will be suggested for following.
  ### Top Accounts
   Followed Users will be displayed on video feed page.


## Upcoming Features
The following is a list of features I would like to add to the app:

* Likes for comments
* Ability to reply to comments
* Search functionality hashtags
