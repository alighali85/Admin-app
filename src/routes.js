
import AdminHomePage from './components/AdminHomePage';
import AdminDashBoard from './components/AdminDashBoard'
import AdminUsers from './components/AdminUsers';
import AdminDocument from './components/documents';
import AdminPosts from './components/AdminPosts';
import AdminLogin from './components/AdminLogin';
import AdminTodo from './components/AdminTodo';


export const routes = [
    {
      path: './',
      component:{ AdminHomePage, AdminDashBoard }
    },
    {
      path: '/login',
      component: AdminLogin
    },
    {
      path: '/todo',
      component: AdminTodo
    },
    {
      path: '/documents',
      component: AdminDocument
    },
    {
      path: '/users',
      component: AdminUsers
    },
  ];

  export default routes