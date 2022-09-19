import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export class News extends Component {
    // settinng info and the props 
    static defaultProps={
        pageSize:15,
        country:'in',
        category:'general'

    }
    static propTypes={
        pageSize: PropTypes.number,
    }
    //constructor called
    constructor(){
        super()
        this.state={
            articles:[],
            loading:false,
            page:1
        }  
    }
    

    //getting the data for the first time 
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=ae7e1f77e524418f976a9443e104f9b2&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url)
        let parsedData= await data.json()
        this.setState({articles:parsedData.articles , totalResults:parsedData.totalResults,loading:false})

    }

    handleNextClick= async ()=>{
        window.scroll(0, 0)
        if(!(this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=ae7e1f77e524418f976a9443e104f9b2&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url)
        let parsedData= await data.json()
        this.setState({
            page:this.state.page + 1,
            articles:parsedData.articles,
            loading:false
        })
    }
    }

    handlePrevClick=async ()=>{
        window.scroll(0, 0)
        let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=ae7e1f77e524418f976a9443e104f9b2&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url)
        let parsedData= await data.json()
        this.setState({
            page:this.state.page - 1,
            articles:parsedData.articles,
            loading:false
        })
        

    }

  render() {
    return (
      <div>
        <div className="container my-3">
            <h2 className='text-center'>Newsify - Top headlines</h2>
            <hr />
            {this.state.loading && <Spinner/>}
            <div className="row">
                
                {!this.state.loading && this.state.articles.map((element)=>{
                    return (
                        <div className="col-md-4 my-2" key={element.url}  style={{    display: "flex",
                    justifyContent: "center"}}>
                       <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                   </div>
                    
                    );
                })}
                
                
                
            </div>
            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>

        </div>
      </div>
    )
  }
}

export default News
