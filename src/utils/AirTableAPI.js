import React from 'react';

const airTableAPI = () => {

var data = [];

//AirTable Api Documentation they provided, Copy/Paste. Aware of how it all works.
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: 'patdkNxehOKyxOMZu.403d4f860a370ac4bcf27aa56e1af70cb4a1f68f0e11573f18993dc8fce222eb'}).base('appmLn6gvyYRI63TT');
  
    base('Employee directory')
      .select({
        // Selecting the records in All employees:
        fields: ["Name", "Title", "Department"],
        view: "All employees"})
      .eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
        records.forEach(function(record) {
            console.log('Retrieved', record.get('Name'));
            let currentEmployee ={name:record.get('Name'), title:record.get('Title'), department:record.get('Department')};
            data.push(currentEmployee);
        });
  
      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
      console.log(data);
  }, function done(err) {
      if (err) { console.error(err); return; }
  });
  
  return data;
}

export default airTableAPI;