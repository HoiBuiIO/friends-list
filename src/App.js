import React, { Children } from 'react';
import './App.css';

const PersonList = () =>{
 

const people = [
  {
    img: 22,
    name: 'John',
    job:'Developer'
  },
  {
    img: 28,
    name: 'Bob',
    job:'Designer'
  },
  {
    img: 23,
    name: 'Kevil',
    job:'Artist'
  }
];
return(
  <section>
  <Person person={people[0]}/>;
  <Person person={people[1]}>
  Don't cry because it's over, smile because it happened
    </Person>;
  <Person person={people[2]}/>;
  </section>

);
};

const Person = props =>{
  const {img, name, job } = props.person;
const {children} = props;
  const url = `https://randomuser.me/api/portraits/med/men/${img}.jpg`;
  return (<div className="person">
    <img src={url} alt="" />
    <div>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </div>
  </div>);
};


const App = ()=>(<PersonList/>)

export default App;
