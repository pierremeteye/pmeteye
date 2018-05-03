import React, { Component } from 'react';

import Nav from './components/Nav';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';

import { Switch, Route } from 'react-router-dom'



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            resume: []
        };
    }
    componentDidMount() {
        fetch("resumeData.json")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.resume
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }
    render() {
        const { error, isLoaded } = this.state;
        // const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div id="#App" className="App">
                <Nav data={this.state.items.main}/>
                    <Switch>
                      <Route exact path={`${process.env.PUBLIC_URL}/`}>
                        <Header data={this.state.items.main} />
                      </Route>
                      <Route exact path={process.env.PUBLIC_URL + "/experience"}>
                        <Experience data={this.state.items}/>
                      </Route>
                      <Route exact path={process.env.PUBLIC_URL + "/education"}>
                        <Education data={this.state.items}/>
                      </Route>
                      <Route exact path={process.env.PUBLIC_URL + "/skills"}>
                        <Skills data={this.state.items}/>
                      </Route>
                      <Route exact path={process.env.PUBLIC_URL + "/projects"}>
                        <Projects data={this.state.items}/>
                      </Route>
                    </Switch>
                </div>
                );
        }
    }
}

export default App;
