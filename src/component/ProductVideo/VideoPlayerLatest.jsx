import React, { useState, useMemo } from 'react';

const VideoPlayerLatest = ({ videoUrl, loadingImg, videoName }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoadStart = () => {
        setIsLoading(true);
    };

    const handleCanPlayThrough = () => {
        setIsLoading(false);
    };

    const videoPlayer = useMemo(() => (
        <>
            <div className="flex justify-center w-full h-full">
                <video
                    className="object-cover" width="100%" height="auto"
                    onLoadedData={handleCanPlayThrough}
                    onLoadStart={handleLoadStart}
                    playsInline
                    autoPlay
                    muted
                    loop
                >
                    <source src={videoUrl} type="video/mp4" />
                </video>
            </div>
        </>
    ), [videoName]);

    return videoPlayer;
};

export default VideoPlayerLatest;
