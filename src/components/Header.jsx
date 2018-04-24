import React, {Component} from 'react';
import ParticlesReact from './ParticlesReact';

export default class Header extends Component {
    render() {
        if (this.props.data) {
            var network = this.props.data.social.map((network) => {
                return (
                    <li className="list-inline-item" key={network.className}>
                        <a href={network.url}>
                            <span className="fa-stack fa-lg">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className={network.className + " fa-stack-1x fa-inverse"}></i>
                            </span>
                        </a>
                    </li>
                )
            });
        }
        return(
            <section className="resume-section p-3 p-lg-5 d-flex d-column" id="About">
            <ParticlesReact />
                    <div className="my-auto">
                        <h1 className="mb-0">Pierre
                            <span className="text-primary m-t-25"> Météyé</span>
                        </h1>
                        <div className="subheading mb-5">
                            <p>07.62.12.80.28</p>
                            <a href="mailto:meteyepg@gmail.com">meteyepg@gmail.com</a>
                        </div>
                        <ul className="list-inline list-social-icons mb-0">
                            {network}
                        </ul>
                        <div>
                            <p className="m-t-50">Build with</p>
                            <i className="devicon-react-original fs-50"></i>
                        </div>
                    </div>
            </section>
        )
    }
};
