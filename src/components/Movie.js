import React from 'react';

class Movie extends React.Component {
  render() {
    return (
      <div
        className={this.props.className}
        style={{
          position: "relative",
          height: 400,
          width: 267,
          boxShadow: "0 10px 30px rgba(0,0,0,.2)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundImage: `url(${this.props.image})`
        }}>
        {/*<p>{this.props.title}</p>*/}
        <p>{this.props.details}</p>
        <button
          onClick={this.props.onClickDetails}
          style={{
          bottom: 15,
          position: "absolute",
          color: "white",
          backgroundColor: "transparent",
          border: "3px solid white",
          width: 200,
          height: 40,
          borderRadius: 8,
          left: 38,
          fontSize: 23
        }}>
          {this.props.buttonLabel}
        </button>
      </div>

    )
  }
}
export default Movie;