import React,{Component} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Icofont from 'react-icofont';
import "../assets/css/Services.css";

class Services extends Component{
    constructor(props){
        super(props);
        this.state = {
            srvTitle : 'My',
            srvHigh : 'Services',
            srvSubtitle :'A Lead UX & UI designer based in California',
            srvItems:[
                {
                    id:1,
                    icon:'responsive',
                    title: 'Ui,Ux Designer',
                    content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero',
                },
                {
                    id:2,
                    icon:'code-alt',
                    title: 'Development & Designer',
                    content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero',
                },
                {
                    id:3,
                    icon:'bug',
                    title: 'Bug Fixing',
                    content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero',
                },
                {
                    id:4,
                    icon:'pen-alt-1',
                    title: 'Content Writing',
                    content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero',
                },
                {
                    id:5,
                    icon:'video-clapper',
                    title: 'Animation Making',
                    content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero',
                },
                {
                    id:6,
                    icon:'addons',
                    title: 'Various Addon',
                    content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero',
                },
            ]
        }
    }
    render(){
        const srvItems = this.state.srvItems;
        return(
            <section id="service" className="service-point">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="service-top">
                                <h2>{this.state.srvTitle} <span>{this.state.srvHigh}</span></h2>
                                <h5>{this.state.srvSubtitle}</h5>
                            </div>
                        </Col>
                        {
                            srvItems.map((sri)=>(
                                <Col key={sri.id} lg={4}>
                                    <div className="service-item">
                                        <div className="icon">
                                            <Icofont icon={sri.icon}/>
                                        </div>
                                        <div className="title">
                                            <h4>{sri.title}</h4>
                                        </div>
                                        <div className="content">
                                            <p>{sri.content}</p>    
                                        </div>
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
export default Services;