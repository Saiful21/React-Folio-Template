import React, { Component } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import "../assets/css/Footer.css";


class Footer extends Component{
    state = {
        flogo:'Nfolio',
        furl: '!#',
        letTalk: "Let's Talk?",
        letChat: "Let's Chat",
        copy:'Copyright',
        by:'By',
        doman:'@nsstheme - 2020',
        menuItems : [
            {
                id:1,
                name:'Home',
                link:'!#'
            },
            {
                id:2,
                name:'About Me',
                link:'!#'
            },
            {
                id:3,
                name:'Service',
                link:'!#'
            },
            {
                id:4,
                name:'Project',
                link:'!#'
            },
            {
                id:5,
                name:'Testimonial',
                link:'!#'
            },
            {
                id:6,
                name:'Contact Me',
                link:'!#'
            },

        ]
    }    
    render(){
        return(
            <footer className="footer-main">
                <Container>
                    <Row>
                        <Col lg={2} sm={3}>
                            <div className="flogo">
                            <a href={this.state.furl}>{this.state.flogo}</a>
                            </div>
                        </Col>
                        <Col lg={8} sm={6}>
                            <div className="ftitle">
                                <h2>{this.state.letTalk}</h2>
                            </div>
                        </Col>
                        <Col lg={2} sm={3}>
                            <div className="fbutton">
                                <Button variant="contained">{this.state.letChat}</Button>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="fmenu">
                                <ul>
                                    {this.state.menuItems.map((menuItem) =>
                                        <li key={menuItem.id}>
                                            <a href={menuItem.link}>{menuItem.name}</a>
                                        </li>
                                    )}
                                </ul>
                                    <p>{this.state.copy} <span>{this.state.by} </span>{this.state.doman}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}
export default Footer;