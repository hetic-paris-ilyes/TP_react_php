import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import Subscribe from './components/Subscribe';
import AddPost from './components/AddPost';
import PostsList from './components/PostsList';

const App: React.FC = () => {
  
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isValid, setIsValid] = useState<boolean>(false)
  const [type, setUse] = useState<string>('')
  const [responseData, setResponseData] = useState<string[]>([])

  // Write post
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [author, setNewAuthor] = useState<string>('authorcccc') 

  const data = new URLSearchParams({
    username: email,
    password: password,
    type: type,
    title: title,
    content: content,
    author: ""
  })

  const headers = new Headers({
    'Authorization': `Basic ${btoa(`${email}:${password}`)}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  })

  const response = () => {
    // if (email && password != '') {
      fetch('http://localhost:2345/', {
        method: 'POST',
        credentials: 'include',
        headers: headers,
        body: data,
        mode: 'cors',
      })
    .then(res => res.text())
    .then(data => {
      setResponseData(prev => [...prev, data])
      if (responseData != []) {
        console.log(responseData)}

      }
      ).catch(error => console.log(error));
    // }
  }

  useEffect(() => {
  response()
    console.log(isValid)
  }, [email, password] || [title])


  useEffect(() => {
    axios.get('http://localhost:2345/getPost.php')
    .then(res=> console.log(res.data))
    .catch(err => console.log(err))
  })

  return (


    <div className="App">
      <Subscribe setEmail={setEmail} setPassword={setPassword} email={email} password={password} setUse={setUse} type={type} />
      <Login setEmail={setEmail} setPassword={setPassword} email={email} password={password} setUse={setUse} />
      <AddPost setTitle={setTitle} setContent={setContent} setUse={setUse} />
      <PostsList />
    </div>

  );
}

export default App;
