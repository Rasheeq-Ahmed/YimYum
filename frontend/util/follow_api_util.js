export const fetchAllFollows = () => {
    return (
        $.ajax({
            url: `/api/follows`,
            method: "GET"
        })
    )
}
export const fetchFollow = (id) => {
    return (
        $.ajax({
            url: `/api/follows/${id}`,
            method: "GET"
        })
    )
}
export const createFollow = (follow) => {
    return (
        $.ajax({
            url: `/api/follows/`,
            method: "POST",
            data: {follow}
        })
    )
}
export const deleteFollow = (followId) => {
    return (
        $.ajax({
            url: `/api/follows/${followId}`,
            method: "DELETE"
        })
    )
}