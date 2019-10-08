// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }

    handleBitClick = () => {
        //settings.bitrate state property to 12
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })    
    }

    handleRezClick = () => {
        // settings.video.resolution state property to '720p'
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })    
    }

    render() {
        return(
            <div>
                <button className="bitrate" onClick={this.handleBitClick}>BIT-RATE</button>
                <button className="resolution" onClick={this.handleRezClick}>REZ-OH-LOO-SHUN</button> 
            </div>
        )
    }

}

export default YouTubeDebugger