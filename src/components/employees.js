import React, { useEffect, useState } from "react";
import EmployeeCard from "./employeeCard";

function Employees() {
  const [employeesData, setEmployeesData] = useState([]);

  const Airtable = require("airtable");
  const base = new Airtable({
    apiKey:
      "pat9Ta5mPLqZiE3gt.57a08925d5f2630489cc04cec28fe22a38b7593f53de573e2675fd437151aa7d",
  }).base("appvtPVdJIF7ODnQF");

  useEffect(() => {
    base("Employee directory")
      .select({
        fields: ["Full Name", "Job Title", "Department"],
        view: "All employees",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.
          const data = records.map(function (record) {
            let currentEmployee = {
              name: record.get("Full Name") ?? "",
              title: record.get("Job Title") ?? "",
              department: record.get("Department") ?? [],
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
  }, []);

  return (
    <div>
      <div className=''>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "white" }}>Meet the Team</h1>
          <br />
        </div>
        <div className='employeeGrid'>
          {/* Looping through each record in our table and displaying the data */}
          {employeesData.map((employeeData, i) => (
            <EmployeeCard key={i} employeeData={employeeData} />
          ))}
        </div>
        {/* Manually entering employees for now. Hoping to use Airtable API to auto fill this area with the database and style it. */}
      </div>
    </div>
  );
}

export default Employees;
