import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    country : "in",
    pageSize : 8,
    category : "general"
  }

  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    console.log("Hello i am a constructor from  News Component");
    this.state = {
        articles: [],
        loading: true,
        page:1
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }
  

  async componentDidMount() {
      this.props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      this.props.setProgress(30);
      let parsedData = await data.json();
      this.props.setProgress(70);
      console.log(parsedData)
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
      });
      this.props.setProgress(100);
  }

  // handlePrevClick = async () => {
  //       console.log("Previous Page");
  //       let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=273c05648e1946a8b3fbbe667405a88d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  //       this.setState({loading: true});
  //       let data = await fetch(url);
  //       let parsedData = await data.json();
  //       console.log(parsedData)
  //       this.setState({
  //           page: this.state.page - 1,
  //           articles: parsedData.articles,
  //           loading: false
  //       });
  // }

  // handleNextClick = async () => {
  //       console.log("Next Page");
  //       if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
  //           alert("Page Has Ended!");
  //       }
  //       else {
  //           let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=273c05648e1946a8b3fbbe667405a88d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  //           this.setState({loading: true});
  //           let data = await fetch(url);
  //           let parsedData = await data.json();
  //           console.log(parsedData)
  //           this.setState({
  //               page: this.state.page + 1,
  //               articles: parsedData.articles,
  //               loading: false
  //           });
  //       }
  // }

  fetchMoreData = async () => {
        this.setState({page: this.state.page + 1});
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({
          articles: this.state.articles.concat(parsedData.articles),
          totalResults: parsedData.totalResults
        });
  };
  
  render() {
    return (
      <>
            <h1 className="text-center">NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
            <hr className="my-4" />
            {/* {this.state.loading && <Spinner/>} */}
            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length !== this.state.totalResults}
              loader={<Spinner/>}
            >
              <div className="container">
                  <div className="row">
                      {this.state.articles.map((element)=>{
                              return <div className="col-md-4 col-sm-6" key={element.url}>
                                  <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source["name"]}/>
                              </div>
                      })}
                  </div>
              </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&laquo; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &raquo;</button>
            </div> */}
      </>
    );
  }
}

export default News;
