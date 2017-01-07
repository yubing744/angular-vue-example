import * as types from "./mutation-types"

module.exports[types.USER_ADD] = function(state, { user }) {
    state.users.push(user);
}

module.exports[types.USER_REMOVE] = function(state, { userId }) {
    state.users = state.users.filter(user => user.id != userId);
}

