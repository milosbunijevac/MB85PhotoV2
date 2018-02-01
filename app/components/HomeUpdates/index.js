import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = (theme) => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

function PaperSheet(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography type="headline" component="h3">
          {props.headline}
        </Typography>
        <Typography component="h6">
          {props.date}
        </Typography>
        <Typography component="p">
          {props.story}
        </Typography>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(PaperSheet);
