import React, {Component} from 'react';

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
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="Skills">
              <div className="my-auto">
                <h2 className="mb-5">Skills</h2>

                <div className="subheading mb-3">Programming Languages &amp; Tools</div>

                <ul className="list-inline list-icons">
                    {skills}
                </ul>
              </div>
            </section>
        )
    }
};
