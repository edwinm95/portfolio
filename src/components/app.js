import React,{Component,Fragment} from 'react';
import './app.css'
import NavBar from './layouts/navbar'
import Home from './layouts/home'
import About from './layouts/about'
import Experience from './layouts/experience'
import Projects from './layouts/projects'
import Education from './layouts/education'
import Contact from './layouts/contact'
class App extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        let vh = window.innerHeight * 0.011;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    render(){
        return(
            <Fragment>
                    <NavBar/>
                    <div className="pages">
                        <Home/>
                        <About />
                        <Experience />
                        <Projects />
                        <Contact />
                    </div>
            </Fragment>
        )
    }
}

export default App