
import AdminHomePage from './Components/AdminHomePage';
import AdminUsers from './Components/AdminUsers';
import AdminLogin from './Components/AdminLogin';
import Categories from './Containers/Documents/Categories';
import EditCategory from './Containers/Documents/EditCategory';
import Documents from './Containers/Documents/Documents';


export const routes = [
    {
      path: './',
      component: AdminHomePage,
      title: 'Home',
      directAccess: true
    },
    {
      path: '/categories',
      component: Categories,
      title: 'Categories',
      directAccess: true
    },{
      path: '/documenst',
      component: Documents,
      title: 'Documents',
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