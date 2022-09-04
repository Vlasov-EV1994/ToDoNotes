import React from 'react';
//import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Menu.js'
import UserList from './components/User.js'
import ProjectList from './components/Project.js'
import ToDoList from './components/Todo.js'
import axios from 'axios'


const DOMAIN = 'http://127.0.0.1:8000/api/'
const get_url = (url) => `${DOMAIN}${url}`


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navbarItems: [
                {name: 'Users', href: '/'},
                {name: 'Project', href: '/project'},
                {name: 'TODO', href: '/todo'},
            ],
            users: [],
            project: [],
            todo: []
        }
    }


    componentDidMount() {
        axios.get(get_url('users/'))
            .then(response => {
                this.setState({users: response.data})
            }).catch(error => console.log(error))


        axios.get(get_url('project/'))
            .then(response => {
                this.setState({project: response.data.results})
            }).catch(error => console.log(error))

        axios.get(get_url('todo/'))
            .then(response => {
                this.setState({todo: response.data.results})
            }).catch(error => console.log(error))
    }


    render() {
        return (
            <Router>
                <header>
                    <Navbar navbarItems={this.state.navbarItems}/>
                </header>
                <main role="main" className="flex-shrink-0">
                    <div className="container">
                        <Switch>
                            <Route exact path='/'>
                                <UserList users={this.state.users}/>
                            </Route>
                            <Route exact path='/project'>
                                <ProjectList items={this.state.project}/>
                            </Route>
                            <Route exact path='/todo'>
                                <ToDoList items={this.state.todo}/>
                            </Route>
                        </Switch>
                    </div>
                </main>
            </Router>


        )
    }
}


export default App;