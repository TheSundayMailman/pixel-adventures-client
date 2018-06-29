import React from 'react';
import {connect} from 'react-redux';

export class EventLog extends React.Component {
  render() {
    const displayMessages = this.props.currentMessages.map((each, index) => {
      return (<p key={index}>{each}</p>);
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
