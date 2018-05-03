import React, {Component} from "react";

export default class Nav extends Component {
    render(){
        if (this.props.data) {
            var menu = this.props.data.menu.map((menu) => {
                return (
                    <li className="nav-item" key={menu.name}>
                        <a className="nav-link js-scroll-trigger" href={process.env.PUBLIC_URL + menu.href}>{menu.name}</a>
                    </li>
                )
            })
        }
        return(

            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt="" />
                    </span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        {menu}
                    </ul>
                </div>
            </nav>
        )
    }
};
