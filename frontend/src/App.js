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
import LoginForm from './components/Auth.js'
import axios from 'axios'
import ProjectForm from './components/ProjectForm.js'


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
            todo: [],
            auth: {username: '', is_login: false}
        }
    }

    create_project(project_name, project_addres, project_user) {
        const headers = this.get_headers()
        const data = {project_name:project_name, project_addres:project_addres, project_user:project_user}
        axios.post(get_url(`project/`), data, {headers})
            .then(response => {this.load_data()
        }).catch(error => {
        console.log(error)
        this.setState({project: []})})

    }

    delete_todo(id) {
        const headers = this.get_headers()
        axios.delete(get_url(`todo/${id}`), {headers})
            .then(response => {this.load_data()
        }).catch(error => {
        console.log(error)
        this.setState({todo: []})})

    }

    delete_project(id) {
        const headers = this.get_headers()
        axios.delete(get_url(`project/${id}`), {headers})
            .then(response => {this.load_data()
        }).catch(error => {
        console.log(error)
        this.setState({project: []})})

    }

    login(username, password) {
        axios.post(get_url('token/'), {username: username, password: password})
            .then(response => {
                const result = response.data
                const access = result.access
                const refresh = result.refresh
                localStorage.setItem('login', username)
                localStorage.setItem('access', access)
                localStorage.setItem('refresh', refresh)
                this.setState({'auth': {username: username, is_login: true}})
                this.load_data()
            }).catch(error => {
            if (error.response.status === 401) {
                alert('Неверный логин или пароль')
            } else {
                console.log(error)
            }
        })
    }


    logout() {
        localStorage.setItem('login', '')
        localStorage.setItem('access', '')
        localStorage.setItem('refresh', '')
        this.setState({'auth': {username: '', is_login: false}})
    }

    load_data() {
        const headers = this.get_headers()
        axios.get('http://127.0.0.1:8000/api/users/', {headers}).then(response => {
            this.setState({
                'users': response.data
            })
        }).catch(error => {
            console.log(error)
            this.setState({'users': []})
        })

        axios.get('http://127.0.0.1:8000/api/project/', {headers}).then(response => {
            this.setState({
                'project': response.data
            })
        }).catch(error => {
            console.log(error)
            this.setState({'project': []})
        })

        axios.get('http://127.0.0.1:8000/api/todo/', {headers}).then(response => {
            this.setState({
                'todo': response.data
            })
        }).catch(error => {
            console.log(error)
            this.setState({'todo': []})
        })

       }


    get_headers(){
        let headers = {

            'Content-Type':'application/json',

        }
        return headers
    }


    componentDidMount() {
        const username = localStorage.getItem('login')
        if ((username !== "") & (username !== null)) {
            this.setState({'auth': {username: username, is_login: true}}, () => this.load_data())
        }
    }


    render() {
        return (
            <Router>
                <header>
                    <Navbar navbarItems={this.state.navbarItems} auth={this.state.auth} logout={() => this.logout()}/>
                </header>
                <main role="main" class="flex-shrink-0">
                    <div className="container">
                        <Switch>
                            <Route exact path='/'>
                                <UserList users={this.state.users}/>
                            </Route>
                            <Route exact path='/project'>
                                <ProjectList items={this.state.project} delete_project={(id)=>this.delete_project(id)}/>
                            </Route>
                            <Route exact path='/project/create' component={() => <ProjectForm />}/>
                            <Route exact path='/todo'>
                                <ToDoList items={this.state.todo} delete_todo={(id)=>this.delete_todo(id)}/>
                            </Route>
                            <Route exact path='/login'>
                                <LoginForm login={(username, password) => this.login(username, password)}/>
                            </Route>
                        </Switch>
                    </div>
                </main>
            </Router>


        )
    }
}


export default App;