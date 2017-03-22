import React, { Component } from 'react';
import './App.css';
import Projects from './Components/projects';
import AddProject from './Components/AddProject'
import uuid from 'uuid';
import $ from 'jquery';
import Todos from './Components/Todos';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  getToDos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state)
        })
      }.bind(this),
      error: function(xhr, status, error){
        console.log(error)
      }
    })
  }

  getProjects(){
    this.setState({ projects: [
      {
        title: 'Business Website',
        category: 'Web Design',
        id: uuid.v4(),
      },
      {
        title: 'Social App',
        category: 'App Development',
        id: uuid.v4(),
      },
      {
        title: 'ECommerce Website',
        category: 'Web Design',
        id: uuid.v4(),
      }
    ]});
  }

  componentWillMount(){
    this.getProjects();
    this.getToDos();
  }

  componentDidMount(){
    this.getToDos();
  }

  handleAddProject(project){
   let projects = this.state.projects;
   projects.push(project);
    this.setState({projects: projects})
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects: projects})
  }

  render() {
    return (
      <div className="App">
      <h1>My app</h1>
      <AddProject addProjectProp={this.handleAddProject.bind(this)} />
      <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
      <Todos todos={this.state.todos} />
    </div>
    );
  }
}

export default App;
