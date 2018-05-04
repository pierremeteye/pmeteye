import React, {Component} from 'react';
import ParticlesReact from './ParticlesReact';

export default class Skills extends Component {
    render(){
        if (this.props.data) {
            var skills = this.props.data.skills.map((skills) => {
                return(
                    <li className="list-inline-item" key={skills.name}>
                        <i className={"devicon-"+skills.name+"-plain"} title={skills.name}></i>
                    </li>
                )
            })
        }
        return(
            <section className="d-flex flex-column h-100p relative" id="Skills">
            <ParticlesReact />
              <div className="my-auto p-t-50">
                <div className="p-50">
                    <h2 className="mb-5">Compétences</h2>

                    <div className="subheading mb-3">Programming Languages &amp; Tools</div>

                    <ul className="list-inline list-icons">
                        {skills}
                    </ul>
                </div>
              </div>
            </section>
        )
    }
};
