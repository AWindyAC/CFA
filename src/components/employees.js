import React, { useEffect, useState } from "react";
import EmployeeCard from "./employeeCard";
import airTableAPI from "../utils/AirTableAPI";

function Employees() {
  const [employeesData, setEmployeesData] = useState([]);

  //AirTable Api Documentation they provided, Copy/Paste. Aware of how it all works.
  var Airtable = require("airtable");
  var base = new Airtable({
    apiKey:
      "patdkNxehOKyxOMZu.403d4f860a370ac4bcf27aa56e1af70cb4a1f68f0e11573f18993dc8fce222eb",
  }).base("appmLn6gvyYRI63TT");

  base("Employee directory")
    .select({
      // Selecting the records in All employees:
      fields: ["Name", "Title", "Department"],
      view: "All employees",
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
        const data = records.map(function (record) {
          console.log("Retrieved", record.get("Name"));
          let currentEmployee = {
            name: record.get("Name"),
            photo: record.get("Photo"),
            title: record.get("Title"),
            department: record.get("Department"),
          };
          return currentEmployee;
        });
        setEmployeesData(data);

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );

  return (
    <div>
      <div className="">
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "white" }}>Meet the Team</h1>
          <br />
        </div>
        <div className="employeeGrid">
          {/* Looping through each record in our table and displaying the data */}
            {employeesData.map((employeeData, i) => (
              <EmployeeCard key={i} employeeData={employeeData}/>
            ))}
        </div>
        {/* Manually entering employees for now. Hoping to use Airtable API to auto fill this area with the database and style it. */}
      </div>
    </div>
  );
}

export default Employees;
