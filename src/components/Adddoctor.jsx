import React from 'react'

function Adddoctor() {
  return (
    <div>
        <h1>Add doctor</h1>
        <div className="formcontainer">
          <form action="">
            <input type="text" placeholder='enter doctor name'/>
            <input type="text" placeholder='enter age '/>
            <select name="" id="">
                <option value="">FEMALE</option>
                <option value="">MALE</option>
            </select>
            <input type="text" placeholder='enter specilization '/>
            <input type="text" placeholder='enter salary '/>
            <button>Add doctor</button>
          </form>
        </div>
    </div>
  )
}

export default Adddoctor