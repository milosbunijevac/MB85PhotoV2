import React from 'react';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';

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

const CardModel = (props) => {
  const { classes } = props;
  return (
    <div>
      <Link to={props.to} style={{ textDecoration: 'none' }}>
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
      </Link>
    </div>
  );
};

CardModel.propTypes = {
  classes: PropTypes.object,
  modelName: PropTypes.string,
  modelDetail: PropTypes.string,
  to: PropTypes.string,
  prevImage: PropTypes.string,
};

export default withStyles(styles)(CardModel);
