import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { Router } from './routes'
import { SidebarProvider } from './context/SidebarContext'

export function App() {
  return (
    <>
      <BrowserRouter>
        <SidebarProvider>
          <Router />
        </SidebarProvider>  
      </BrowserRouter>
    </>
  )
}