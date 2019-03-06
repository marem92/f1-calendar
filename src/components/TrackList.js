import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTracks } from '../actions/index';
import './TrackList.css';

class TrackList extends React.Component {
  componentDidMount() {
    this.props.fetchTracks();
  }

  renderList() {
    return this.props.tracks.map(track => {
      return (
        <div className="item big-font" key={track.id}>
          <div className="right floated content">{track.date}</div>
          <img
            className="ui avatar image"
            src={track.image}
            alt="track"
            style={{ width: '3em' }}
          />
          <div className="content">
            <Link className="black-text" to={`/tracks/${track.id}`}>
              {track.id}
            </Link>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui middle aligned divided list">{this.renderList()}</div>
    );
  }
}

const mapStateToProps = state => {
  return { tracks: Object.values(state.tracks) };
};

export default connect(
  mapStateToProps,
  { fetchTracks }
)(TrackList);
