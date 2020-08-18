import axios from "axios";

export const userSearchService = {
    userList: (name) => {
        return axios.get("https://api.github.com/search/users", {
            params: {
                q: name,
            },
        });
    },

    userDetails: (name) => {
        return axios.get(`https://api.github.com/users/${name}`);
    },

    userRepoList: (name) => {
        return axios.get(`https://api.github.com/users/${name}/repos`);
    },
};
