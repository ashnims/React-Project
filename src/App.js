import './App.css';
import Data from './container/Data';
import SingleQuestion from './container/Question';
import {useState} from 'react';

function App() {
  const [question,setQuestion]=useState(Data);
  return (
   <main>
     <div className="container">
       <h1>Question and ans about login</h1>
       <section className="info">
         {question.map((question)=>{
           return <SingleQuestion key={question.id} {...question}/>
         })}
       </section>
     </div>
   </main>
  );
}

export default App;
