import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import img from '../../src/images/loading_spinner.gif';

let Loading = ({ loading }) => (
    loading ?
        <div style={{ textAlign: 'center' }}>
            <img src={img} alt='loading' />
            <h1>LOADING</h1>
        </div> :
        null
);

Loading.propTypes = {
    loading: PropTypes.bool
};

const mapStateToProps = (state) => ({loading: state.loading});

Loading = connect(mapStateToProps,null)(Loading);

export default Loading;