import React,{Component} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import Icofont from 'react-icofont';
import "../assets/css/About-me.css";
import profile from '../assets/image/about-us.jpg';

class AboutMe extends Component{   
    constructor(props){
        super(props);
        this.state = {
            title : 'ABOUT',
            titleHigh : 'ME',
            subtitle : 'A Lead UX & UI designer based in California',
            socialProfiles:[
                {
                    id:1,
                    className:'fb-icon',
                    href:'!#',
                    icon:'icofont-facebook'    
                },
                {
                    id:2,
                    className:'lk-icon',
                    href:'!#',
                    icon:'icofont-linkedin'    
                },
                {
                    id:3,
                    className:'tw-icon',
                    href:'!#',
                    icon:'icofont-twitter'    
                },
                {
                    id:4,
                    className:'pt-icon',
                    href:'!#',
                    icon:'icofont-pinterest'    
                },
            ],
            proTitle : "I'M Tony Smith",
            proSubtitle1: 'A Lead',
            proSubtitle2: 'designer based in',
            proSubhigh1: 'UX & UI',
            proSubhigh2: 'California',
            proContent: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.',
            proAddress: [
                {
                    id:1,
                    className:'email',
                    title : 'Email',
                    href: 'mail:tony@yourwebsite.com',
                    htitle: 'tony@yourwebsite.com'
                },
                {
                    id:2,
                    className:'role',
                    title : 'Role',
                    href: '!#',
                    htitle: 'Lead Designer'
                },
                {
                    id:3,
                    className:'phone',
                    title : 'Phone',
                    href: 'tel:+987987654321',
                    htitle: '(+987) 987 654 321'
                }
            ],
            downhref: '!#',
            downtitle:'Download'
        }
    } 

    render(){
        const socialProfiles = this.state.socialProfiles;
        const proAddress = this.state.proAddress;
        return(
            <section id="aboutme" className="about-me">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="about-details">
                                <h2>{this.state.title} <span>{this.state.titleHigh}</span></h2>
                                <h5>{this.state.subtitle}</h5>
                            </div>                            
                        </Col>{/*Col*/}
                    </Row>{/*Row*/}
                    <Row>
                        <Col lg={5}>
                            <div className="profile-imag">
                                <img className="img-responsive" src={profile} alt="profile"/>
                                <div className="social-profile"> 
                                    {
                                       socialProfiles.map((sp) => (
                                        <a key={sp.id} className={sp.className} href={sp.href}><Icofont icon={sp.icon}/></a>
                                       ))
                                    }                                    
                                </div>
                            </div>
                        </Col>{/*Col*/}
                        <Col lg={7}>
                            <div className="profile-details">
                                <h3>{this.state.proTitle}</h3>
                                <h5>{this.state.proSubtitle1} <span>{this.state.proSubhigh1}</span> {this.state.proSubtitle2} <span>{this.state.proSubhigh2}</span></h5>
                                <p>{this.state.proContent}</p>
                                <div className="address">
                                    {
                                        proAddress.map((pa)=>(
                                            <div key={pa.id} className={"common " + pa.className}>
                                                <h4>{pa.title}</h4>
                                                <p>
                                                    <a href={pa.href}>{pa.htitle}</a>
                                                </p>
                                            </div>
                                        ))
                                    }                                    
                                </div>
                                <Button variant="contained">
                                <a href={this.state.downhref}><Icofont icon="icofont-cloud-download"/> {this.state.downtitle}</a>
                                </Button>
                            </div>
                        </Col>{/*Col*/}
                    </Row>{/*Row*/}
                </Container>{/*Container*/}
            </section>    
        )
    }
}
export default AboutMe;