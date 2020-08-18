import React from "react";
import { Grid, TextField, Container, Button, makeStyles, Typography } from "@material-ui/core";
import TopNav from "../component/appbar/topnav";
import { connect } from "react-redux";
import { userSearchList, setSearchUser, clearsearchUser } from "../redux/userSearch/userAction";
import SearchResultContainer from "./searchResultContainer";

const useStyles = makeStyles(() => ({
    textareaStyle: {
        marginTop: "2em",
    },
}));

function Home(props) {
    const classes = useStyles();

    return (
        <>
            <TopNav />
            <Container>
                <Grid container justify="center" className={classes.textareaStyle} spacing={2}>
                    <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                        <TextField
                            id="outlined-full-width"
                            placeholder="Search Users..."
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            value={props.user.searchUserValue}
                            onChange={(event) => props.setSerchUser(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={() => {
                                props.readUser(props.user.searchUserValue);
                            }}
                        >
                            Search
                        </Button>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                        <Button variant="contained" fullWidth onClick={() => props.clearsearchUser()}>
                            Clear
                        </Button>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                        <SearchResultContainer />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        readUser: (data) => dispatch(userSearchList(data)),
        setSerchUser: (value) => dispatch(setSearchUser(value)),
        clearsearchUser: () => dispatch(clearsearchUser()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
