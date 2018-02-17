import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchPosts } from './actions';


import actionCreators from '../NavBar/actions';

import ImageGallery from '../../components/ImageGallery';
import Progress from '../../components/DetProgress';

const mapStateToProps = (state) => ({
  landscapeValue: state.get('landscapePage').get('landscapeInfo'),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getNewPosts: fetchPosts,
  routeValue: (val) => actionCreators.getRoute(val),
}, dispatch);

// const Wrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-gap: 20px;
//   justify-items: center;
//   align-items: center;
//   img {
//     max-width: 100%;
//     justify-items: center;
//     align-items: center;
//   }
// `;

class LandscapePage extends React.Component {

  componentDidMount() {
    this.props.getNewPosts(null, 'landscape', `${this.props.match.params.landscape}`);
    this.props.routeValue(2);
  }

  render() {
    if (this.props.landscapeValue) {
      const landscapeList = [];
      _.forEach(this.props.landscapeValue.data, (value) => {
        if (value.Thumb) {
          if (value.dimensions) {
            landscapeList.push({ thumb: value.Thumb.url, image: value.url, height: value.dimensions.height, width: value.dimensions.width });
          }
        }
      });

      return (
        <div>
          <ImageGallery photos={landscapeList} />
        </div>
      );
    }
    return (
      <div>
        <Progress />
      </div>
    );
  }
}

LandscapePage.propTypes = {
  getNewPosts: PropTypes.func,
  match: PropTypes.object,
  routeValue: PropTypes.func,
  landscapeValue: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandscapePage);
