import React, {useState} from "react";
import "./Home.css";
import Form from "./Form";
import Table from './table';

const DUMMY_DATA = [];
const Home = () => {
    const [data, setNewData] = useState(DUMMY_DATA);
    const formDataHandler = userData => {
        setNewData((prevData) => {
            return [userData, ...prevData];
        });
    };

    function myFunction() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      }

    return(
        <div className="container">
        <Form onSubmitData = {formDataHandler} />
        <h2>List Of Users : </h2>
        <input className="form-group" type="text" id="myInput" onChange= {myFunction} placeholder="Search for names..."></input>

        <table className="table table-striped" id="myTable">
            <thead className="thead-dark">
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                </tr>
            </thead>
            <tbody>
                <Table item = {data} />
            </tbody>
        </table>
        </div>
    )
}

export default Home;
