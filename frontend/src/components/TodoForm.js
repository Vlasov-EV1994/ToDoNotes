import React from 'react'


class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {todo_project: '', todo_txt: '', todo_create_user: [0].id}
        }

    handleChange(event)
    {
        this.setState(
            {
                [event.target.todo_project]: event.target.value,
                [event.target.todo_txt]: event.target.value,
                [event.target.todo_create_user]: event.target.value
            }
        );
    }
    handleSubmit(event) {
        this.props.create_todo(this.state.todo_project,this.state.todo_txt,this.state.todo_create_user)
        console.log(this.state.todo_project)
        console.log(this.state.todo_txt)
        console.log(this.state.todo_create_user)
        event.preventDefault()
        }


    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                <label for="login">todo project</label>
                    <input type="text" className="form-control" name="todo_project"
                            value={this.state.todo_project} onChange={(event)=>this.handleChange(event)} />
                   </div>
                <div className="form-group">
                <label for="login">todo txt</label>
                    <input type="text" className="form-control" name="todo_txt"
                            value={this.state.todo_txt} onChange={(event)=>this.handleChange(event)} />
                </div>
                <label for="login">todo create user</label>
                    <input type="number" className="form-control" name="todo_create_user"
                                value={this.state.todo_create_user} onChange={(event)=>this.handleChange(event)} />


            <input type="submit" className="btn btn-primary" value="Save" />
        </form>
       );
    }
}
export default TodoForm