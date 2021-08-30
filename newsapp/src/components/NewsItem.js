import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <>
                <div className="card my-4" style={{width: '18rem'}}>
                    <img src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/iphone-13-leo-satellite-connectivity-rumor/-476x249w4/gsmarena_00.jpg":imageUrl} className="card-img-top" alt="..." style={{width: '286px', height: '160px'}}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} className="btn btn-sm btn-primary" target="_blank" rel="noreferrer">Read More</a>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
