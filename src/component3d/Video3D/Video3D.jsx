import React from 'react';

import VideoFullScreen from '../../component/VideoFullScreen/VideoFullScreen';

const Video3D = () => {
    return (
        <div>
            <div>

           
            <VideoFullScreen video={'/video/production.webm'}/>
                <source src={"/video/production.webm"}  />
           
            </div>
        </div>
    );
};

export default Video3D;