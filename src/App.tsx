
import {useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Technologies from "./components/Technologies";
import Stack from "./components/Stack";


interface Technology {
    id: number;
    name: string;
    category: string; 
    description: string;
    icon: string;
rating : number;
difficulty: string;
badge: string;
}

const App = () => {
  const [stack, setStack]= useState <Technology[]>([]);

const addToStack = (technology : Technology)=>{
  const alreadyAdded = stack.some(
    (item) => item.id === technology.id
  );
if(alreadyAdded){
  toast.warning (
    `${technology.name} is already in your stack`
  );
  return;
}
setStack ([...stack, technology]);

toast.success(`${technology.name} added to your stack `
  
);
};
const removeFromStack = (technology : Technology)=> {
   setStack(
    stack.filter((item)=> item.id !== technology.id)
   );
   toast.info(`${technology.name} removed from your stack `

   );
  };
  // Remove all technologies
  const removeAll= () => {
    if(stack.length === 0){
      toast.info ("Your Stack is already empty");
      return;
    }
    setStack([]);
    toast.info("All technologies removed from your stack");
  };

  return (
    <>
    <Nav/>
     <Banner/>
     <main>
     <div className="grid grid-cols-1 lg:grid-cols-[1fr_190px]">

      <Technologies 
      stack={stack}
      onAdd={addToStack}/>
     
   
      
      <Stack
      stack={stack}
      onRemove={removeFromStack}
      onRemoveAll={removeAll}/></div></main>
      < ToastContainer
      position="top-right"
      autoClose={2500}/>
    </>
  )
};

export default App;
