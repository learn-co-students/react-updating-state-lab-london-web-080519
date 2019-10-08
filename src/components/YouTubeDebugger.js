// Code YouTubeDebugger Component Here
import React from 'react';

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

    handleBitrateClick=(event)=>{
        this.setState({
            settings: {
                ...this.state.settings, 
                bitrate: 12
            }
        }, () => console.log(this.state.timesClicked))
    }

    handleResolutionClick=(event)=>{
        this.setState({
            settings: {
                ...this.state.settings, 
                video: {resolution: '720p'}
            }
        }, () => console.log(this.state.timesClicked))
    }


    render(){
        return (<div>
            <button className='bitrate' onClick={this.handleBitrateClick}>{this.state.settings.bitrate}</button>
            <button className='resolution' onClick={this.handleResolutionClick}>{this.state.settings.video.resolution}</button>
        </div>)
    }
}

export default YouTubeDebugger;
