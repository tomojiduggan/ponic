import React from 'react'


class Circle extends React.Component{
    render(){
        return(
            <div className="circle-container">
                <a href={this.props.link} onClick={()=>{this.props.select(this.props.num)}} className="circle" id={this.props.num}>

                </a>
            </div>
        )
    }
}

export default Circle;