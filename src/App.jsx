import { ToastContainer } from 'react-toastify';
import CategoryCont from './context/Category';
import { routes } from './Routes/Route'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <CategoryCont>
        {/* <NewArrvival> */}
        <Routes>
          {routes.map((item, index) => {
            const { path, element, children } = item;
            return (
              <Route path={path} element={element} key={index} />
            )
          })}
        </Routes>
        {/* </NewArrvival> */}
      </CategoryCont>
      <ToastContainer />
    </>
  )
}

export default App
