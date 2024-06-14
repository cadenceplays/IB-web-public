npm install react-icons --save  // install React Icons, e.g. the 3 line icon

fonts: fonts.google.com  (font family: Raleway)

npm install react-image-gallery   // install an image slider: https://github.com/xiaolin/react-image-gallery

dropdown menu in Navbar: using /public/script.js to listen "click" action, see youtube video: https://www.youtube.com/watch?v=S-VeYcOCFZw

npm install react-router-dom    // to support multiple pages
To have the react router working properly on Firebase, need to add the following into local firebase.json, then re-deploy.
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {"source": "/service-worker.js", "headers": [{"key": "Cache-Control", "value": "no-cache"}]}
    ] 

npm install react-google-button  // the google auth button

npm install sweetalert2   // sweet alert 2, a javascript popup box