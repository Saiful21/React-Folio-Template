import React,{Component} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Menu extends Component{
    state = {
      links: [
        {
          id: 1,
          name: "Home",
          to: "#header",
          className: "nav_item"
        },
        {
          id: 2,
          name: "About Me",
          to: "#aboutme",
          className: "nav_item"
        },
        {
          id: 3,
          name: "Skills",
          to: "#skills",
          className:"nav_item"
        },
        {
          id: 4,
          name: "Services",
          to: "#service",
          className: "nav_item"
        },
        {
          id: 5,
          name: "Projects",
          to: "#projects",
          className: "nav_item"
        },
        {
          id: 6,
          name: "Testimonial",
          to: "#testimonial",
          className: "nav_item"
        },
        {
          id: 7,
          name: "Client",
          to: "#client",
          className: "nav_item"
        },
        {
          id: 8,
          name: "Blog",
          to: "#blog",
          className: "nav_item"
        }
      ],
      activeLink: null
    };
  
    handleClick = id => {
      this.setState({ activeLink: id });
    };
  
    render() {
      const { links, activeLink } = this.state;
      return (
        <ul>
          {links.map(link => {
            return (       
                <li key={link.id}
                onClick={() => this.handleClick(link.id)}
                className={
                    link.className +
                    (link.id === activeLink ? " active_item" : "")
                }
                >
                    <AnchorLink className="nav-link" href={link.to}>{link.name}</AnchorLink>
                </li>
            );
          })}
        </ul>
      );
    }
  }
export default Menu;