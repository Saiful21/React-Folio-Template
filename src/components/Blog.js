import React, { Component } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import blog1 from '../assets/image/blog-1.png';
import blog2 from '../assets/image/blog-2.png';
import blog3 from '../assets/image/blog-3.png';
import "../assets/css/Blog.css";

class Blog extends Component{
    constructor(props){
        super(props);
        this.state ={
            btitle:'My',
            btiHigh:'Blog',
            bsubtitle:'A Lead UX & UI designer based in California',
            blogItems:[
                {
                    id:1,
                    img:blog1,
                    by:'By',
                    authUrl:'!#',
                    autTitle:'admin',
                    date: new Date(),
                    mainTitle:'Web design concept & Learning',
                    mainUrl:'!#',
                    mainDetails: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit dolor, eleifend in feugiat quis, lobortis ac libero. Nullam ut.',
                    readTitle: 'Read More',
                    readUrl: '!#'
                },
                {
                    id:2,
                    img:blog2,
                    by:'By',
                    authUrl:'!#',
                    autTitle:'admin',
                    date: new Date(),
                    mainTitle:'The Future of Web Development',
                    mainUrl:'!#',
                    mainDetails: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit dolor, eleifend in feugiat quis, lobortis ac libero. Nullam ut.',
                    readTitle: 'Read More',
                    readUrl: '!#'
                },
                {
                    id:3,
                    img:blog3,
                    by:'By',
                    authUrl:'!#',
                    autTitle:'admin',
                    date: new Date(),
                    mainTitle:'How to make a perfect Design?',
                    mainUrl:'!#',
                    mainDetails: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit dolor, eleifend in feugiat quis, lobortis ac libero. Nullam ut.',
                    readTitle: 'Read More',
                    readUrl: '!#'
                }
            ]
        }
    }
    render(){
        const blogItems = this.state.blogItems;
        return(
            <section id="blog" className="blog-main">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="blog-top">
                                <h2>{this.state.btitle} <span>{this.state.btiHigh}</span></h2>
                                <h5>{this.state.bsubtitle}</h5>
                            </div>
                        </Col>
                        {
                            blogItems.map((bit)=>(
                                <Col key={bit.id} lg={4}>
                                    <div className="blog-item">
                                        <div className="img">
                                            <img src={bit.img} alt="blog"/>
                                        </div>
                                        <div className="auth-info">
                                            {bit.by} <a href={bit.authUrl}>{bit.autTitle}</a>
                                            <span>
                                                {bit.date.toLocaleDateString()}
                                            </span>
                                        </div>
                                        <h3>
                                            <a href={bit.mainUrl}>{bit.mainTitle}</a>
                                        </h3>
                                        <p>
                                        {bit.mainDetails}
                                        </p>
                                        <Button variant="outlined">
                                            <a href={bit.readUrl}>{bit.readTitle} <ArrowRightAltIcon/></a>
                                        </Button>
                                    </div>
                                </Col>
                            ))
                        }
                        {/* <Col lg={4}>
                            <div className="blog-item">
                                <div className="img">
                                    <img 
                                        src={blog1} 
                                        alt=""
                                    />
                                </div>
                                <div className="auth-info">
                                    By <a href="!#">admin</a>
                                    <span>
                                        26 jan, 2020
                                    </span>
                                </div>
                                <h3>
                                    <a href="!#">Web design concept & Learning</a>
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit dolor, eleifend in feugiat quis, lobortis ac libero. Nullam ut.
                                </p>
                                <Button variant="outlined">
                                    <a href="!#">Read More <ArrowRightAltIcon/></a>
                                </Button>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="blog-item">
                                <div className="img">
                                    <img 
                                        src={blog2} 
                                        alt=""
                                    />
                                </div>
                                <div className="auth-info">
                                    By <a href="!#">admin</a>
                                    <span>
                                        26 jan, 2020
                                    </span>
                                </div>
                                <h3>
                                    <a href="!#">The Future of Web Development</a>
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit dolor, eleifend in feugiat quis, lobortis ac libero. Nullam ut.
                                </p>
                                <Button variant="outlined">
                                    <a href="!#">Read More <ArrowRightAltIcon/></a>
                                </Button>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="blog-item">
                                <div className="img">
                                    <img 
                                        src={blog3} 
                                        alt=""
                                    />
                                </div>
                                <div className="auth-info">
                                    By <a href="!#">admin</a>
                                    <span>
                                        26 jan, 2020
                                    </span>
                                </div>
                                <h3>
                                    <a href="!#">How to make a perfect Design?</a>
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit dolor, eleifend in feugiat quis, lobortis ac libero. Nullam ut.
                                </p>
                                <Button variant="outlined">
                                    <a href="!#">Read More <ArrowRightAltIcon/></a>
                                </Button>
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </section>
        )
    }
}
export default Blog;