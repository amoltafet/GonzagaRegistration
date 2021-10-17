import React from "react";
import '../style.css';
import { useHistory } from "react-router-dom";


const Home = () => {

  const history = useHistory();

  return (
    <div>
    <nav class="navbar">
        <a class="navbar-brand" onClick={() => { history.push('/status') }}>
            <img src="./img/bulldog.png" width="150" height="100" alt=""/>
            <img src="./img/gonzaga_logo.png" width="300" height="100" alt=""/>
          </a>
    </nav>

    <div class="list-group center">
        
        <button type="button" class="btn btn-primary" >
            <div class="float-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-bookmark-check" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                  </svg>
            </div>
            <div class = "expanded-text">
                <h2 class="short-name">View Status</h2>
                <span class="longer-name">View Registration Status, update student term data, and
                    complete pre-registration requirments</span>
            </div>
        </button>
        <button type="button" class="btn btn-primary" class="button" onClick={() => { history.push('/create') }}>
            <div class="float-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-pencil icon-blue" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                </svg>
            </div>
            <div class="expanded-text">
                <h2 class="short-name">Register</h2>
                <span class="longer-name">View Registration Status, update student term data, and
                    complete pre-registration requirments</span>
            </div>
            
        </button>
    
        <button class="btn btn-primary button" onClick={() => { history.push('/recordList') }}>
            <div class="float-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                </svg>
            </div>
            <div class = "expanded-text">
                <h2 class="short-name">Browse All Classes</h2>
                <span class="longer-name">Class Descriptions</span>
            </div>
        </button>
      </div>
    </div>
  );
};



export default Home;