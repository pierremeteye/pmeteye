import React, {Component} from 'react';

export default class Skills extends Component {
    render(){
        return(
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="Skills">
              <div className="my-auto">
                <h2 className="mb-5">Skills</h2>

                <div className="subheading mb-3">Programming Languages &amp; Tools</div>
                    <canvas width="500" height="500" id="myCanvas">
                        <div id="tags">
                            <ul>
                                <li> <a href="https://en.wikipe#">HTML 5</a></li>
                                <li><a data-weight="14" href="">CSS 3</a></li>
                                <li><a data-weight="14" href="">JavaScript</a></li>
                                <li><a data-weight="24" href="">AJAX</a></li>
                                <li><a data-weight="14" href="">JSON</a></li>
                                <li><a data-weight="27" href="">ReactJS</a></li>
                                <li><a data-weight="26" href="">Wordpress</a></li>
                                <li><a data-weight="22" href="">PHP</a></li>
                                <li><a data-weight="22" href="">MySQL</a></li>
                                <li><a data-weight="21" href="">Node JS</a></li>
                                <li><a data-weight="17" href="">Git</a></li>
                                <li><a data-weight="23" href="">Bootstrap</a></li>
                                <li><a data-weight="15" href="">SASS</a></li>
                                <li><a data-weight="19" href="">jQuery</a></li>
                                <li><a data-weight="19" href="">Mongo DB</a></li>
                                <li><a data-weight="19" href="">Express.js</a></li>
                                <li><a data-weight="19" href="">Gulp</a></li>
                                <li><a data-weight="19" href="">npm</a></li>
                                <li><a data-weight="19" href="">Yarn</a></li>
                                <li><a data-weight="19" href="">Bower</a></li>
                                <li><a data-weight="19" href="">Canvas</a></li>
                            </ul>
                        </div>
                    </canvas>

                <div className="subheading mb-3">Workflow</div>
                <ul className="fa-ul mb-0">
                  <li>
                    <i className="fa-li fa fa-check"></i>
                    Mobile-First, Responsive Design</li>
                  <li>
                    <i className="fa-li fa fa-check"></i>
                    Cross Browser Testing &amp; Debugging</li>
                  <li>
                    <i className="fa-li fa fa-check"></i>
                    Cross Functional Teams</li>
                  <li>
                    <i className="fa-li fa fa-check"></i>
                    Agile Development &amp; Scrum</li>
                </ul>
              </div>
            </section>
        )
    }
};
