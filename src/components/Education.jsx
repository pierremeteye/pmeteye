import React, {Component} from 'react';

export default class Education extends Component {
    render(){
        if (this.props.data) {
            var diplomes = this.props.data.diplomes.map((diplomes) => {
                return(
                    <div className="resume-item d-flex flex-column flex-md-row mb-5" key={diplomes.school}>
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
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="Education">
                <div className="my-auto">
                    <h2 className="mb-5">Education</h2>
                    {diplomes}
                </div>
            </section>

        )
    }
};
