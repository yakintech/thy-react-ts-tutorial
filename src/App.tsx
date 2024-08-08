import { SnackbarProvider } from 'notistack'
import Router from './routes/routes'

function App() {
  return <>
   <SnackbarProvider />
    <Router/>
  </>
}

export default App













// <Routes>
// <Route path='/' element={<Home />} />
// <Route path='/about' element={<About />} />
// <Route path='/contact' element={<Contact />} />
// <Route path='/users' element={<List />} />
// <Route path='/users/:id' element={<Detail />} />
// </Routes>