import React, { Component } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import StarIcon from '@material-ui/icons/Star';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import profile from '../assets/image/team-7-300x300.png';
import "../assets/css/Testimonial.css";

class Testimonial extends Component{
    constructor(props){
        super(props);
        this.state = {
            testTitle:'Clients',
            testHigh:"Say's",
            testSubTitle:'A Lead UX & UI designer based in California',
            testiItem:[
                {
                    id:1,
                    image: profile,
                    title:'Tony Smith',
                    subtitle:'Project Designer',
                    details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.',
                    
                },
                {
                    id:2,
                    image: profile,
                    title:'Tony Smith',
                    subtitle:'Project Designer',
                    details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.',
                    
                },
                {
                    id:3,
                    image: profile,
                    title:'Tony Smith',
                    subtitle:'Project Designer',
                    details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.',
                    
                },
                {
                    id:4,
                    image: profile,
                    title:'Tony Smith',
                    subtitle:'Project Designer',
                    details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.',
                    
                },
            ]
        }
    }    
    render(){
        const settings = {
            dots: true,
            lazyLoad: true,
            infinite: true,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
        };
        const testiItem = this.state.testiItem;
        return(
            <section id="testimonial" className="testi-main">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div  className="testi-top">
                                <h2>{this.state.testTitle} <span>{this.state.testHigh}</span></h2>
                                <h5>{this.state.testSubTitle}</h5>
                            </div>
                        </Col>
                        <Col lg={{ span: 8, offset: 2 }}>    
                            <div className="testi-slider">
                                <Slider className={settings}>
                                    {testiItem.map((tst)=>(
                                        <div key={tst.id} className={"test-item-" + tst.id}>
                                            <div className="testi-head">
                                                <img src={tst.image} alt="profile"/>
                                                <h3>{tst.title}</h3>
                                                <h6>{tst.subtitle}</h6>
                                            </div>                                        
                                            <div className="testi-details">
                                                <FormatQuoteIcon/>
                                                    <p>{tst.details}</p>
                                                <div className="rating">
                                                    <ul>
                                                        <li><StarIcon/></li>
                                                        <li><StarIcon/></li>
                                                        <li><StarIcon/></li>
                                                        <li><StarIcon/></li>
                                                        <li><StarIcon/></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ))}                                   
                                </Slider>
                            </div>                           
                        </Col>


                    </Row>
                </Container>
            </section>
        )
    }
}
export default Testimonial;