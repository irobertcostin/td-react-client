import { createSlice } from "@reduxjs/toolkit";

export const statuses = {
    SIGNED_IN: "signed_in",
    SIGNED_OUT: "signed_out",
    LOADING_SIGN_IN: 'loading_sign_in',
    LOADING_SIGN_OUT: 'loading_sign_out',
    NOT_LOADING: 'not_loading',
    TOKEN_EXP: "token_expired"
};

const userInitialState = {
    user: null,
    token: null,
    status: statuses.SIGNED_OUT
};

const resetUserState = (state) => {
    state.user = null;
    state.token = null;
    state.status = statuses.SIGNED_OUT;
};


const userSlice = createSlice({
    name: "user",
    initialState: userInitialState,
    reducers: {
        signedIn(state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.status = statuses.SIGNED_IN;
        },
        signedOut(state) {
            state.user = null;
            state.token = null;
            state.status = statuses.SIGNED_OUT;
        },
        notLoading(state) {
            state.status = statuses.NOT_LOADING
        }
        ,
        loadingSignIn(state) {
            state.status = statuses.LOADING_SIGN_IN
        },
        loadingSignOut(state) {
            state.status = statuses.LOADING_SIGN_OUT
        },
        tokenExpired(state) {
            state.status = statuses.TOKEN_EXP
        },
        resetState(state) {
            resetUserState(state);
        }



    }
});

export const { signedIn, signedOut, loadingSignIn, loadingSignOut, tokenExpired, resetState } = userSlice.actions;

export default userSlice.reducer;
