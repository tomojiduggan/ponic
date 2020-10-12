import React from 'react'
import './style/page/page.css'
import aquaImg from '../img/aquaponic.jpg'
import scemeImg from "../img/aquaponics.png"
import Graph from './graph'

var bool = false
const text_data = ["children", "workers", "elderly", "everywone!"]

class Page extends React.Component{
    typeWriter(text, i, fnCallback) {
        var self = this
        if (i < text.length) {
         document.getElementById("typetext").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
    
          setTimeout(function() {
            self.typeWriter(text, i + 1, fnCallback)
          }, 100);
        }
        else if (typeof fnCallback == 'function') {
          setTimeout(fnCallback, 800);
        }
      }
       StartTextAnimation(i) {
           var self = this
         if (typeof text_data[i] == 'undefined'){
            setTimeout(function() {
              self.StartTextAnimation(0);
              return;
            }, 4000);
         }
         else if (i < text_data.length) {
         this.typeWriter(text_data[i], 0, function(){
           self.StartTextAnimation(i + 1);
         });
        }
      }
    componentDidMount(){
      
        if(bool === false){
          bool = true
          this.StartTextAnimation(0)
        }
    }
    render(){
      if(this.props.name==="intro"){
          return(
            <div className="page" id={this.props.name}>
                <div>               

                    <h1 id="title">More food<br/>for&nbsp;<span id="typetext"> </span></h1>

                </div>
            </div>
        )
      }
      else if(this.props.name==="explanation"){
        return(
          <div className="page" id={this.props.name}>
            <Graph></Graph>
          </div>
        )
      }
      else if(this.props.name==="uses"){
        return(
          <div className="page" id={this.props.name}>

          </div>
        )
      }
      else if(this.props.name==="conclusion"){
        return(
          <div className="page" id={this.props.name}>

          </div>
        )
      }

    }
}

export default Page; 