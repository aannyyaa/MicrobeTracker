import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 200,
    width: 400,
  },
});

export default function HomePageCards() {
  const classes = useStyles();
  return (
    <div id="homePageCards">
      <div className="homePageCard">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1603872984950-be19c2c26dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
              title="homepage1"
            />
            <CardContent>
              <Typography variant="h6" component="h3">
                About MicrobeTrackerJS
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Learn about the microbes in your environment -- search by
                borough or specific location in NYC.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div className="homePageCard">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1603872984950-be19c2c26dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
              title="homepage2"
            />
            <CardContent>
              <Typography variant="h6" component="h3">
                Website Information
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                This website uses React, Mapbox GL, Victory, and Material-UI.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div className="homePageCard">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1603872984950-be19c2c26dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
              title="homepage3"
            />
            <CardContent>
              <Typography variant="h6" component="h3">
                Next Steps
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Introduce more data visualization and expand to other locations.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div className="homePageCard">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1603872984950-be19c2c26dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
              title="homepage3"
            />
            <CardContent>
              <Typography variant="h6" component="h3">
                More Information 1
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua..
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div className="homePageCard">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1603872984950-be19c2c26dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
              title="homepage3"
            />
            <CardContent>
              <Typography variant="h6" component="h3">
                More Information 2
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua..
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div className="homePageCard">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1603872984950-be19c2c26dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
              title="homepage3"
            />
            <CardContent>
              <Typography variant="h6" component="h3">
                More Information 3
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua..
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
