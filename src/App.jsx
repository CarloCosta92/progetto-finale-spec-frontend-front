import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DefaultLayout from './layout/DeaultLayout'
import Cars from './pages/Cars'
import { GlobalProvider } from './context/GlobalContext'
import CarDetail from './pages/CarDetail'

function App() {

  return (
    <BrowserRouter>
      <GlobalProvider>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<Cars />} />
            <Route path="/cars/:id" element={<CarDetail />} />
          </Routes>
        </DefaultLayout>
      </GlobalProvider>
    </BrowserRouter>
  )
}

export default App
