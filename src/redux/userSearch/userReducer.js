import {
    USER_SEARCH_SUCCESS,
    USER_PROFILE_SUCCESS,
    USER_REPO_SEARCH_SUCCESS,
    SEARCH_USER_VALUE_CHANGE,
    SEARCH_USER_VALUE_CLEAR,
} from "./actionType";

const initialState = {
    singleUser: {},
    userRepoList: [],
    searchUserValue: "",
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SEARCH_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        case USER_PROFILE_SUCCESS:
            return {
                ...state,
                singleUser: { ...action.payload },
            };
        case USER_REPO_SEARCH_SUCCESS:
            return {
                ...state,
                userRepoList: [...action.payload],
            };
        case SEARCH_USER_VALUE_CHANGE:
            return {
                ...state,
                searchUserValue: action.payload,
            };
        case SEARCH_USER_VALUE_CLEAR:
            return {
                ...initialState,
            };
        default:
            return state;
    }
};
