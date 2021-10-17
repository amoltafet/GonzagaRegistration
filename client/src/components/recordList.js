import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { Button } from "reactstrap";

const Record = (props) => (
  <tr>
    <td>{props.record.courseTitle}</td>
    <td>{props.record.termDesc}</td>
    <td>{props.record.courseNumber}</td>
    <td>{props.record.subjectDescription}</td>
    <td>{props.record.creditHourSession}</td>    
  </tr>
);

export default class RecordList extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.deleteRecord = this.deleteRecord.bind(this);
    this.state = { records: [] };
  }

  // This method will get the data from the database.
  componentDidMount() {
    axios
      .get("http://localhost:5000/record/")
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  searchOpen(){
    axios.get("http://localhost:5000/").then((response) => {
      console.log(response.data);
    
    });
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
  // This following section will display the table with the records of individuals.
  render() {
    return (
      <div class="outside_div">
                <nav class="navbar">
            <a class="navbar-brand" href="/">
                <img src="./img/bulldog.png" width="150" height="100" alt=""/>
                <img src="./img/gonzaga_logo.png" width="400" height="100" alt=""/>
            </a>
        </nav>
        <div class="row">
          <div class="col-md-3">
    
          <input type="search" class="form-control rounded" placeholder="Search ..." aria-label="Search"></input>
          <ul><input type="checkbox" id="topping" name="topping" value="Elective" /> Elective</ul>
          <ul><input type="checkbox" id="topping" name="topping" value="Open" /> Open Courses</ul>

            <div class="class_times bg-primary border border-dark rounded">
              <p>Class Times</p>
              <ul><input type="checkbox" id="topping" name="topping" value="Elective" /> Monday</ul>
              <ul><input type="checkbox" id="topping" name="topping" value="Elective" /> Tuesday</ul>
              <ul><input type="checkbox" id="topping" name="topping" value="Elective" /> Wednesday</ul>
              <ul><input type="checkbox" id="topping" name="topping" value="Elective" /> Thursday</ul>
              <ul><input type="checkbox" id="topping" name="topping" value="Elective" /> Friday</ul>
              <button class="btn-light">Search</button>
            </div>
          </div>
          <div class="col-md-9">
          
          <h3>Course Catalog</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
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
    );
  }
}

