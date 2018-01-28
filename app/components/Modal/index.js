import React from 'react';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';
import styled from 'styled-components';

function rand() {
  return Math.floor(Math.random() * 20) - 10;
}

const Wrapper = styled.div`
  position: fixed; 
  top: -50%; 
  left: -50%; 
  width: 200%; 
  height: 200%;
  img {
  position: absolute; 
  top: 0; 
  left: 0; 
  right: 0; 
  bottom: 0; 
  margin: auto; 
  min-width: 50%;
  min-height: 50%;
}
`;

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    position: 'absolute',
    width: 8 * 50,
    top: 100,
    left: 100,
    transform: `translate(-${top}%, -${left}%)`,
    border: '1px solid #e5e5e5',
    backgroundColor: '#fff',
    boxShadow: '0 5px 15px rgba(0, 0, 0, .5)',
    padding: 8 * 4,
  };
}

class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleOpen}><img src={this.props.thumb} /></Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <Wrapper>
            <img src={this.props.image} />
          </Wrapper>
        </Modal>
      </div>
    );
  }
}

export default SimpleModal;
