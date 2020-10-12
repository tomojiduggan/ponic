import React from 'react';
import Circle from './circle'
import './style/selector/selector.css'

const pages = ["intro", "explanation", "uses", 'conclusion']
let selected = 0

class Selector extends React.Component{
    select(num){
        for(let i=0;i<pages.length;i++){
            document.getElementById(String(i)).classList.remove("grow")
            document.getElementById(pages[i]+"-link").classList.remove("selected")
        }
        document.getElementById(String(num)).classList.add("grow")
        document.getElementById(pages[num]+"-link").classList.add("selected")
        selected = num
    }
    create(){
        const circles = pages.map((name, index) => 
        <Circle key={index} select={this.select} num={index} link={"#" + name}/>
        )
        return circles
    }
    resizer(){
        document.getElementById(pages[selected]).scrollIntoView();

    }
    componentDidMount(){
        this.select(0)
        window.addEventListener("resize", this.resizer)
    }
    render(){
        return(
            <div id="selector">
                <div id="tray"></div>
                {this.create()}
            </div>
        )
    }
}

export default Selector;