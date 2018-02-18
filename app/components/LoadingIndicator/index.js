import React from 'react';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import PropTypes from 'prop-types';

const styles = (theme) => ({
  progress: {
    margin: `0 ${theme.spacing.unit * 2}px`,
  },
});

const LoadingIndicator = (props) => {
  const { classes } = props;
  return (
    <div>

      <CircularProgress className={classes.progress} color="primary" size={50} />

    </div>
  );
};

LoadingIndicator.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(LoadingIndicator);
