import React from 'react'


class ProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {project_name: '', project_addres: '', project_users: [0].id}
        }

    handleChange(event)
    {
        this.setState(
            {
                [event.target.project_name]: event.target.value,
                [event.target.project_addres]: event.target.value,
                [event.target.project_users]: event.target.value
            }
        );
    }
    handleSubmit(event) {
        this.props.create_project(this.state.project_name,this.state.project_addres,this.state.project_users)
        console.log(this.state.project_name)
        console.log(this.state.project_addres)
        console.log(this.state.project_users)
        event.preventDefault()
        }


    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                <label for="login">product name</label>
                    <input type="text" className="form-control" name="project_name"
                            value={this.state.project_name} onChange={(event)=>this.handleChange(event)} />
                   </div>
                <div className="form-group">
                <label for="login">product addres</label>
                    <input type="text" className="form-control" name="project_addres"
                            value={this.state.project_addres} onChange={(event)=>this.handleChange(event)} />
                </div>
                <label for="login">product users</label>
                <input type="number" className="form-control" name="project_users"
                                value={this.state.project_users} onChange={(event)=>this.handleChange(event)} />


            <input type="submit" className="btn btn-primary" value="Save" />
        </form>
       );
    }
}
export default ProjectForm