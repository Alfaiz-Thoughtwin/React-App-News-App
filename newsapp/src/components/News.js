import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor() {
    super();
    console.log("Hello i am a constructor from  News Component");
    this.state = {
        articles: [],
        loading: false,
        page:1
    };
  }

  async componentDidMount() {
      let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=273c05648e1946a8b3fbbe667405a88d&page=1$pageSize=20";
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData)
      this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });

  }

  handlePrevClick = async () => {
        console.log("Previous Page");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=273c05648e1946a8b3fbbe667405a88d&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        });

  }

  handleNextClick = async () => {
        console.log("Next Page");
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){
            alert("Page Has Ended!");
        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=273c05648e1946a8b3fbbe667405a88d&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData)
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            });
        }
  }
  

  render() {
    return (
      <>
        <div className="container my-3">
            <h1>NewsMonkey - Top Headlines</h1>
            <div className="row">
                {this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                })}
            </div>
            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&#8612; Previous</button>
            <button type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &#8614;</button>
            </div>
        </div>
      </>
    );
  }
}

export default News;
