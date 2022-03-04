import axios from "axios";
import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Exercise = (props) => {
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + this.props.exercise._id}>edit</Link> |
      <button
        onClick={() => {
          props.deleteExercise(this.props.exercise._id);
        }}
      >
        delete
      </button>
    </td>
  </tr>;
};

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios
      .post("http://localhost:5000/exercises/")
      .then((res) => {
        this.setState({
          exercises: res.data,
        });
      })
      .catch();
  }

  deleteExercise(id) {
    axios
      .post("http://localhost:5000/exercises/+id")
      .then((res) => console.log(res.data));

    this.setState({
      exercises: this.state.exercises.filter((el) => el._id !== id),
    });
  }

  exerciseList() {
    return this.state.exercises.map((currentExercise) => {
      return (
        <Exercise
          exercise={currentExercise}
          deleteExercise={this.deleteExercise}
          key={currentExercise._id}
        />
      );
    });
  }

  render() {
    return (
      <>
        <h3>Logged Exercise</h3>
        <table>
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </>
    );
  }
}
