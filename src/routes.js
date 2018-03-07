
import AdminHomePage from './Components/AdminHomePage';
import AdminUsers from './Components/AdminUsers';
import AdminLogin from './Components/AdminLogin';
import Categories from './Containers/Documents/Categories';
import EditCategory from './Components/AdminDocuments/EditCategory';


export const routes = [
    {
      path: './',
      component: AdminHomePage,
      title: 'Home'
    },
    {
      path: '/documents',
      component: Categories,
      title: 'Documents Categories'
    },
    {
      path: '/users',
      component: AdminUsers,
      title: 'Users'
    },
    {
      path: '/editCategory',
      component: EditCategory,
      title: 'Edit Category'
    },
  ];
  
  export default routes