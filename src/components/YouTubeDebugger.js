// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export class YouTubeDebugger extends Component {
    constructor(props) {
        super(props);
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
        this.setState({
            settings: {...this.state.settings, bitrate: 12}
        }, () => console.log(this.state))
    }
    
    handleResClick = () => {
        this.setState({
            settings: {...this.state.settings, video: {
                resolution: '720p'
            }}
        }, () => console.log(this.state))
    }
    
    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleBitClick}>Change Bitrate</button>
                <button className="resolution" onClick={this.handleResClick}>Change Resolution</button>
            </div>
        );
    }
}

export default YouTubeDebugger;
