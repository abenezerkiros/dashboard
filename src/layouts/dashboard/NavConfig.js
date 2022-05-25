// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Create App',
    path: '/dashboard/createApp',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'Billing Info',
    path: '/dashboard/billingInfo',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'Generate Api key',
    path: '/dashboard/genrateApiKey',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'logout',
    path: '/login',
    icon: getIcon('eva:lock-fill'),
  },
 

];

export default navConfig;
