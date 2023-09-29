import React, {useEffect, useState} from 'react';


// var airtable = require('airtable');
// airtable.configure({
//     endpointUrl: 'https://api.airtable.com',
//     apiKey: 'patdkNxehOKyxOMZu.403d4f860a370ac4bcf27aa56e1af70cb4a1f68f0e11573f18993dc8fce222eb'
// });
// var base = airtable.base('appmLn6gvyYRI63TT');

function Airtable() {
    // const [employees, setEmployees] = useState([]);

    // //Getting the employee database from Airtable
    //   useEffect(() => {
    //   base("Employee directory")
    //   .select({ view: "All employees"})
    //   .eachPage((records, fetchNextPage) => {
    //     setEmployees(records);
    //     fetchNextPage();
    //   });
    // }, []);
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'patdkNxehOKyxOMZu.403d4f860a370ac4bcf27aa56e1af70cb4a1f68f0e11573f18993dc8fce222eb'}).base('appmLn6gvyYRI63TT');

base('Employee directory').select({
    // Selecting the first 3 records in All employees:
    maxRecords: 3,
    view: "All employees"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});
  return (
    <div>
        {/* employees.map(employee => ( EmployeeComponent photo={photo} name={name} title={title} department={department})) */}
    </div>
  )
}

export default Airtable
