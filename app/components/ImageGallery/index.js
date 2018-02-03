import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import styled from 'styled-components';

const svgWrap = styled.div`
  svg {
    fill: white !important;
  }
`;

class ImageGallery extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    const photos = this.props.photos;

    const photoSet = photos.map((value, index) => {
      if (photos[index]) {
        return { src: photos[index].image, width: photos[index].width, height: photos[index].height };
      }
      return undefined;
    });

    const photoSetThumbs = photos.map((value, index) => {
      if (photos[index]) {
        return { src: photos[index].thumb, width: photos[index].width, height: photos[index].height };
      }
      return undefined;
    });

    const photoSetArray = photoSet.filter((element) => element !== undefined);
    const photoSetAlbumArray = photoSetThumbs.filter((element) => element !== undefined);

    return (
      <div>
        <svgWrap>
          <Gallery photos={photoSetAlbumArray} onClick={this.openLightbox} />
          <Lightbox
            images={photoSetArray}
            backdropClosesModal
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
          />
        </svgWrap>
      </div>
    );
  }
}

export default ImageGallery;
