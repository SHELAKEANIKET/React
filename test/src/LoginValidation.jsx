import React, { useState } from 'react'

function LoginValidation() {

    const [user,setUser] = useState('')
    const [Password,setPassword] = useState('')
    const [usererr,setUsererr] = useState(false)
    const [passerr,setPasserr] = useState(false)

    function loginHandle(e){
        if(user.length < 3 || Password.length < 3){
            alert('plese enter correct values')
        }
        else{
            alert('all good')
        }
        e.preventDefault();

    }

    function userHandler(e){
        let item = e.target.value;

        if(item.length < 3){
            setUsererr(true)
        }
        else{
            setUsererr(false)
        }

        setUser(item)
    }

    function passwordHandler(e){
        let item = e.target.value;

        if(item.length < 3){
            setPasserr(true)
        }
        else{
            setPasserr(false)
        }

        setPassword(item)
    }

  return (
    <div>
      <h1>Login</h1>
      <form  onSubmit={loginHandle}>
        <input type="text" placeholder='Enter UserID' onChange={userHandler}/> 
        {
            usererr
            ?
            <span>User Not Valid</span>
            :
            null
        }
        <br />
        <br />
        <input type="text" placeholder='Enter Password' onChange={passwordHandler}/>
        {
            passerr
            ?
            <span>Password Not Valid</span>
            :
            null
        }
        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default LoginValidation
