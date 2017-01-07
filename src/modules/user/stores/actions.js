import * as types from "./mutation-types"

export const addUser = ({ commit }, user) => {
    commit(types.USER_ADD, {
        user: user
    })
}

export const removeUser = ({ commit }, userId) => {
    commit(types.USER_REMOVE, {
        userId: userId
    })
}