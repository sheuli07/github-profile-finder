import {
    USER_SEARCH_REQUEST,
    USER_SEARCH_SUCCESS,
    USER_SEARCH_FAILED,
    USER_PROFILE_REQUEST,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_FAILED,
    USER_REPO_SEARCH_REQUEST,
    USER_REPO_SEARCH_SUCCESS,
    USER_REPO_SEARCH_FAILED,
    SEARCH_USER_VALUE_CHANGE,
    SEARCH_USER_VALUE_CLEAR,
} from "./actionType";
import { userSearchService } from "../../services/userSearchService";

// Action for User Search
const userSearchRequest = () => ({
    type: USER_SEARCH_REQUEST,
});

const userSearchSuccess = (data) => ({
    type: USER_SEARCH_SUCCESS,
    payload: data,
});

const userSearchFailed = () => ({
    type: USER_SEARCH_FAILED,
});

export const userSearchList = (data) => {
    return (dispatch) => {
        dispatch(userSearchRequest());

        userSearchService
            .userList(data)
            .then((res) => {
                // console.log(res);
                dispatch(userSearchSuccess(res.data));
            })

            .catch((err) => {
                console.log(err);
                dispatch(userSearchFailed());
            });
    };
};

//Action for user profile details

const profileRequest = () => ({
    type: USER_PROFILE_REQUEST,
});

const profileSuccess = (data) => ({
    type: USER_PROFILE_SUCCESS,
    payload: data,
});

const profileFailed = () => ({
    type: USER_PROFILE_FAILED,
});

export const readProfile = (data) => {
    return (dispatch) => {
        dispatch(profileRequest());

        userSearchService
            .userDetails(data)
            .then((res) => {
                // console.log("inside readprofile call data");
                // console.log(res);
                dispatch(profileSuccess(res.data));
            })
            .catch((err) => {
                console.log(err);
                dispatch(profileFailed());
            });
    };
};

//Action for user project list

const repoSearchRequest = () => ({
    type: USER_REPO_SEARCH_REQUEST,
});

const repoSerchSuccess = (data) => ({
    type: USER_REPO_SEARCH_SUCCESS,
    payload: data,
});

const repoSearchFailed = () => ({
    type: USER_REPO_SEARCH_FAILED,
});

export const userRepoList = (data) => {
    return (dispatch) => {
        dispatch(repoSearchRequest());

        userSearchService
            .userRepoList(data)
            .then((res) => {
                dispatch(repoSerchSuccess(res.data));
            })
            .catch((error) => {
                console.log(error);
                dispatch(repoSearchFailed());
            });
    };
};

export const setSearchUser = (value) => {
    return {
        type: SEARCH_USER_VALUE_CHANGE,
        payload: value,
    };
};

export const clearsearchUser = () => {
    return {
        type: SEARCH_USER_VALUE_CLEAR,
    };
};
