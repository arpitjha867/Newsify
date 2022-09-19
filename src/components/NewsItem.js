import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title,description,imageUrl , newsUrl,author,date,source} =this.props
    // let dt=()=>{
    //   if(date){
    //   let dateString=new Date(date)
    //   dateString.toDateString()
    //   console.log(dateString)
      
    //   return dateString
    //   }else{
    //     return "unknown"
    //   }
    // }
    let newDate=new Date(date)
    let finalDateString=`${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`
    return (
      <div>
        
        <div className="card" style={{width: "400px"}}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{
          zIndex:"1",
          left:"90%"
        }}>
          {source}
        </span>
            <img src={imageUrl?imageUrl:"https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png"} className="card-img-top" alt="pictures"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {finalDateString}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary" >Read more</a>
            </div>
            </div>
            
      </div>
    )
  }
}

export default NewsItem
