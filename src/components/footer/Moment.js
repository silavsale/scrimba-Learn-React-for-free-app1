import React  from 'react';
import Moment from 'react-moment';

export default class MomentTime extends React.Component {
    render() {
        return (
            <Moment format='MMMM Do YYYY, h:mm:ss a'>{this.props.dateToFormat}</Moment>

        );
    }
}

