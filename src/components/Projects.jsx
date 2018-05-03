import React, {Component} from 'react';
import ParticlesReact from './ParticlesReact';

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
            <section className="d-flex flex-column relative h-100p p-0" id="Projects">
            <ParticlesReact />
              <div className="my-auto">
                <div class="p-50">
                    <h2 className="mb-5">Projets</h2>
                    {projects}
                </div>
              </div>
            </section>
        )
    }
};
