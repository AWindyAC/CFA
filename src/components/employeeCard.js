import React from 'react'

const EmployeeCard = ({ employeeData }) => {
  return (
    <div>
        <div className='EmployeeCard' style={{margin:'1rem', alignItems:'center'}}>
            <img className= 'employee-pic' src=""/>
            <h3 style={{color:'white'}}>{employeeData.name}</h3>
            <span class="label label-1">Director</span>
            <span class="label label-2">FOH</span>
            <span class="label label-3">BOH</span>
            <p style={{color:'white'}}>!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusamus iure quae deleniti veniam possimus</p>
        </div>
    </div>
  )
}

export default EmployeeCard
