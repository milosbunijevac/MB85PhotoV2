import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';

const styles = (theme) => ({
  progress: {
    margin: `0 ${theme.spacing.unit * 2}px`,
  },
});

const CircularIndeterminate = (props) => {
  const { classes } = props;
  return (
    <div>
      <CircularProgress className={classes.progress} size={100} color="primary" />

    </div>
  );
};

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIndeterminate);
