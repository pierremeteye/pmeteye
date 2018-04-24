import React, {Component} from 'react';

export default class Interests extends Component {
    render(){
        if (this.props.data) {
            var projects = this.props.data.projects.map((projects) => {
            var imgUrl = 'img/' + projects.image;
                return(
                <div className="card col-3 f-l p-0" key={projects.title}>
                    <a className="p-15" href={projects.url} target="_blank">
                      <img className="card-img-top" src={imgUrl} alt={projects.title} />
                      <div className="card-body">
                        <h5 className="card-title">{projects.title}</h5>
                      </div>
                    </a>
                </div>
                )
            })
        }
        return(
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="Projects">
              <div className="my-auto">
                <h2 className="mb-5">Projets</h2>
                {projects}
              </div>
            </section>
        )
    }
};
