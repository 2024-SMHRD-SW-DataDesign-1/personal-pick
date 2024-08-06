import * as types from './types'

export const login =() => ({
    type : types.LOGIN,
    data : 10
})

export const logout =() => ({
    type : types.LOGOUT
})