import { useEffect, useState } from 'react';
import { IVideo, VIDEOS } from '../../../../mock/videos.mock';
import classes from './VideoList.module.scss';
import { VideoItem } from '../../../Videos/VideoList/VideoItem';
import { useParams } from 'react-router';

const VideoList = (): JSX.Element => {
    const [videos, setVideos] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const userVideos = VIDEOS.filter(item => item.userId === +id);
        setVideos(userVideos);
    }, [id])

    return (
        <div className={classes.list}>
            {videos.map((video: IVideo) => (
                <VideoItem {...video} key={video.userId} />
            ))}
        </div>
    )
}


export default VideoList;