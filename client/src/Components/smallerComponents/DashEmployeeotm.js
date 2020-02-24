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
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    height: "125%"
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

//this is the employee of the month card for the user dash

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
            <EmojiEmotionsIcon/>
          </Avatar>
        }
       
        title="Employee of the Month!"
        subheader="February 14, 2020"
      />
      <CardMedia style={{height:"30%"}}
        className={classes.media}
        image="https://www.4ccf.org/wp-content/uploads/2016/07/employee-1.png"
        title="Chad"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          March's Employee of the month is Chad Smith! Congratulations, Chad! Keep up the good work!
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
