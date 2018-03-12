
import AdminHomePage from './Components/AdminApp/AdminHomePage';
import AdminUsers from './Components/AdminUsers/AdminUsers';
import Categories from './Containers/Categories/Categories';
import EditCategory from './Containers/Categories/EditCategory';
import Documents from './Containers/Documents/Documents';
import DocumentsCategory from './Containers/Documents/DocumentsCategory';


export const routes = [
  {
    path: './',
    component: AdminHomePage,
    title: 'Home',
    directAccess: true,
  },
  {
    path: '/categories',
    component: Categories,
    title: 'Categories',
    directAccess: true,
  }, {
    path: '/documenst',
    component: Documents,
    title: 'Documents',
    directAccess: true,
  },
  {
    path: '/users',
    component: AdminUsers,
    title: 'Users',
    directAccess: true,
  },
  {
    path: '/editCategory',
    component: EditCategory,
    title: 'Edit Category',
    directAccess: false,
  },
  {
    path: '/documents-by-category/:id',
    component: DocumentsCategory,
    title: 'Documents By Category',
    directAccess: false,
  },
];

export default routes;
