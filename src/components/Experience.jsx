import React, {Component} from 'react';
import ParticlesReact from './ParticlesReact';

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
                            <span className="text-primary">{work.years}</span>
                        </div>
                    </div>
                )
            })
        }
        return(
            <section className="d-flex flex-column relative h-100p" id="Experience">
            <ParticlesReact />
                <div className="my-auto">
                    <div class="p-50">
                        <h2 className="mb-5">Expérience</h2>
                        {work}
                    </div>
                </div>

            </section>

        )
    }
};
