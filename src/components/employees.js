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
          {/* {employeesData.map((employeeData, i) => (
            <EmployeeCard key={i} employeeData={employeeData} />
          ))} */}
        </div>
        <div style={{ textAlign: "center"}}>
          <h2 style={{ color: "white"}}>Directors</h2>
        </div>
        <div className='employeeGrid'>
        <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/370482280_679998704147055_7900385916676630965_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_ohc=zxzV1Haj4M8AX8nS6GS&_nc_oc=AQmagazdiI5947ANO9NKCdR-29oQzpsv3no_3AHV2u1BDNVSh9hVhsbzWeao74G92BI&_nc_ht=scontent-mia3-2.xx&oh=00_AfCYGO7o-RuQdVg6skS0JpFwVJ9dc3mVzK0YjpASYImULQ&oe=651B6640"/>
                <h3 style={{color:'white'}}>Aaron Kline A.K.</h3>
                <span class="label label-1">Executive Director</span><br/>
                <span class="label label-2">FOH</span>
            </div>
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/357115253_648866460593613_489228604305889527_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=49d041&_nc_ohc=2IKQXP2gfZAAX_qv_ny&_nc_ht=scontent-mia3-1.xx&oh=00_AfDAzMBkAQo64EjtIQXp1zlgJqZ98C3VmZ7pzSAi5G1GYA&oe=651CD452"/>
                <h3 style={{color:'white'}}>Melissa Bills</h3>
                <span class="label label-1">Executive Director</span><br/>
                <span class="label label-2">FOH</span>
            </div>
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/355149273_643756151104644_4738240036955374864_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5614bc&_nc_ohc=G6MTa5BB9dEAX_mM0yw&_nc_ht=scontent-mia3-1.xx&oh=00_AfDzZhq4K7QlJvEkPGiDExxgtKGPzKz3To3qOz9iaz0LpA&oe=651D152C"/>
                <h3 style={{color:'white'}}>Lex Broomfield</h3>
                <span class="label label-1">Food Safety Director</span><br/>
                <span class="label label-2">FOH</span>
                <span class="label label-3">BOH</span>
            </div>
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/356135037_648174820662777_1753668623845110672_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5614bc&_nc_ohc=gBkkFDMsi6MAX8fzquH&_nc_ht=scontent-mia3-2.xx&oh=00_AfDOhj6aIy5MfH-v7vTtbRNHvoUKdcAXAAGDxnxHUaUsgA&oe=651CB0B9"/>
                <h3 style={{color:'white'}}>Alexis Owens</h3>
                <span class="label label-1">Drive-Thru Director</span><br/>
                <span class="label label-2">FOH</span>
            </div>
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/363801985_665193128960946_7483686927103942483_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_ohc=UHr3xwKIO0UAX8RFm5Y&_nc_oc=AQmHu2zmP_YL1-OYcMElSKIokEMU5vRyxL7AA0L7wlbFOjXcPCnMGWv0k-Kkh30ZyFw&_nc_ht=scontent-mia3-2.xx&oh=00_AfDzRlNAG1ho57NKwq5kPgKcX4LfQSnG1UdvYscnFY67Og&oe=651B3D04"/>
                <h3 style={{color:'white'}}>Candace Fish</h3>
                <span class="label label-1">Marketing Director</span><br/>
                <span class="label label-2">FOH</span>
                <span class="label label-3">BOH</span>
            </div>
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/363361949_666869958793263_8719700391611078372_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_ohc=9_F63HRkvF0AX_PzdSD&_nc_ht=scontent-mia3-2.xx&oh=00_AfD2OdmxPOvBFsFX--_GkiIUEK94vMsVo_98xPgxrWXtOQ&oe=651D2583"/>
                <h3 style={{color:'white'}}>Morgan Dorn</h3>
                <span class="label label-1">Director</span><br/>
                <span class="label label-2">FOH</span>
                <span class="label label-3">BOH</span>
            </div>
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/362233827_661860149294244_5133333376690484236_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=49d041&_nc_ohc=q-BOEnt-F6IAX9vdssI&_nc_ht=scontent-mia3-1.xx&oh=00_AfCYBNP-wA3m8q__aArRSvPmZc12tDUKlNKb6JS6C8jF0A&oe=651D2415"/>
                <h3 style={{color:'white'}}>Zach Tuetken</h3>
                <span class="label label-1">Director</span><br/>
                <span class="label label-3">BOH</span>
            </div>
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/385354346_18198466762275120_4085622673056527785_n.jpg?stp=dst-jpg_s640x640&_nc_cat=111&ccb=1-7&_nc_sid=49d041&_nc_ohc=elKrP_DZYeoAX9MMeVw&_nc_ht=scontent-mia3-1.xx&oh=00_AfDGiSME5ntN-YBroUVa3hrr96ymTbDXCC35xgCE7sknYw&oe=651C484A"/>
                <h3 style={{color:'white'}}>Jacob Babington</h3>
                <span class="label label-1">Director</span><br/>
                <span class="label label-3">BOH</span>
            </div>
          </div>
          <div style={{ textAlign: "center"}}>
            <h2 style={{ color: "white"}}>Crew Leaders</h2>
          </div>
          <div className="employeeGrid">
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/356079118_645961500884109_1507491270647107012_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=49d041&_nc_ohc=-l95WYQq5XsAX9VFTRe&_nc_ht=scontent-mia3-1.xx&oh=00_AfBcisXZSTahPa6v1kTKfR8AxgN3n124si2B26BohOQTow&oe=651C9B14"/>
                <h3 style={{color:'white'}}>Kaylee Huffman</h3>
                <span class="label label-1">Crew Leader</span><br/>
                <span class="label label-2">FOH</span>
            </div> 
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/362305989_663275845819341_2022373224967863745_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5614bc&_nc_ohc=9f1DXdc8Q4IAX8PCQlY&_nc_ht=scontent-mia3-2.xx&oh=00_AfDdFAYhkmxDA2eVxDKP3XKxJBkVVO9O7B6QG6mRpvan3A&oe=651C6EDC"/>
                <h3 style={{color:'white'}}>Alyssa Hamaty</h3>
                <span class="label label-1">Crew Leader</span><br/>
                <span class="label label-2">FOH</span>
            </div> 
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/341110222_3570215296556809_1842150864225263886_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=49d041&_nc_ohc=mIRNrXQE1o0AX9Jf6I-&_nc_ht=scontent-mia3-2.xx&oh=00_AfAPqMMFEYkUMdfxfFyP0zBSeGO8E1zho3UkknCAXr_tAA&oe=651BDF14"/>
                <h3 style={{color:'white'}}>Chrystal Ramos</h3>
                <span class="label label-1">Crew Leader</span><br/>
                <span class="label label-2">FOH</span>
            </div> 
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/367397880_676672004479725_8684605110063693644_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_ohc=MuiARxThQfoAX_t5MgU&_nc_ht=scontent-mia3-2.xx&oh=00_AfDYw_Rfo9bTwICyYfsRed-t1vbOu8SveJV8likiAxV2EA&oe=651C9A61"/>
                <h3 style={{color:'white'}}>Jerry Williams</h3>
                <span class="label label-1">Crew Leader</span><br/>
                <span class="label label-2">FOH</span>
            </div>
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/367397880_676672004479725_8684605110063693644_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_ohc=MuiARxThQfoAX_t5MgU&_nc_ht=scontent-mia3-2.xx&oh=00_AfDYw_Rfo9bTwICyYfsRed-t1vbOu8SveJV8likiAxV2EA&oe=651C9A61"/>
                <h3 style={{color:'white'}}>Talia Calusano</h3>
                <span class="label label-1">Crew Leader</span><br/>
                <span class="label label-2">FOH</span>
            </div>
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/367397880_676672004479725_8684605110063693644_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_ohc=MuiARxThQfoAX_t5MgU&_nc_ht=scontent-mia3-2.xx&oh=00_AfDYw_Rfo9bTwICyYfsRed-t1vbOu8SveJV8likiAxV2EA&oe=651C9A61"/>
                <h3 style={{color:'white'}}>Rachel Pladdys</h3>
                <span class="label label-1">Crew Leader</span><br/>
                <span class="label label-2">FOH</span>
            </div>
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/367397880_676672004479725_8684605110063693644_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_ohc=MuiARxThQfoAX_t5MgU&_nc_ht=scontent-mia3-2.xx&oh=00_AfDYw_Rfo9bTwICyYfsRed-t1vbOu8SveJV8likiAxV2EA&oe=651C9A61"/>
                <h3 style={{color:'white'}}>Maya Paiva</h3>
                <span class="label label-1">Crew Leader</span><br/>
                <span class="label label-2">FOH</span>
            </div>
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/367397880_676672004479725_8684605110063693644_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_ohc=MuiARxThQfoAX_t5MgU&_nc_ht=scontent-mia3-2.xx&oh=00_AfDYw_Rfo9bTwICyYfsRed-t1vbOu8SveJV8likiAxV2EA&oe=651C9A61"/>
                <h3 style={{color:'white'}}>Adam Harabe</h3>
                <span class="label label-1">Crew Leader</span><br/>
                <span class="label label-3">BOH</span>
            </div>
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/367397880_676672004479725_8684605110063693644_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_ohc=MuiARxThQfoAX_t5MgU&_nc_ht=scontent-mia3-2.xx&oh=00_AfDYw_Rfo9bTwICyYfsRed-t1vbOu8SveJV8likiAxV2EA&oe=651C9A61"/>
                <h3 style={{color:'white'}}>Luke Sasso</h3>
                <span class="label label-1">Crew Leader</span><br/>
                <span class="label label-3">BOH</span>
            </div>
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/367397880_676672004479725_8684605110063693644_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_ohc=MuiARxThQfoAX_t5MgU&_nc_ht=scontent-mia3-2.xx&oh=00_AfDYw_Rfo9bTwICyYfsRed-t1vbOu8SveJV8likiAxV2EA&oe=651C9A61"/>
                <h3 style={{color:'white'}}>Shane Eskew</h3>
                <span class="label label-1">Crew Leader</span><br/>
                <span class="label label-3">BOH</span>
            </div>
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/367397880_676672004479725_8684605110063693644_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_ohc=MuiARxThQfoAX_t5MgU&_nc_ht=scontent-mia3-2.xx&oh=00_AfDYw_Rfo9bTwICyYfsRed-t1vbOu8SveJV8likiAxV2EA&oe=651C9A61"/>
                <h3 style={{color:'white'}}>Omar Rivera</h3>
                <span class="label label-1">Crew Leader</span><br/>
                <span class="label label-3">BOH</span>
            </div>
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/367397880_676672004479725_8684605110063693644_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_ohc=MuiARxThQfoAX_t5MgU&_nc_ht=scontent-mia3-2.xx&oh=00_AfDYw_Rfo9bTwICyYfsRed-t1vbOu8SveJV8likiAxV2EA&oe=651C9A61"/>
                <h3 style={{color:'white'}}>Joe Mercado</h3>
                <span class="label label-1">Crew Leader</span><br/>
                <span class="label label-3">BOH</span>
            </div>
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/367397880_676672004479725_8684605110063693644_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_ohc=MuiARxThQfoAX_t5MgU&_nc_ht=scontent-mia3-2.xx&oh=00_AfDYw_Rfo9bTwICyYfsRed-t1vbOu8SveJV8likiAxV2EA&oe=651C9A61"/>
                <h3 style={{color:'white'}}>Erin Thornsbury</h3>
                <span class="label label-1">Crew Leader</span><br/>
                <span class="label label-3">BOH</span>
            </div>
            <div className='EmployeeCard'>
                <img className= 'employee-pic' src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/367397880_676672004479725_8684605110063693644_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_ohc=MuiARxThQfoAX_t5MgU&_nc_ht=scontent-mia3-2.xx&oh=00_AfDYw_Rfo9bTwICyYfsRed-t1vbOu8SveJV8likiAxV2EA&oe=651C9A61"/>
                <h3 style={{color:'white'}}>Greg Barker</h3>
                <span class="label label-1">Crew Leader</span><br/>
                <span class="label label-3">BOH</span>
            </div>
          </div>
          <div style={{ textAlign: "center"}}>
            <h2 style={{ color: "white"}}>Service Leaders</h2>
          </div>
          <div className='employeeGrid'>
          <div className='EmployeeCard'>
              <img className= 'employee-pic' src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/367397880_676672004479725_8684605110063693644_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_ohc=MuiARxThQfoAX_t5MgU&_nc_ht=scontent-mia3-2.xx&oh=00_AfDYw_Rfo9bTwICyYfsRed-t1vbOu8SveJV8likiAxV2EA&oe=651C9A61"/>
              <h3 style={{color:'white'}}>Kaytie Bass</h3>
              <span class="label label-1">Service Leader</span><br/>
              <span class="label label-3">FOH</span>
          </div>
          <div className='EmployeeCard'>
              <img className= 'employee-pic' src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/367397880_676672004479725_8684605110063693644_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_ohc=MuiARxThQfoAX_t5MgU&_nc_ht=scontent-mia3-2.xx&oh=00_AfDYw_Rfo9bTwICyYfsRed-t1vbOu8SveJV8likiAxV2EA&oe=651C9A61"/>
              <h3 style={{color:'white'}}>Paige Newnum</h3>
              <span class="label label-1">Service Leader</span><br/>
              <span class="label label-3">FOH</span>
          </div>
          <div className='EmployeeCard'>
              <img className= 'employee-pic' src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/367397880_676672004479725_8684605110063693644_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_ohc=MuiARxThQfoAX_t5MgU&_nc_ht=scontent-mia3-2.xx&oh=00_AfDYw_Rfo9bTwICyYfsRed-t1vbOu8SveJV8likiAxV2EA&oe=651C9A61"/>
              <h3 style={{color:'white'}}>Tory Thompson</h3>
              <span class="label label-1">Service Leader</span><br/>
              <span class="label label-3">FOH</span>
          </div>
          </div>
        {/* Manually entering employees for now. Hoping to use Airtable API to auto fill this area with the database and style it. */}
      </div>
    </div>
  );
}

export default Employees;
