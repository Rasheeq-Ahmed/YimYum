export const fetchVideos = () => {
    return $.ajax({
        url: '/api/videos',
        method: 'GET'
    })
};

export const fetchVideo = (videoId) => {
    return $.ajax({
        url: `/api/videos/${videoId}`,
        method: 'GET'
    })
};

export const createVideo = formData => {
    return $.ajax({
        url: `/api/videos/`,
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false
    })
}

export const updateVideo = (formData, videoId) => {
    return $.ajax({
        url:`/api/videos/${videoId}`,
        method: 'PATCH',
         data: formData,
        contentType: false,
        processData: false 
    })
}


export const deleteVideo = (videoId) => {
    return $.ajax({
        url: `/api/videos/${videoId}`,
        method: 'DELETE'
    })
}