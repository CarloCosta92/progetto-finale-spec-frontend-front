import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DefaultLayout from './layout/DeaultLayout'
import Cars from './pages/Cars'

function App() {

  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path='/' element={<Cars />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  )
}

export default App
