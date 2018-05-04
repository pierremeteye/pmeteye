import React, {Component} from 'react';
import ParticlesReact from './ParticlesReact';

export default class Interests extends Component {
    render(){
        if (this.props.data) {
            var projects = this.props.data.projects.map((projects) => {
            var imgUrl = 'img/' + projects.image;
                return(
                <div className="col-2 m-50 f-l p-0 col-3 f-l p-0 boxShadow h-500" key={projects.title}>
                    <a className="col-12 p-0" href={projects.url} target="_blank">
                      <img className="card-img-top col-12 p-0" src={imgUrl} alt={projects.title} />
                      <div className="card-body">
                        <h5 className="card-title">{projects.title}</h5>
                      </div>
                    </a>
                </div>
                )
            })
        }
        return(
            <section className="d-flex flex-column relative h-100p p-0" id="Projects">
            <ParticlesReact />
              <div className="my-auto p-t-50">
                <div className="p-50">
                    <h2 className="mb-5 p-l-85">Projets</h2>
                    {projects}
                </div>
              </div>
            </section>
        )
    }
};
