import React, { Component } from "react";
import moment from 'moment';

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <>
        <div className="card my-4" style={{ width: "18rem" }}>
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "90%", zIndex: "1"}}>
              {!source ? "Unknown" : source}
            </span>
          <img
            src={
              !imageUrl
                ? "https://fdn.gsmarena.com/imgroot/news/21/08/iphone-13-leo-satellite-connectivity-rumor/-476x249w4/gsmarena_00.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
            style={{ width: "280", height: "160px" }}
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}...
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By : {!author ? "Anonymous" : author}
                <br />
                {/* On : {new Date(date).toGMTString()} */}
                On : { moment(date).format('MMMM Do YYYY, h:mm:ss a') }
              </small>
            </p>
            <a
              href={newsUrl}
              className="btn btn-sm btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
