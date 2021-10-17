import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Modal, ModalHeader
} from 'reactstrap';
import { Link } from "react-router-dom";

const Record = (props) => (

  <tr>
    <td >{props.record.courseTitle}</td>
    <td>{props.record.termDesc}</td>
    <td>{props.record.courseNumber}</td>
    <td>{props.record.subjectDescription}</td>
    <Button>Add</Button>
    <td>
    </td>
  </tr>
);

const Current = (props) => (

  <tr className="table-success">
    <td >{props.record.courseTitle}</td>
    <td>{props.record.termDesc}</td>
    <td>{props.record.courseNumber}</td>
    <td>{props.record.subjectDescription}</td>
    <td>
    </td>
  </tr>
);

const Planned = (props) => (

  <tr className="table-secondary">
    <td >{props.record.courseTitle}</td>
    <td>{props.record.termDesc}</td>
    <td>{props.record.courseNumber}</td>
    <td>{props.record.subjectDescription}</td>
    <Button>Remove</Button>
    <td>
    </td>
  </tr>
);


export default class RecordList extends Component {

  
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.deleteRecord = this.deleteRecord.bind(this);
    this.state = {records: [], students: [], planned: []};
  }

  // This method will get the data from the database.
  componentDidMount() {

    let one = "http://localhost:5000/need/"
    let two = "http://localhost:5000/student/"
    let three = "http://localhost:5000/planned/"

    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    const requestThree = axios.get(three);

    axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
      this.setState({ records: responses[0].data, students: responses[1].data, planned: responses[2].data})
      console.log(responses[2].data);
      })).catch(function (error) {
        console.log(error);
      })
  }

    // This method will delete a record based on the method
    deleteRecord(id) {
      axios.delete("http://localhost:5000/" + id).then((response) => {
        console.log(response.data);
      });
  
      this.setState({
        record: this.state.records.filter((el) => el._id !== id),
      });
    }

  // This method will map out the users on the table
  recordList() {
    return this.state.records.map((currentrecord) => {
      return (
        <Record
          record={currentrecord}
          deleteRecord={this.deleteRecord}
          key={currentrecord._id}
        />
      );
    });
  }

  recordStudents() {
    return this.state.students.map((currentrecord) => {
      return (
        <Current
          record={currentrecord}
          deleteRecord={this.deleteRecord}
          key={currentrecord._id}
        />
      );
    });
  }

  recordPlanned() {
    return this.state.planned.map((currentrecord) => {
      return (
        <Planned
          record={currentrecord}
          deleteRecord={this.deleteRecord}
          key={currentrecord._id}
        />
      );
    });
  }


  // This following section will display the table with the records of individuals.
  render() {
    return (
  <div class="container-fluid">
    <div class="row">
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div>
          <h3>Courses taken</h3>
          <table name="row" className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Term</th>
                <th>Course Number</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>{this.recordStudents()}</tbody>
          </table>
        </div>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div>
          <h3>Courses you need to take</h3>
          <div> 
          <table class="table  mb-0" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Term</th>
                <th>Course Number</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>{this.recordList()}</tbody>
          </table>
          </div>
        </div>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div>
          <h3>Planned Courses</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Term</th>
                <th>Course Number</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>{this.recordPlanned()}</tbody>
          </table>
        </div>
        </div>
    </div>
    </div>
    );
  }
}