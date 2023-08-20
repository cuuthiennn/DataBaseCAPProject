// Layouts
import { NavbarLayout } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import NotFound from '~/pages/NotFound';
import Users_Control from '~/pages/Users_Control';
import Working_Role from '~/pages/Working_Role';
import Upload from '~/pages/Upload';
import Upload_History from '~/pages/Upload_History';
import Upload_File from '~/pages/Upload_File';
import Upload_Template from '~/pages/Upload_Template';

// Pulic routes
export const publicRoutes = [
  { path: '/', component: Home, layout: NavbarLayout },
  { path: '/upload', component: Upload },
  { path: '/upload/upload_history', component: Upload_History },
  { path: '/upload/upload_page', component: Upload_File },
  { path: '/upload/upload_template', component: Upload_Template },
  { path: '/admin/users', component: Users_Control },
  { path: '/admin/working_role', component: Working_Role, layout: NavbarLayout },
  { path: '/login', component: Login, layout: null },
  { path: '/404', component: NotFound, layout: NavbarLayout },
];

// Private Routes
export const privateRoutes = [];
