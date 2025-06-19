import{createHashRouter} from 'react-router-dom'

import App from '../App.tsx';
import ServicesPage from '../pages/ServicesPage.tsx';
import NotFound from '../pages/NotFound.tsx';

const router = createHashRouter([{
  path:'/',
  element: <App/>,
  errorElement:<NotFound/>
},{
  path:'/service',
  element:<ServicesPage/>
}
]);

export default router;