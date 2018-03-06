
import AdminHomePage from './components/AdminHomePage';
import AdminUsers from './components/AdminUsers';
import AdminDocument from './components/documents';
import AdminLogin from './components/AdminLogin';
import AdminTodo from './components/AdminTodo';

export const routes = [
    {
      path: './',
      component: AdminHomePage
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