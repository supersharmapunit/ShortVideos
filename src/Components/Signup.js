import React, { useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { database, storage } from './firebase'
import { ref, getDownloadURL, uploadBytesResumable } from '@firebase/storage'
import { addDoc, serverTimestamp } from 'firebase/firestore';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);
    let { signup } = useContext(AuthContext);
    let pictureFile;


    let handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        let signupResponse = await signup(email, password);
        console.log(signupResponse);
        let uid = signupResponse.user.uid;
        setLoading(false);
    
        console.log(file);
        if(file == null) return;
        console.log(file);
        const storageRef = ref(storage, `/Users/${uid}/ProfileImage/`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on("state_changed", (snapshot)=>{
            console.log(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100));
        }, (err)=>{
            setError(err);
            setTimeout(() => {
                setError('')
            }, 2000);
            setLoading(false);
        },async ()=>{
            let uploadedFileURL = await getDownloadURL(uploadTask.snapshot.ref);
            const docData = {
                userId : uid,
                username: name,
                email : email,
                createdAt : serverTimestamp(),
                postId :[],
                profileURL : uploadedFileURL
            }
            let docResponse = await addDoc(database.user, docData);
            console.log(docResponse.id);
        })


    }

    let handleFileSubmit = (e) => {
        console.log(e);
        pictureFile = e.target.files[0];

        if (pictureFile != null) {
            setFile(pictureFile);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">UserName</label>
                    <input type="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="profile">Profile image</label>
                    <input type="file" accept='image/*' onChange={handleFileSubmit} />
                </div>
                <button type='submit' disabled={loading}>SignUp</button>
            </form>
        </div>
    )
}

export default Signup