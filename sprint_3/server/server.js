const { request, response } = require("express");
const uuid = require("uuid4");
const express = require("express");
const app = express();

// Importing Data from Data.js
const data = require("./data");
const videosArray = data.videos;

// Using CORS to bypass security measures
// app.use(cors());

// Importing and using body parser middleware
// to retrieve video post info
const bodyParser = require('body-parser');
const uuid4 = require("uuid4");
app.use(bodyParser.json());

// Endpoint - videos list
app
  .route('/videos')
  .get((_request, response) => {
    // Array to store the video list
    let nextVideos = [];
    // Creating video objects for each video
    videosArray.forEach((video) => {
      // Pushing object into the array
      nextVideos.push({
        "id": video.id,
        "title": video.title,
        "channel": video.channel,
        "image": video.image
      })
    })
    // Responding with status and next videos array
    response.status(200).send(nextVideos);
  })
  .post((request, response) => {
    let uploadVideo = {
      "id": uuid4(),
      "title": request.body.title,
      "channel": request.body.channel,
      "image": request.body.image,
      "description": request.body.description,
      "views": "",
      "likes": "",
      "duration": "",
      "video": "",
      "timestamp": Date.now(),
      "comments": []
    }
    videosArray.push(uploadVideo)
    response.status(201).send(uploadVideo)
  })

// Endpoints - Individual video route
app
  .route('/videos/:videoID')
  .get((request, response) => {
    // ID of the video for which the details are requested
    let requestedVideoID = request.params.videoID;
    // Finding the video based on ID from videos array
    // and storing details
    let responseVideoDetails = videosArray.find((video) => video.id == requestedVideoID);
      // Responding with status and the details of the video requested
    response.status(200).send(responseVideoDetails);
  })

app.listen(8080, (error) => (error ? console.log(error) : console.info("running on 8080")));