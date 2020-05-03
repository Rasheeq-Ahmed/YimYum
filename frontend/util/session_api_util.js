
export const login = user => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: {user}
    })
)

export const demoLogin = () => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: {user: {username: 'demouser,', password: 'demopass', email: 'demologin@yim-yum.com'}}
    })
)

export const signup = user => (
    $.ajax({
        method: 'POST',
        url: '/api/users',
        data: {user}
    })
)


export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
)