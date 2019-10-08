// Code YouTubeDebugger Component Here
import React from "react";

class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      }
    };
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.changeBitrate}>
          Change Bitrate
        </button>
        <button className="resolution" onClick={this.changeResolution}>
          Change Resolution
        </button>
      </div>
    );
  }

  changeBitrate = () => {
    // change setting.bitrate to 12
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  changeResolution = () => {
    //   change settings.video.resolution to 720p
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: "720p"
        }
      }
    });
  };
}
export default YouTubeDebugger;
