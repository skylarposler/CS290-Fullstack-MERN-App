import React, { useState } from 'react';
import StaffRow from "../components/StaffRow.js";

function StaffPage() {

    const [results, setResults] = useState([])
    const getResults = () => {
        fetch("https://randomuser.me/api/?results=10")
            .then((response) => response.json())
            .then((response) => {
                setResults(response.results);
            })
            .catch(() =>{
                alert("Oops! Something went wrong! We'll work to fix it right away!")
            });
    };

    return (
        <>
        <h2>Staff</h2>
        <article>
            <p>
                <button id="fromServer" onClick={getResults} value="find">Find</button>
                &nbsp; ten of our wonderful staff members  to assist you!
            </p>

            <h3>Available Staff:</h3>
            <table>
                <caption>Pick your favorite!</caption>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name/Email</th>
                        <th>Phone</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((employee, idx) => <StaffRow employee={employee} key={idx} />)}
                </tbody>
            </table>
        </article>
        </>
    );
}

export default StaffPage;