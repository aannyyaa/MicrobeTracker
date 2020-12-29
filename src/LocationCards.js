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
    maxWidth: 300,
  },
  media: {
    height: 150,
  },
});

export default function LocationCards() {
  const classes = useStyles();
  return (
    <div id="cards">
      <div className="card">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1518355077561-4af7abce973d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
              title="location1"
            />
            <CardContent>
              <Typography variant="h6" component="h3">
                Location 1
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div className="card">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1518355077561-4af7abce973d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
              title="location2"
            />
            <CardContent>
              <Typography variant="h6" component="h3">
                Location 2
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div className="card">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1518355077561-4af7abce973d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
              title="location3"
            />
            <CardContent>
              <Typography variant="h6" component="h3">
                Location 3
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div className="card">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1518355077561-4af7abce973d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
              title="location4"
            />
            <CardContent>
              <Typography variant="h6" component="h3">
                Location 4
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div className="card">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1518355077561-4af7abce973d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
              title="location5"
            />
            <CardContent>
              <Typography variant="h6" component="h3">
                Location 5
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
