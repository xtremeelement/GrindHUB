import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    height: "120%"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: "#172231",
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <NotificationsIcon/>
          </Avatar>
        }
       
        title="Meeting Tomorrow"
        subheader="March 13, 2020"
      />
      <CardMedia
      style={{height:"25%"}}
        className={classes.media}
        image="https://images-na.ssl-images-amazon.com/images/I/51wcC4o1n6L._AC_SX425_.jpg"
        title="Meeting"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          All memebers of management are required to attend the team meeting tomorrow at 5:00 PM in room 203. 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">

        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
         
        </IconButton>
      </CardActions>
    </Card>
  );
}
