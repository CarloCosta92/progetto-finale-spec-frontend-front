import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DefaultLayout from './layout/DeaultLayout'
import Cars from './pages/Cars'
import { GlobalProvider } from './context/GlobalContext'

function App() {

  return (
    <BrowserRouter>
      <GlobalProvider>
        <DefaultLayout>
          <Routes>
            <Route path='/' element={<Cars />} />
          </Routes>
        </DefaultLayout>
      </GlobalProvider>
    </BrowserRouter>
  )
}

export default App
