import React from "react";
import Card from "../component/card/card";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

function SearchResultContainer(props) {
    return (
        <Grid container spacing={5} justify="center">
            {props.userSearch.items &&
                props.userSearch.items.map((items) => {
                    return (
                        <Grid item key={items.id}>
                            <Card username={items.login} avtar={items.avatar_url} />
                        </Grid>
                    );
                })}
        </Grid>
    );
}

const mapStateToProps = (state) => {
    return {
        userSearch: state.user,
    };
};

export default connect(mapStateToProps)(SearchResultContainer);
