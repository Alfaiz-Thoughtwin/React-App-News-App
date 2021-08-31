import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

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
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=273c05648e1946a8b3fbbe667405a88d&page=1$pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData)
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
      });
  }

  handlePrevClick = async () => {
        console.log("Previous Page");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=273c05648e1946a8b3fbbe667405a88d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        });
  }

  handleNextClick = async () => {
        console.log("Next Page");
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
            alert("Page Has Ended!");
        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=273c05648e1946a8b3fbbe667405a88d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData)
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            });
        }
  }
  
  render() {
    return (
      <>
        <div className="container my-3">
            <h1 className="text-center">NewsMonkey - Top Headlines</h1>
            <hr className="my-4" />
            {this.state.loading && <Spinner/>}
            <div className="row">
                {!this.state.loading && this.state.articles.map((element)=>{
                        return <div className="col-md-4 col-sm-6" key={element.url}>
                            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                })}
            </div>
            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&laquo; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &raquo;</button>
            </div>
        </div>
      </>
    );
  }
}

export default News;
