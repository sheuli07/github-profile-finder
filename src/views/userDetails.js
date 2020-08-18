import React, { useEffect } from "react";
import { Grid, Typography, Container, makeStyles, Avatar, Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Chip from "@material-ui/core/Chip";
import { connect } from "react-redux";
import { readProfile, userRepoList } from "../redux/userSearch/userAction";
import { Link } from "react-router-dom";
import TopNav from "../component/appbar/topnav";

const useStyles = makeStyles((theme) => ({
    marginStyle: {
        marginTop: "2em",
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: "1em",
    },
    gridStyle: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    buttonStyle: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    paperStyle: {
        padding: "1em",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        overflowX: "auto",
        "& > *": {
            margin: "0em 1em",
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignItems: "center",
            "& > *": {
                margin: "1em 0em ",
            },
        },
    },
    successChip: {
        backgroundColor: theme.palette.success.main,
    },
    warningChip: {
        backgroundColor: theme.palette.warning.main,
    },
}));

function UserDetails(props) {
    const classes = useStyles();

    useEffect(() => {
        props.readuser(props.location.state.username);
    }, []);

    useEffect(() => {
        props.readUserRepoList(props.location.state.username);
    }, []);

    return (
        <>
            <TopNav />
            <Container>
                <Grid container justify="center" className={classes.marginStyle} spacing={2}>
                    <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                        <Link to={{ pathname: "/home" }}>
                            <Button variant="contained">Back To Search</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                        <Paper variant="outlined" className={classes.paperStyle}>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.gridStyle}>
                                    <Avatar className={classes.large} src={props.userDetails.singleUser.avatar_url}></Avatar>
                                    <Typography variant="h6">{props.userDetails.singleUser.name || "NA"}</Typography>
                                    <Typography>Location: {props.userDetails.singleUser.location || "Somewhere"}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.buttonStyle}>
                                    <a href={props.userDetails.singleUser.html_url} target="_blank">
                                        <Button variant="contained" color="primary">
                                            View Github Profile
                                        </Button>
                                    </a>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                        <Paper variant="outlined" className={classes.paperStyle}>
                            <Chip label={`Followers:${props.userDetails.singleUser.followers}`} color="primary" />
                            <Chip label={`Following:${props.userDetails.singleUser.following}`} color="secondary" />
                            <Chip
                                label={`Public Repos:${props.userDetails.singleUser.public_repos}`}
                                className={classes.successChip}
                            />
                            <Chip
                                label={`Public Gists:${props.userDetails.singleUser.public_gists}`}
                                className={classes.warningChip}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                        <List>
                            {props.userDetails.userRepoList.map((items) => {
                                return (
                                    <Paper key={items.id}>
                                        <ListItem>
                                            <a href={items.html_url} target="_blank">
                                                <ListItemText>{items.name}</ListItemText>
                                            </a>
                                        </ListItem>
                                    </Paper>
                                );
                            })}
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        userDetails: state.user,
        // Alternative way of writing
        //userDetails: state.user.singleUser,
        //userRepos : state.user.userRepoList
        // ...state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        readuser: (data) => dispatch(readProfile(data)),
        readUserRepoList: (data) => dispatch(userRepoList(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
