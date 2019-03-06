import React from 'react';
import { connect } from 'react-redux';
import { fetchTrack } from '../actions';
import './TrackDetail.css';

class TrackDetail extends React.Component {
  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.id);
  }
  render() {
    if (!this.props.track) {
      return <div>Loading...</div>;
    }

    const {
      circuit,
      image,
      firstGp,
      laps,
      length,
      distance,
      record,
      driver,
      firstParagraph,
      secondParagraph,
      thirdParagraph,
      fourthParagraph,
      fifthParagraph
    } = this.props.track;

    return (
      <div className="track-detail">
        <h2 className="ui header">{circuit}</h2>
        <div className="ui stackable grid container">
          <div className="ten wide column">
            <img className="ui fluid image" src={image} alt="track" />
          </div>
          <div className="six wide column">
            <div className="ui celled list big-font">
              <div className="item">
                <div className="right floated content">
                  <div className="header">{firstGp}</div>
                </div>
                <div className="content">First Grand Prix:</div>
              </div>
              <div className="item">
                <div className="right floated content">
                  <div className="header">{laps}</div>
                </div>
                <div className="content">Number of Laps</div>
              </div>
              <div className="item">
                <div className="right floated content">
                  <div className="header">{length} km</div>
                </div>
                <div className="content">Circuit Length:</div>
              </div>
              <div className="item">
                <div className="right floated content">
                  <div className="header">{distance} km</div>
                </div>
                <div className="content">Race Distance:</div>
              </div>
              <div className="item">
                <div className="right floated content text-right">
                  <div className="header">{record}</div>
                  <div className="small-font">{driver}</div>
                </div>
                <div className="content">Lap Record:</div>
              </div>
            </div>
          </div>
        </div>

        <div className="ui raised very padded segment">
          <h3 className="ui header">When was the track built?</h3>
          <p>{firstParagraph}</p>
          <h3 className="ui header">When was its first Grand Prix?</h3>
          <p>{secondParagraph}</p>
          <h3 className="ui header">What's the circuit like?</h3>
          <p>{thirdParagraph}</p>
          <h3 className="ui header">Why go?</h3>
          <p>{fourthParagraph}</p>
          <h3 className="ui header">Where is the best place to watch?</h3>
          <p>{fifthParagraph}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { track: state.tracks[ownProps.match.params.id] };
};
export default connect(
  mapStateToProps,
  { fetchTrack }
)(TrackDetail);
