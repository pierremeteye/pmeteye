import React, {Component} from 'react';
import ParticlesReact from './ParticlesReact';

export default class Education extends Component {
    render(){
        if (this.props.data) {
            var diplomes = this.props.data.diplomes.map((diplomes) => {
                return(
                    <div className="col-md-16 resume-item d-flex flex-column flex-md-row mb-5" key={diplomes.school}>
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">{diplomes.school}</h3>
                            <div className="subheading mb-3">{diplomes.degree}</div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">{diplomes.graduated}</span>
                        </div>
                    </div>
                )
            });
        }
        return(
            <section className="d-flex flex-column h-100p relative" id="Education">
            <ParticlesReact />
                <div className="my-auto p-t-50">
                    <div className="p-50">
                        <h2 className="mb-5">Diplômes</h2>
                        {diplomes}
                    </div>
                </div>
            </section>

        )
    }
};
