import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Card, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  }, media: {
    height: 150
  }
})

export default function MicrobeCards() {
  const classes = useStyles()
  return(
    <div id="cards">
    <Card className={classes.root}>
      <CardActionArea >
        <CardMedia className={classes.media}
      image="https://images.unsplash.com/photo-1535127022272-dbe7ee35cf33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
      title="microbe1" />
      <CardContent>
        <Typography variant="h6" component="h3">
          Microbe 1
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.root}>
      <CardActionArea >
        <CardMedia className={classes.media}
      image="https://images.unsplash.com/photo-1535127022272-dbe7ee35cf33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
      title="microbe2" />
      <CardContent>
        <Typography variant="h6" component="h3">
          Microbe 2
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.root}>
      <CardActionArea >
        <CardMedia className={classes.media}
      image="https://images.unsplash.com/photo-1535127022272-dbe7ee35cf33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
      title="microbe3" />
      <CardContent>
        <Typography variant="h6" component="h3">
          Microbe 3
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.root}>
      <CardActionArea >
        <CardMedia className={classes.media}
      image="https://images.unsplash.com/photo-1535127022272-dbe7ee35cf33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
      title="microbe4" />
      <CardContent>
        <Typography variant="h6" component="h3">
          Microbe 4
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.root}>
      <CardActionArea >
        <CardMedia className={classes.media}
      image="https://images.unsplash.com/photo-1535127022272-dbe7ee35cf33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
      title="microbe5" />
      <CardContent>
        <Typography variant="h6" component="h3">
          Microbe 5
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}
