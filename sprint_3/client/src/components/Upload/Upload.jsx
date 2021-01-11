import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './Upload.scss';
import videoThumbnail from '../../assets/images/Upload-video-preview.jpg';

class Upload extends React.Component {

  apiURL = 'http://localhost:8080/videos';

  state = {
    title: "",
    description: "",
    buttonDisabled: true,
    newVideoId: ''
  }

  // Function to update the title state with every field change 
  updateTitle = event => {
    this.setState({
      title: event.target.value
    }, this.setButtonStatus()) // setting button status when required fields have data
  }

  // Function to update the description state with every field change 
  updateDescription = event => {
    this.setState({
      description: event.target.value
    }, this.setButtonStatus()) // setting button status when required fields have data
  }

  // Function to handle the click on Publish button
  handlePublish = event => {
    // Preventing submit event defaults
    event.preventDefault();
    // Posting the video information to API using apiPostVideo function
    this.apiPostVideo({
      "title": this.state.title,
      "channel": "Mohan Muruge",
      "image": videoThumbnail,
      "description": this.state.description
    })
  }

  // Function to set the state of 'setButtonStatus'
  // thereby enabling / disabling the Publish button
  setButtonStatus = () => {
    if(this.state.title !== '' && this.state.description !== '') {
      this.setState({
        buttonDisabled: false
      })
    }
  }

  // Function to post a new video to the API
  // Requires a video object as an argument to be passed
  apiPostVideo = (videoObject) => {
    Axios
      .post(`${this.apiURL}`, videoObject)
      .then((res) => {
        this.setState({
          newVideoId: res.data.id
        }, () => {
          // Redirecting user to newly posted video
          // after successful upload to API
          this.props.history.push(`/video/${this.state.newVideoId}`)
        })
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <section className="upload container">
          <h1 className="upload__head">Upload Video</h1>
          <form
            className="upload__form"
            id="form">
  
            <div className="upload__form-detail">
  
              <div className="upload__form-detail-preview">
                <h4 className="upload__form-detail-preview-title">Video Thumbnail</h4>
                <div className="upload__form-detail-preview-wrapper">
                  <img className="upload__form-detail-preview-wrapper-img" src={videoThumbnail} alt="Bicycle handle bar in focus"/>
                </div>
              </div>
  
              <div className="upload__form-detail-input">
                <div className="upload__form-detail-input-block">
                  <label className="upload__form-detail-input-block-label" htmlFor="title">Title your video</label>
                  <input
                    className="upload__form-detail-input-block-field upload__form-detail-input-block-field--title"
                    type="text"
                    id="title"
                    name="title"
                    onChange={this.updateTitle}
                    placeholder="Add a title to your video"
                  />
                </div>
  
                <div className="upload__form-detail-input-block">
                  <label className="upload__form-detail-input-block-label" htmlFor="description">Add a video description</label>
                  <textarea
                    className="upload__form-detail-input-block-field upload__form-detail-input-block-field--desc"
                    type="text"
                    id="description"
                    name="description"
                    onChange={this.updateDescription}
                    placeholder="Add a description of your video"
                  />
                </div>
              </div>
  
            </div>
  
            <div className="upload__form-action">
              <button
                onClick={this.handlePublish}
                disabled={this.state.buttonDisabled}
                className="upload__form-action-button upload__form-action-button--publish">Publish
              </button>
              <Link className="upload__form-action-button upload__form-action-button--cancel" to="/">Cancel</Link>
            </div>
          </form>
        </section>
      </div>
    )
  }
}

export default Upload