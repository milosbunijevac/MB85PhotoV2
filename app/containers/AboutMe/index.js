import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import actionCreators from '../NavBar/actions';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { withStyles } from 'material-ui/styles';

const styles = (theme) => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    routeValue: (val) => actionCreators.getRoute(val),
  }, dispatch);
}

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.routeValue(3);
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={4}>
        <Typography type="display1" align="center" component="h1">
            Engineer, Photographer, Over-thinker
          </Typography>
        <Typography component="section">
          <section>
            I'd like to thank everyone for visiting my website and seeing both my web design work as well as my photography skillset. I've had the priviledge of working
            with some of the best models across the country and I'm always grateful for that. When I got into this game, my first thought was that I'd do a few shoots
            and then perhaps work for a larger photography company. After getting a taste of working with people 1 on 1, I fell in love with working with people and wanted to continue down this path.
          </section>
          <br />
          <section>
            My first camera was a Canon Rebel T3 that I bought at BestBuy right before my trip to San Francisco in 2013. It went from a fleeting purchase to being one of the biggest
            purchases of my life, no exagerration! My three days in SF made me realize the camera was meant to be something I need by my side at all times. I took it to New York City with me and
            it helped launch my photography career. It lasted for about 2 and a half years until a shoot at the beach with Deanna where sand got into the lens. To it's credit, the camera
            was still able to finish the shoot without auto focus and deliver the photos. I moved to the 70D and kept the T3 to remind me of where it all began.
          </section>
          <br />
          <section>
            My social media links are at the bottom of the page, but I want you to feel comfortable contacting me at MB85Photography@gmail.com if there's something you want to see more of or discuss further!
          </section>
        </Typography>
      </Paper>
    );
  }
}

export default compose(
  withStyles(styles),
  connect(null, mapDispatchToProps),
)(AboutMe);
