import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <>
        <div className="container my-3">
            <h2>NewsMonkey - Top Headlines</h2>
            <div className="row">
                <div className="col-md-4">
                    <NewsItem title="myTitle1" description="myDescription1" />
                </div>
                <div className="col-md-4">
                    <NewsItem title="myTitle2" description="myDescription2" />
                </div>
                <div className="col-md-4">
                    <NewsItem title="myTitle3" description="myDescription3" />
                </div>
            </div>
        </div>
      </>
    );
  }
}

export default News;
