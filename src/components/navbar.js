import React from 'react'
import "./style/navbar/navbar.css"

const pages = ["intro", "explanation", "uses", "conclusion"]

class Navbar extends React.Component{
    capitalize(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    click(num){
        for(let i=0;i<pages.length;i++){
            document.getElementById(String(i)).classList.remove("grow")
            document.getElementById(pages[i]+"-link").classList.remove("selected")
        }
        document.getElementById(String(num)).classList.add("grow")
        document.getElementById(pages[num]+"-link").classList.add("selected")
        this.number = num
    }
    create(){
        const links = pages.map((name, index)=>
    <a id={name+"-link"} href={"#" + name} className="nav-link" key={index} onClick={() => this.click(index)}>{this.capitalize(name)}</a>
        )
        return links
    }
    componentDidMount(){

    }

    render(){
        return(
            <div className="navbar">
                {this.create()}
                
            </div>
        )
    }
}

export default Navbar