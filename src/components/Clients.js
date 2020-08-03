import React, { Component } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import Isotope from 'isotope-layout';
import client from '../assets/image/clients/1.jpg';
import client1 from '../assets/image/clients/2.jpg';
import client2 from '../assets/image/clients/3.jpg';
import client3 from '../assets/image/clients/4.jpg';
import client4 from '../assets/image/clients/5.jpg';
import client5 from '../assets/image/clients/6.jpg';
import "../assets/css/Clients.css";

class Clients extends Component{
    constructor(props) {
        super(props);
        this.onFilterChange = this.onFilterChange.bind(this);
        this.state = {
            cliTitle: 'Our Honorable',
            cliHigh:'Clients',
            clisubTitle:'A Lead UX & UI designer based in California',
        }
    }
    // Click Function
    onFilterChange = (newFilter) => {
        if (this.iso === undefined) 
        {
            this.iso = new Isotope('#filter-container', {
                itemSelector: '.filter-item',
                layoutMode: "fitRows"
            });
        }
        if(newFilter === '*') 
        {
            this.iso.arrange({ filter: `*` });
        } 
        else
        {
            this.iso.arrange({ filter: `.${newFilter}` });
        }
    }
    render(){
        return(
            <section id="client" className="our-clients">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="our-client-top">
                                <h2>{this.state.cliTitle} <span>{this.state.cliHigh}</span></h2>
                                <h5>{this.state.clisubTitle}</h5>
                            </div>
                        </Col>    
                            <div className="clients-filter-area">
                                <ul>
                                    <li data-filter="*" onClick={() => {this.onFilterChange("*")}}><Button variant="outlined" color="primary">All</Button></li>
                                    <li data-filter="filter-one" onClick={() => {this.onFilterChange("filter-one")}}><Button variant="outlined">WorldWide</Button></li>
                                    <li data-filter="filter-two" onClick={() => {this.onFilterChange("filter-two")}}><Button variant="outlined">California</Button></li>
                                    <li data-filter="filter-three" onClick={() => {this.onFilterChange("filter-three")}}><Button variant="outlined">Austria</Button></li>
                                    <li data-filter="filter-four" onClick={() => {this.onFilterChange("filter-four")}}><Button variant="outlined">Belgium</Button></li>
                                    <li data-filter="filter-five" onClick={() => {this.onFilterChange("filter-five")}}><Button variant="outlined">Netherland</Button></li>
                                </ul>
                                <div id="filter-container">                                    
                                    <div className='filter-item filter-one'>
                                        <img src={client} alt="placeholder"/>
                                    </div>                                     
                                    <div className='filter-item filter-one'>
                                        <img src={client1} alt="placeholder"/>
                                    </div>                                    
                                    <div className='filter-item filter-one'>
                                        <img src={client2} alt="placeholder"/>
                                    </div>                                    
                                    <div className='filter-item filter-two'>
                                        <img src={client3} alt="placeholder"/>                                        
                                    </div>                      
                                    <div className='filter-item filter-two'>
                                        <img src={client4} alt="placeholder"/>                                       
                                    </div>              
                                    <div className='filter-item filter-three'>
                                        <img src={client3} alt="placeholder"/>                                       
                                    </div>                       
                                    <div className='filter-item filter-three'>
                                        <img src={client5} alt="placeholder"/>                                       
                                    </div>                       
                                    <div className='filter-item filter-three'>
                                        <img src={client} alt="placeholder"/>                                       
                                    </div>             
                                    <div className='filter-item filter-four'>
                                        <img src={client1} alt="placeholder"/>                                       
                                    </div>                                    
                                    <div className='filter-item filter-four'>
                                        <img src={client4} alt="placeholder"/>                                       
                                    </div>                                    
                                    <div className='filter-item filter-five'>
                                        <img src={client2} alt="placeholder"/>                                       
                                    </div>
                                    <div className='filter-item filter-five'>
                                        <img src={client5} alt="placeholder"/>                                       
                                    </div>
                                </div>
                            </div>                        
                    </Row>
                </Container> 
            </section>    
        )
    }
}
export default Clients;