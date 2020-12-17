import React, {Component} from 'react';
import {ActivityIndicator, Modal, StyleSheet} from 'react-native';
import {PRIMARY} from '../../theme/colors';

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaderState: false,
    };
  }

  updateStatus = (status) => {
    this.setState({loaderState: status});
  };

  render() {
    const {loaderState} = this.state;
    return loaderState ? (
      <Modal visible={loaderState} transparent>
        <ActivityIndicator style={styles.loader} size="large" color={PRIMARY} />
      </Modal>
    ) : null;
  }
}

export default Loader;

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
