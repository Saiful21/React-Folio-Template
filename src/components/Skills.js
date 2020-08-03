import React,{Component} from 'react';
import { Container,Row,Col,ProgressBar } from 'react-bootstrap';
import Icofont from 'react-icofont';
import "../assets/css/Skills.css";

class Skill extends Component{
    constructor(props){
        super(props);
        this.state = {
            skillTitle : 'My',
            skilltHigh : 'Skills',
            skillSubtitle : 'A Lead UX & UI designer based in California',
            skillProgress:[
                {
                    id:1,
                    title: 'Html',
                    count:60,
                },
                {
                    id:2,
                    title: 'Javascript',
                    count:80,
                },
                {
                    id:3,
                    title: 'css',
                    count:90,
                },
                {
                    id:4,
                    title: 'php',
                    count:70,
                },
                {
                    id:5,
                    title: 'Mysql',
                    count:90,
                }
            ],
            skillAward: [
                {
                    id:1,
                    icon:'trophy',
                    title:'122 award won'
                },
                {
                    id:2,
                    icon:'file-document',
                    title:'300 Project Done'
                },
                {
                    id:3,
                    icon:'code-alt',
                    title:'Certified Code'
                },
                {
                    id:4,
                    icon:'users-social',
                    title:'Team Management'
                }
            ],
            exptitle: 'Working Experience',
            expItems: [
                {
                    id:1,
                    year:'2020 - present',
                    title:'Frontend Web Developer',
                    subtitle:'Abc Company',
                    content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.'
                },
                {
                    id:2,
                    year:'2020 - 2017',
                    title:'Backend Web Developer',
                    subtitle:'Abc Company',
                    content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.'
                },
                {
                    id:3,
                    year:'2020 - 2015',
                    title:'Application Developer',
                    subtitle:'Abc Company',
                    content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.'
                },
            ],
            edutitle: 'Educational Journey',
            eduItems:[
                {
                    id:1,
                    year:'2020 - 2019',
                    title:'Master of Science',
                    subtitle:'Abc Company',
                    content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.'
                },
                {
                    id:2,
                    year:'2020 - 2013',
                    title:'Bachelor of Science',
                    subtitle:'Abc Company',
                    content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.'
                },
                {
                    id:3,
                    year:'2012 - 2010',
                    title:'Higher Schoold Graduation',
                    subtitle:'Abc Company',
                    content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.'
                },
            ]
        }
    }
    render(){
        const skillProgress = this.state.skillProgress;
        const skillAward = this.state.skillAward;
        const expItems = this.state.expItems;
        const eduItems = this.state.eduItems;
        return(
            <section id="skills" className="skill-bar">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="skill-top">
                                <h2>{this.state.skillTitle} <span>{this.state.skilltHigh}</span></h2>
                                <h5>{this.state.skillSubtitle}</h5>
                            </div>
                        </Col>{/*title*/}
                        <Col lg={7}>
                            <div className="skill-progress">
                                {
                                    skillProgress.map((spg)=>(
                                        <div key={spg.id} className={"item-"+ spg.id}>
                                            <h3>{spg.title}</h3>
                                            <ProgressBar variant="success" now={spg.count} label={`${spg.count}%`} />
                                        </div>
                                    ))
                                }                                
                            </div>
                        </Col>{/*progress*/}
                        <Col lg={5}>
                            <div className="skill-trophy">
                                <Row>
                                    {
                                        skillAward.map((ska)=>(
                                            <Col key={ska.id} lg={6}>
                                                <div className="common award">
                                                    <div className="icon">
                                                        <Icofont icon={ska.icon} />
                                                    </div>
                                                    <div className="title">
                                                        <p>{ska.title}</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        ))
                                    }
                                </Row>
                            </div>
                        </Col>{/*award*/}
                        <div className="divider"></div>
                        <Col lg={6}>                            
                            <div className="skill-exp">
                                <h3>{this.state.exptitle}</h3>
                            </div>                        
                            <div className="education">
                                {
                                    expItems.map((eit)=>(
                                        <div key={eit.id} className="edu-inner">
                                            <div className="year-list">
                                                <h5>{eit.year}</h5>
                                            </div>
                                            <div className="summary-list">
                                                <h4>{eit.title}</h4>
                                                <h5>{eit.subtitle}</h5>
                                                <p>{eit.content}</p>
                                                </div>
                                        </div> 
                                    ))
                                } 
                            </div>
                        </Col>{/*Working exp*/}
                        <Col lg={6}>
                            <div className="skill-edu">
                                <h3>{this.state.edutitle}</h3>
                            </div>
                            <div className="experience">
                                {
                                    eduItems.map((edt)=>(
                                        <div key={edt.id} className="exp-inner">
                                            <div className="year-list">
                                                <h5>{edt.year}</h5>
                                            </div>
                                            <div className="summary-list">
                                                <h4>{edt.title}</h4>
                                                <h5 className="mi-resume-company">{edt.subtitle}</h5>
                                                <p>{edt.content}</p>
                                                </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </Col>{/*Edu exp*/}
                    </Row>{/*Row*/}
                </Container>{/*Container*/}
            </section>
        )
    }
}
export default Skill;