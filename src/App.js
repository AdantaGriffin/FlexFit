import styles from './App.scss';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Root from './Components/Root/root';
import Home from './Components/Home/home';
import ItemsList from './Components/ItemsList/itemsList';
import Item from './Components/Items/item';

const appRouter = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index element={<Home/>}/>
      <Route path=":type" element={<ItemsList/>}/>
      <Route path=":type/:id" element={<Item/>}/>
    </Route>
  )
);

function App() {
  

  return (
    <div className={styles.app}>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;