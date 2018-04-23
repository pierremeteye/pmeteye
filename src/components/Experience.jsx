import React, {Component} from 'react';

export default class Experience extends Component {
    render() {
        if (this.props.data) {
            var work = this.props.data.work.map((work) => {
                return(
                    <div className="resume-item d-flex flex-column flex-md-row mb-5" key={work.title}>
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">{work.title}</h3>
                            <div className="subheading mb-3">{work.company}</div>
                            <p>{work.description}</p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">{work.project}</span>
                        </div>
                    </div>
                )
            })
        }
        return(
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="Experience">
                <div className="my-auto">
                    <h2 className="mb-5">Experience</h2>
                    {work}
                </div>

            </section>

        )
    }
};
