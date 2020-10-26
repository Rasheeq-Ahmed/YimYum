import * as Video_APIUtil from '../util/video_api_util'

export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS";
export const REMOVE_VIDEO = "REMOVE_VIDEO";
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS";


 const receiveVideo = ({video,user,likes}) => ({
    type: RECEIVE_VIDEO,
    video,
    user,
    likes
});

const receiveAllVideos = (videos) => ({
    type: RECEIVE_ALL_VIDEOS,
    videos, //all the json
});

 const deleteVideo = videoId => ({
     type: REMOVE_VIDEO,
     videoId
     
 })

 const receiveVideoErrors = (errors) => ({
   type: RECEIVE_VIDEO_ERRORS,
   errors,
 });


 export const fetchVideos = () => dispatch => (
     Video_APIUtil.fetchVideos() //ajax call from backend
     .then(videos => dispatch(receiveAllVideos(videos)),
     errors => dispatch(receiveVideoErrors(errors.responseJSON))) //dispatched and sent to reducer
 )


export const fetchVideo = videoId => dispatch => (
    Video_APIUtil.fetchVideo(videoId)
    .then(video => dispatch(receiveVideo(video)),
    errors => dispatch(receiveVideoErrors(errors.responseJSON))))

    export const createVideo = formData => dispatch => (
        Video_APIUtil.createVideo(formData)
        .then(
            video => dispatch(receiveVideo(video)),
            errors => dispatch(receiveVideoErrors(errors.responseJSON)))
                                // .then(location.reload(), 1000)

    )


     export const updateVideo = (formData, videoId) => (dispatch) =>
       Video_APIUtil.updateVideo(formData,videoId).then(
         (video) => dispatch(receiveVideo(video)),
         (errors) => dispatch(receiveVideoErrors(errors.responseJSON))
       );
            



export const removeVideo = (videoId) => (dispatch) =>
         Video_APIUtil.deleteVideo(videoId).then(
           () => dispatch(deleteVideo(videoId)),
           (location.reload(), 1000),
           (errors) => dispatch(receiveVideoErrors(errors.responseJSON))

         );

        
        // error => dispatch(receiveVideoErrors(error.responseJSON)),