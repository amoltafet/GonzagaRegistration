import React from "react";

const Status = () => {

    return (
    <div class="outside_div">
        <nav class="navbar">
            <a class="navbar-brand" href="/">
                <img src="./img/bulldog.png" width="150" height="100" alt=""/>
                <img src="./img/gonzaga_logo.png" width="400" height="100" alt=""/>
            </a>
        </nav>

    <h4>Registered Courses</h4>
    <table class="registered">
        <thead>
          <tr>
            <th scope="col" class="class_name">Title</th>
            <th scope="col">Course Number</th>
            <th scope="col">Hours</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td class="class_name">CPSC 224</td>
              <td>Software Development</td>
              <td>3</td>
              <td>Registered</td>
          </tr>
          <tr>
            <td class="class_name">CPSC 223</td>
            <td>Data Structures</td>
            <td>3</td>
            <td>Registered</td>
          </tr>

          <tr>
            <td class="class_name">CPSC 260</td>
            <td>Computer Organization</td>
            <td>3</td>
            <td>Dropped</td>
          </tr>

          <tr>
            <td class="class_name">CPSC 321</td>
            <td>Database Management</td>
            <td>3</td>
            <td>Waitlisted</td>
          </tr>
        </tbody>
      </table>

    <br/>
    <h4>Connect with Advisor</h4>
    <br/>

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Primary Advisor</h5>
        <h6 class="card-subtitle mb-2 text-muted"> Gina Sprint, Ph.D.</h6> 
        <p class="card-text"> 
          Assistant Professor of Computer Science <br/> 
          Email: sprint@gonzaga.edu <br/> 
          Phone: (509) 313-3535 <br/> 
          </p>
      </div>
    </div>

    <br/>

    <form>
      <div class="form-group">
      <label for="approval button"> <b> Have your registration plan approved by an advisor </b> </label>
      </div>

      <button type="request" class="btn btn-primary">Send request for plan approval</button>
    </form>

    <br/>

    <form>
        <div class="form-group">
          <label for="sendMessageToAdvisor"> <b>Send Message to Advisor </b> </label>
          <textarea class="form-control" id="sendMessageToAdvisor" rows="3"></textarea>
        </div>
        <button type="send" class="btn btn-primary">Send Message</button>
      </form>

    </div>  
    );
  };
  
  
  
  export default Status;
