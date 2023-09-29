import React, { useEffect, useState} from 'react';
import EmployeeCard from './employeeCard';

function Employees() {
  const [employees, setEmployees] = useState([]);
  var data = [];


  var Airtable = require('airtable');
  var base = new Airtable({apiKey: 'patdkNxehOKyxOMZu.403d4f860a370ac4bcf27aa56e1af70cb4a1f68f0e11573f18993dc8fce222eb'}).base('appmLn6gvyYRI63TT');
  
  base('Employee directory').select({
      // Selecting the first 3 records in All employees:
      fields: ["Name", "Title", "Department"],
      view: "All employees"
  }).eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.
  
      records.forEach(function(record) {
          console.log('Retrieved', record.get('Name'));
          let employee = {name:record.get('Name'), title:record.get('Title'), department:record.get('Department')};
          data.push(employee);
          console.log(data);
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
      <div className=''>
        <div style={{textAlign: 'center'}}>
        <h1 style={{color:'white'}} >Meet the Team</h1><br/>
        </div>
        <div className='employeeGrid'>
          {/* Looping through each record in our table and displaying the data */}
          { data.map(employee => (
            <EmployeeCard key={employee._id} employee={employee}/>
          ))}
        </div>
        {/* Manually entering employees for now. Hoping to use Airtable API to auto fill this area with the database and style it. */}
        <div className='employeeGrid'>
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/370482280_679998704147055_7900385916676630965_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_ohc=zxzV1Haj4M8AX8nS6GS&_nc_oc=AQmagazdiI5947ANO9NKCdR-29oQzpsv3no_3AHV2u1BDNVSh9hVhsbzWeao74G92BI&_nc_ht=scontent-mia3-2.xx&oh=00_AfCYGO7o-RuQdVg6skS0JpFwVJ9dc3mVzK0YjpASYImULQ&oe=651B6640"/>
                <h3 style={{color:'white'}}>Paige Newnum</h3>
                <span class="label label-1">Service Leader</span>
                <span class="label label-2">FOH</span>
                <p style={{color:'white'}}>!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusamus iure quae deleniti veniam possimus</p>
            </div>
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/357115253_648866460593613_489228604305889527_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=49d041&_nc_ohc=2IKQXP2gfZAAX_qv_ny&_nc_ht=scontent-mia3-1.xx&oh=00_AfDAzMBkAQo64EjtIQXp1zlgJqZ98C3VmZ7pzSAi5G1GYA&oe=651CD452"/>
                <h3 style={{color:'white'}}>Alexis Owens</h3>
                <span class="label label-1">Director</span>
                <span class="label label-2">FOH</span>
                <p style={{color:'white'}}>!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusamus iure quae deleniti veniam possimus</p>
            </div>
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/355149273_643756151104644_4738240036955374864_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5614bc&_nc_ohc=G6MTa5BB9dEAX_mM0yw&_nc_ht=scontent-mia3-1.xx&oh=00_AfDzZhq4K7QlJvEkPGiDExxgtKGPzKz3To3qOz9iaz0LpA&oe=651D152C"/>
                <h3 style={{color:'white'}}>Chrystal Ramos</h3>
                <span class="label label-1">Crew Leader</span>
                <span class="label label-2">FOH</span>
                <p style={{color:'white'}}>!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusamus iure quae deleniti veniam possimus</p>
            </div>
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/356135037_648174820662777_1753668623845110672_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5614bc&_nc_ohc=gBkkFDMsi6MAX8fzquH&_nc_ht=scontent-mia3-2.xx&oh=00_AfDOhj6aIy5MfH-v7vTtbRNHvoUKdcAXAAGDxnxHUaUsgA&oe=651CB0B9"/>
                <h3 style={{color:'white'}}>Tory Thompson</h3>
                <span class="label label-1">Service Leader</span>
                <span class="label label-2">FOH</span>
                <span class="label label-3">BOH</span>
                <p style={{color:'white'}}>!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusamus iure quae deleniti veniam possimus</p>
            </div>
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/363801985_665193128960946_7483686927103942483_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_ohc=UHr3xwKIO0UAX8RFm5Y&_nc_oc=AQmHu2zmP_YL1-OYcMElSKIokEMU5vRyxL7AA0L7wlbFOjXcPCnMGWv0k-Kkh30ZyFw&_nc_ht=scontent-mia3-2.xx&oh=00_AfDzRlNAG1ho57NKwq5kPgKcX4LfQSnG1UdvYscnFY67Og&oe=651B3D04"/>
                <h3 style={{color:'white'}}>Kaytie Bass</h3>
                <span class="label label-1">Service Leader</span>
                <span class="label label-2">FOH</span>
                <span class="label label-3">BOH</span>
                <p style={{color:'white'}}>!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusamus iure quae deleniti veniam possimus</p>
            </div>
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/363361949_666869958793263_8719700391611078372_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_ohc=9_F63HRkvF0AX_PzdSD&_nc_ht=scontent-mia3-2.xx&oh=00_AfD2OdmxPOvBFsFX--_GkiIUEK94vMsVo_98xPgxrWXtOQ&oe=651D2583"/>
                <h3 style={{color:'white'}}>Alyssa Hammaty</h3>
                <span class="label label-1">Director</span>
                <span class="label label-2">FOH</span>
                <span class="label label-3">BOH</span>
                <p style={{color:'white'}}>!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusamus iure quae deleniti veniam possimus</p>
            </div>
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/362233827_661860149294244_5133333376690484236_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=49d041&_nc_ohc=q-BOEnt-F6IAX9vdssI&_nc_ht=scontent-mia3-1.xx&oh=00_AfCYBNP-wA3m8q__aArRSvPmZc12tDUKlNKb6JS6C8jF0A&oe=651D2415"/>
                <h3 style={{color:'white'}}>Brock Wolfe</h3>
                <span class="label label-1">Trainer</span>
                <span class="label label-2">FOH</span>
                <p style={{color:'white'}}>!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusamus iure quae deleniti veniam possimus</p>
            </div>
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/385354346_18198466762275120_4085622673056527785_n.jpg?stp=dst-jpg_s640x640&_nc_cat=111&ccb=1-7&_nc_sid=49d041&_nc_ohc=elKrP_DZYeoAX9MMeVw&_nc_ht=scontent-mia3-1.xx&oh=00_AfDGiSME5ntN-YBroUVa3hrr96ymTbDXCC35xgCE7sknYw&oe=651C484A"/>
                <h3 style={{color:'white'}}>Jacob Babington</h3>
                <span class="label label-1">Director</span>
                <span class="label label-3">BOH</span>
                <p style={{color:'white'}}>!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusamus iure quae deleniti veniam possimus</p>
            </div> 
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/356079118_645961500884109_1507491270647107012_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=49d041&_nc_ohc=-l95WYQq5XsAX9VFTRe&_nc_ht=scontent-mia3-1.xx&oh=00_AfBcisXZSTahPa6v1kTKfR8AxgN3n124si2B26BohOQTow&oe=651C9B14"/>
                <h3 style={{color:'white'}}>Michael Boening</h3>
                <span class="label label-1">Trainer</span>
                <span class="label label-3">BOH</span>
                <p style={{color:'white'}}>!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusamus iure quae deleniti veniam possimus</p>
            </div> 
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/362305989_663275845819341_2022373224967863745_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5614bc&_nc_ohc=9f1DXdc8Q4IAX8PCQlY&_nc_ht=scontent-mia3-2.xx&oh=00_AfDdFAYhkmxDA2eVxDKP3XKxJBkVVO9O7B6QG6mRpvan3A&oe=651C6EDC"/>
                <h3 style={{color:'white'}}>Miller Clure</h3>
                <span class="label label-1">Trainer</span>
                <span class="label label-3">BOH</span>
                <p style={{color:'white'}}>!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusamus iure quae deleniti veniam possimus</p>
            </div> 
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/341110222_3570215296556809_1842150864225263886_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=49d041&_nc_ohc=mIRNrXQE1o0AX9Jf6I-&_nc_ht=scontent-mia3-2.xx&oh=00_AfAPqMMFEYkUMdfxfFyP0zBSeGO8E1zho3UkknCAXr_tAA&oe=651BDF14"/>
                <h3 style={{color:'white'}}>Olivia Caruso</h3>
                <span class="label label-1">Trainer</span>
                <span class="label label-2">FOH</span>
                <p style={{color:'white'}}>!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusamus iure quae deleniti veniam possimus</p>
            </div> 
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/367397880_676672004479725_8684605110063693644_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_ohc=MuiARxThQfoAX_t5MgU&_nc_ht=scontent-mia3-2.xx&oh=00_AfDYw_Rfo9bTwICyYfsRed-t1vbOu8SveJV8likiAxV2EA&oe=651C9A61"/>
                <h3 style={{color:'white'}}>Jerry Williams</h3>
                <span class="label label-1">Crew Leader</span>
                <span class="label label-3">FOH</span>
                <p style={{color:'white'}}>!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusamus iure quae deleniti veniam possimus</p>
            </div> 
          </div>
      </div>
    </div>
  )
}

export default Employees
