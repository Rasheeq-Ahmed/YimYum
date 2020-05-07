import * as Video_APIUtil from '../util/video_api_util'

export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS";
export const REMOVE_VIDEO = "REMOVE_VIDEO";

 const receiveVideo = video => ({
    type: RECEIVE_VIDEO,
    video
});

 const receiveAllVideos = videos => ({
    type: RECEIVE_ALL_VIDEOS,
    videos //all the json
});

 const deleteVideo = videoId => ({
     type: REMOVE_VIDEO,
     videoId
 })


export const fetchVideo = videoId => dispatch => (
    Video_APIUtil.fetchVideo(videoId)
    .then(video => dispatch(receiveVideo(video)))
)


export const fetchVideos = () => dispatch => (
    Video_APIUtil.fetchVideos() //ajax call from backend
    .then(videos => dispatch(receiveAllVideos(videos))) //dispatched and sent to reducer
)

export const removeVideo = videoId => dispatch => (
    Video_APIUtil.deleteVideo(videoId)
    .then(() => dispatch(deleteVideo(videoId)))
)

export const createVideo = video => dispatch => (
    Video_APIUtil.createVideo(video)
    .then(
        video => dispatch(receiveVideo(video))
        // error => dispatch(receiveVideoErrors(error.responseJSON))
        )
)