export const createLike = like => {
    return $.ajax({
        url: '/api/likes',
        method: 'POST',
        data: {like}
    });
};


export const removeLike = likeId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/likes/${likeId}`
    })
);