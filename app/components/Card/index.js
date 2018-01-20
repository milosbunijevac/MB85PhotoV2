import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  content: {
    minHeight: 150,
  },
};

function CardModel(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.prevImage}
          title={props.modelName}
        />
        <CardContent className={classes.content}>
          <Typography type="headline" component="h2">
            {props.modelName}
          </Typography>
          <Typography component="p">
            {props.modelDetail}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default withStyles(styles)(CardModel);
