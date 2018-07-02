import React from 'react';
import {connect} from 'react-redux';

export class EventLog extends React.Component {
  render() {
    const displayMessages = this.props.currentMessages.map((message, index) => {
      return (<p key={index}>{message}</p>);
      }
    );
    return (
      <section className="menu event-log css-typing">
        {displayMessages}
      </section>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    currentMessages: state.game.currentMessages
  };
};

export default connect(mapStateToProps)(EventLog);
