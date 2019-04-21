import React from 'react';
import VideoItem from './VideoItem';

const VideoList = props => {
    const renderedVideoList = props.videos.map(video => {
        return <VideoItem key={video.id.videoId} video={video} onVideoSelect={props.onVideoSelect} />;
    });

    return <div>{renderedVideoList}</div>
};

export default VideoList;