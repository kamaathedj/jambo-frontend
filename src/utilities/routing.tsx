import{createHashRouter} from 'react-router-dom'

import App from '../App.tsx';

const router = createHashRouter([{
  path:'/',
  element: <App/>
}]);

export default router;