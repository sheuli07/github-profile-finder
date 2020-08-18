import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Button, Avatar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 200,
        minWidth: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
}));

export default function MediaCard(props) {
    const { username, avtar } = props;
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={4}>
            <Avatar src={avtar} className={classes.large}></Avatar>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {username}
                </Typography>
            </CardContent>
            <CardActions>
                <Link
                    to={{
                        pathname: "/details",
                        search: `user=${username}`,
                        // hash: "#the-hash",
                        state: { username: username },
                    }}
                >
                    <Button size="small" color="primary" variant="contained">
                        View Profile
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}
