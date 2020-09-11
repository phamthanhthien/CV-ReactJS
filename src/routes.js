import Home from './pages/HomePage/Home';
import About from './pages/HomePage/About';

const routesHome = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    exact: false,
    name: 'About',
    component: About,
  }
]

const routesAdmin = [
  {
    path: '/admin',
    exact: false,
  }
]

export { routesHome, routesAdmin }