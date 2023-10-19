import React from 'react'

function PathForGrowth() {
  return (
    <div className='bg-white text-grey text-center'>
      <h1>Path For Growth</h1>
      <div className='container-fluid growth-container'>
        <div className='col-xl-6 growthDiv'>
          <h3>Trainee/New Hire</h3>
          <ul>
            <li>Onboarding and training</li>
          </ul>
        </div>
        <div className='col-xl-6 growthDiv'>
          <h3>Team Member</h3>
          <ul>
            <li>Regular store operations. You've successfully joined the CFA team!</li>
          </ul>
        </div>
        <br></br>
        <div className='col-xl-6 growthDiv'>
          <h3>Trainer</h3>
          <ul>
            <li>Training sessions with trainees, new hires or other trainers to improve your skills.</li>
          </ul>
        </div>
        <div className='col-xl-6 growthDiv'>
          <h3>Service Leader</h3>
          <ul>
            <li>You are a senior trainer!</li>
          </ul>
        </div>

        <div className='col-xl-6 growthDiv'>
          <h3>Crew Leader</h3>
          <ul>
            <li>You are running shifts now!</li>
          </ul>
        </div>
        <div className='col-xl-6 growthDiv'>
          <h3>Director</h3>
          <ul>
            <li>You have been promoted to Director of a specific area of our restaraunt operations!</li>
          </ul>
        </div>
        <div>
        <p><b>If you are interested in moving up to a new position, let a leader know and they will help you to learn the requirements.</b></p>
        </div>
      </div>
    </div>
  )
}

export default PathForGrowth
