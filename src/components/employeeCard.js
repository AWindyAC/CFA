import React from 'react'

function EmployeeCard() {
  return (
    <div>
        <div className='EmployeeCard' style={{margin:'1rem', alignItems:'center'}}>
            <img className= 'employee-pic' src=""/>
          <h3 style={{color:'white'}}>{employeeData.name}</h3>
          <span class="label label-1">{employeeData.title}</span><br></br>
          <span class="label label-2">{employeeData.department[0]}</span>
          {employeeData.department[1] ? <span class="label label-3">{employeeData.department[1]}</span> : <></> }
        </div>
    </div>
  )
}

export default EmployeeCard
