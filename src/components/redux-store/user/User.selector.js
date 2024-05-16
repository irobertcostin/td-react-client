import { createSelector } from '@reduxjs/toolkit';


const selectUserState = (state) => state.userState;

export const selectUser = createSelector(
    selectUserState,
    userState => userState.user
);


export const selectToken = createSelector(
    selectUserState,
    userState => userState.token
);


export const selectUserStatus = createSelector(
    selectUserState,
    userState => userState.status
);
