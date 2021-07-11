import react,{useState } from 'react';
import {useForm} from './useForm'


// we can use useState only with function componenets and not class component
//we cant call hooks inside loops , conditions, or nest functions
//takes initial value as first argument , can also take a fcuntion which returns the initial value and gets called only for the first time the componenet is rendered



function App() {
  const [count,setCount] = useState(10);
  const [{myCount1,myCount2},setMyCount] = useState({myCount1:1,myCount2:2})

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  

  const [values,handleChange] = useForm({email:'',password:''})



  return (  
  // <> <button onClick={() => setCount(currentCount => currentCount+2)}>
  //   count increment button</button>
  // <div>{count}</div></>










  // <> <button onClick={() => setMyCount(currentState => ({
  //             myCount1:currentState.myCount1 +3,
  //             myCount2:currentState.myCount2 +5

  // }))}>
  // count increment button</button>
  // <div>{myCount1}</div>
  // <div>{myCount2}</div></>








/* {<> <button onClick={() => setMyCount(currentState => ({
  ...currentState,//here i am putting initial value of the count object in new object so that the new objec t will have the initial value as well , as if not put then the key which is not updated using set its value gets lost
  myCount2:currentState.myCount2 +5

}))}>
count increment button</button>
<div>{myCount1}</div>
<div>{myCount2}</div></> }*/









/*<div>
  <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
  <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
</div>*/










<div>
  <input type="email" name="email" value={values.email} onChange={handleChange} />
  <input type="password" name="password" value={values.password} onChange={handleChange} />
</div>
  );
};

export default App;
