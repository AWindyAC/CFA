import React from 'react'

function Uniforms() {
  return (
    <div className='section-white container-fluid'>
        <div className=''>
            <div className='uniform-body'>
                <h1>Uniforms</h1>
                <p>
                  <b>Requirements for Uniform Requests</b>
                  <ul>
                    <li className='body-list'>Replacements are unifroms that are <b>damaged, stained snagged, change of size, or worn-out</b></li>
                    <li>In order to receive a replacement, you will have to upload a photo for the damaged item that you would like replaced.</li>
                    <li>Old uniforms <b>must</b> be disposed of.</li>
                    <li>Promotion uniforms are for those who have moved to a different position and need a new item. Typically they will be ordered by upper management.</li>
                    <li>Additional uniforms are to be paid out of pocket. It can be paid for with cash or credit, just ask a Crew Leader or above to help you with</li>
                    <li>Once paid for, please upload a photo of the receipt to complete your order.</li>
                  </ul>

                  <b>Remember, this is a request and as long as the request meets the requirements, it will be fulfilled. Please be mindful that our restaraunt has a monthly budget for uniforms and that requests are fulfilled within 10 business days.</b>
                </p>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSfn5A7dc76ll5UcQpgfZP-7vwsIiJr6czFdqoEFUyiNf2fNBQ/viewform' target='_blank'><button className='uniform-button'>Order more uniforms</button></a>
            </div>
        </div>
    </div>
  )
}

export default Uniforms
