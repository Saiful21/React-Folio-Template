import React,{Component} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container,Navbar,Nav } from 'react-bootstrap';
import Menu from './Menu';
import { Button } from '@material-ui/core';
import "../assets/css/Header.css";

class Header extends Component{
     constructor(props){
        super(props);
        this.state = {
            logo : 'NFolio',
            quote : 'Hire Me'
        }
     }
    //update scrolling element
    componentDidMount(){
        var selDom = document.getElementById("head_top");
        function addTo_class(){
            selDom.classList.add("active");
        }  
        function remvTo_class(){
            selDom.classList.remove("active");
        }
        window.addEventListener('scroll',function(){
            var scrollpos = window.scrollY;  
            if(scrollpos > 20){
                addTo_class();
            }
            else {
                remvTo_class();
            }    
        });        
    }
    //render
    render(){
        return(
            <div id="header">
                <header id="head_top" className="bg-light fixed-top">
                    <Container>
                        <Navbar expand="lg">
                        <AnchorLink className="navbar-brand" href="#header">{this.state.logo}</AnchorLink>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />  
                            <Navbar.Collapse id="basic-navbar-nav">  
                                <Nav className="mr-auto">
                                    <Menu/>                               
                                </Nav> 
                                <Button variant="contained">
                                    <a className="quote" href="!#">{this.state.quote}</a>
                                </Button>
                            </Navbar.Collapse>
                        </Navbar>                    
                    </Container>
                </header>
            </div>
        )
    }
}
export default Header;