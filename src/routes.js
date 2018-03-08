
import AdminHomePage from './Components/AdminHomePage';
import AdminUsers from './Components/AdminUsers';
import AdminLogin from './Components/AdminLogin';
import Categories from './Containers/Documents/Categories';
import EditCategory from './Containers/Documents/EditCategory';


export const routes = [
    {
      path: './',
      component: AdminHomePage,
      title: 'Home',
      directAccess: true
    },
    {
      path: '/documents',
      component: Categories,
      title: 'Documents Categories',
      directAccess: true
    },
    {
      path: '/users',
      component: AdminUsers,
      title: 'Users',
      directAccess: true
    },
    {
      path: '/editCategory',
      component: EditCategory,
      title: 'Edit Category',
      directAccess: false
    },
  ];
  
  export default routes