import React,{Component} from 'react';
import { Container,Row,Col,Card } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import Icofont from 'react-icofont';
import Profile from '../assets/image/portfolio-1.jpg';
import Profile2 from '../assets/image/portfolio-2.jpg';
import Profile3 from '../assets/image/portfolio-3.jpg';
import "../assets/css/Projects.css";

class Project extends Component{
    constructor(props){
        super(props);
        this.state = {
            proTitle : 'My',
            proHigh : 'Project',
            proSubtitle: 'A Lead UX & UI designer based in California',
            proItems : [
                {
                    id: 1,
                    cardImg: Profile,
                    linkIcon:'link',
                    linkhref:'#link',
                    cardTitle:'Our Product Design',
                    CardDetails:'Some quick example text to build on the card title and make up the bulk of the cards content.', 
                    cardlinkTitle:'Learn More',
                    cardlinkHref:'!#'
                },
                {
                    id: 2,
                    cardImg: Profile2,
                    linkIcon:'link',
                    linkhref:'#link',
                    cardTitle:'Our Product Design',
                    CardDetails:'Some quick example text to build on the card title and make up the bulk of the cards content.', 
                    cardlinkTitle:'Learn More',
                    cardlinkHref:'!#'
                },
                {
                    id: 3,
                    cardImg: Profile3,
                    linkIcon:'link',
                    linkhref:'#link',
                    cardTitle:'Our Product Design',
                    CardDetails:'Some quick example text to build on the card title and make up the bulk of the cards content.', 
                    cardlinkTitle:'Learn More',
                    cardlinkHref:'!#'
                }
            ]

        }
    }
    render(){
        const proItems = this.state.proItems;
        return(
            <section id="projects" className="projects">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="projects-top">
                                <h2>{this.state.proTitle} <span>{this.state.proHigh}</span></h2>
                                <h5>{this.state.proSubtitle}</h5>
                            </div>
                        </Col>
                        {
                            proItems.map((pis)=>(
                                <Col key={pis.id} lg={4}>
                                    <div className="project-item">
                                        <Card>
                                            <div className="project-imag">
                                                <Card.Img variant="top" src={pis.cardImg}/>
                                                <a href={pis.linkhref}><Icofont icon={pis.linkIcon}/></a>    
                                            </div>
                                            <Card.Body>
                                                <Card.Title>{pis.cardTitle}</Card.Title>
                                                <Card.Text>
                                                    {pis.CardDetails}
                                                </Card.Text>
                                                <Button variant="contained">
                                                    <a href={pis.cardlinkHref}>{pis.cardlinkTitle}</a>    
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    </div>                            
                                </Col>
                            ))
                        }                        
                    </Row>
                </Container>
            </section>
        )
    }
}
export default Project;