import React, { Component } from 'react';

import Nav from './components/Nav';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Interests from './components/Interests';

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
                            <Nav data={this.state.items.main} />
                            <Header data={this.state.items.main} />
                            <Experience data={this.state.items}/>
                            <Education data={this.state.items}/>
                            <Skills data={this.state.items}/>
                            <Interests />
                        </div>
                    );
                }
            }
        }

        export default App;
