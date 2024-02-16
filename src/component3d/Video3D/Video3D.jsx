import React from 'react';

import VideoFullScreen from '../../component/VideoFullScreen/VideoFullScreen';
import VideoFullScreenLatest from '../../component/VideoFullScreen/VideoFullScreenLatest';

const Video3D = () => {
    return (
        <div>
            <div>
                {/* <VideoFullScreen video={'/video/production.webm'} /> */}
                {/* <source src={"/video/production.webm"} /> */}
                <VideoFullScreenLatest video={'/video/production.webm'} videoName="3d-video" />
            </div>
        </div>
    );
};

export default Video3D;