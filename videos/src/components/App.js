import React from 'react';
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = { videos: [], selectedVideo: null };

    //By default when we access the video app, we should make a search of a default video to show on the screen instead of just "Loading...."
    componentDidMount() {
        this.onSearchSubmit('cars');
    }

    //This returns promise or use async syntax
    onSearchSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        //We add selectedVideo below to select a default video
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = video => {
        this.setState({selectedVideo: video});
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>

                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;