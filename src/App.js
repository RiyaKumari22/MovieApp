
import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Home'
import Error from './Error'
import SingleMovie from './SIngleMovie'
import './App.css'
function App() {
  return (
	<>
	<BrowserRouter>
	<Routes>
		<Route path='/' element={<Home/>}/>
		<Route path='movie/:id' element={<SingleMovie/>}/>
		<Route path='*' element={<Error/>}/>

	</Routes>
	</BrowserRouter>	
	</>
  )
}

export default App
