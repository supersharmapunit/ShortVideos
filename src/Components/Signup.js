import React,{useState, useEffect, useContext} from 'react';
import {AuthContext} from '../Context/AuthProvider';
function Signup() {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[error, setError] = useState('');
    const[loading, setLoading] = useState(true);
    let {signup}=useContext(AuthContext);


    let handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);

        let signupResponse = await signup(email, password);
        console.log(signupResponse);
        let uid = signupResponse.user.uid;
        setLoading(false);
    }

  return (
    <div>
        <form onSubmit= {handleSubmit}>
            <div>
                <label htmlFor="">UserName</label>
                <input type="name" value = {name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" value = {email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="password" value = {password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button type='submit' disabled={loading}>SignUp</button>
        </form>
    </div>
  )
}

export default Signup