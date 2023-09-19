import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import Home from './components/home'
import New from './components/new-recipe'
import Edit from './components/edit-recipe'
import { createContext, useState } from 'react'
import View from './components/view-recipe'

export const selectedRecipeContext = createContext()

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState()
  return (
    <BrowserRouter>
      <selectedRecipeContext.Provider
        value={{ selectedRecipe, setSelectedRecipe }}
      >
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='new' element={<New />} />
            <Route path='edit' element={<Edit />} />
            <Route path='view' element={<View />} />
            {/* <Route path="blogs" element={ <Blogs /> } />
          <Route path="contact" element={ <Contact /> } /> */}
            <Route path='*' element={<div>No Page</div>} />
          </Route>
        </Routes>
      </selectedRecipeContext.Provider>
    </BrowserRouter>
  )
}

export default App
