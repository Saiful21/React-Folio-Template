import React,{Component} from 'react';
import { Button } from '@material-ui/core';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "../assets/css/Header-content.css";

function Headcontent(props){
    return(
        <div className={props.className}>
            {props.children}
        </div>
    )
}
class HeaderContent extends Component{
    render(){        
        return(
            <section className="header-content-details">
                <Headcontent className="content-details-inner">
                    <h3>Hello There!</h3>
                    <h1>I'm Tony Smith</h1>
                    <Button >Web Developer</Button>
                    <Button >Application Developer</Button>
                    <Button >Frontend Developer</Button>
                </Headcontent>
                <div className="search-page-down">
                    <AnchorLink href="#aboutme"><ExpandMoreIcon/></AnchorLink>
                </div>
            </section>   
        )
    }
}
export default HeaderContent;