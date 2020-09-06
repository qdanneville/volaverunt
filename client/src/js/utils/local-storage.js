export const setStorageToken = (token) => {
    return window.localStorage.setItem('token', JSON.stringify(token))
}

export const getStorageToken = () => {
    return JSON.parse(window.localStorage.getItem('token'))
}

export const clearToken = () => {
    window.localStorage.removeItem('token');
}

// Si je suis un autre fichier

// import {setUser} from 'local-storage';
// import {getUser} from 'local-storage';
// import {clearUser} from 'local-storage';