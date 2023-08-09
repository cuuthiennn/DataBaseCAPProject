// Layouts
import { LoginLayout } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import NotFound from '~/pages/NotFound';

// Pulic routes
export const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: LoginLayout },
  { path: '/404', component: NotFound, layout: null },
];

// Private Routes
export const privateRoutes = [];
