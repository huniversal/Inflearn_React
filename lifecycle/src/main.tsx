import { createRoot } from 'react-dom/client'
// import AppClass from './AppClass.tsx'
import App from "./App"

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    // <AppClass />
    <App />
  // </StrictMode>,
)
