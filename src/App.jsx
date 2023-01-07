import React from 'react'
import { AddAssignment} from './components';
import { UpdateAssignment } from './components/Assignment/UpdateAssignment';
import Home from './components/Welcome/Home'
import Navbar from './components/nav/Navbar';

const App = () => {
  return (
    <div>
      <Home/>
      <Navbar/>
    <AddAssignment />
    <UpdateAssignment/>
    
    </div>
  )
}

export default App