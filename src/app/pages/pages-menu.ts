import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Users',
    icon: 'nb-person',
    link: './users',
    children: [
      {
        title: 'Active',
        link: './users/active-users',
      },
      {
        title: 'Deactivated',
        link: './users/deactivated-users',
      },
    ],
  },
  {
    title: 'Vendors',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Bikers',
        link: './vendors/bikers',
      },
      {
        title: 'Drivers',
        link: './vendors/drivers',
      },
      {
        title: 'Servicers',
        link: './vendors/servicers',
      },
    ],
  },
  {
    title: 'Activities',
    icon: 'nb-arrow-retweet',
    children: [
      {
        title: 'Completed',
        link: './activities/completed',
      },
      {
        title: 'In-progress',
        link: './activities/in-progress',
      },
      {
        title: 'Cancelled',
        link: './activities/cancelled',
      },
      {
        title: 'Unsatisfied',
        link: './activities/unsatisfied',
      },
    ],
  },
  {
    title: 'Banners',
    icon: 'nb-layout-default',
    children: [
      {
        title: 'Manage App Banners',
        link: './banners/manage-app-banners',
      },
    ],
  },
  {
    title: 'Send Mail',
    icon: 'nb-email',
    children: [
      {
        title: 'Mailing List',
        link: './send-mail/mailing-list',
      },
    ],
  },
  {
    title: 'Process Payment',
    icon: 'nb-roller-shades',
    children: [
      {
        title: 'Generate CSV',
        link: './process-payment/generate-csv',
      },
      {
        title: 'Other',
        link: './process-payment/other',
      },
    ],
  },
  {
    title: 'Administrator',
    icon: 'nb-gear',
    link: './admin',
    children: [
      {
        title: 'Create Account',
        link: './admin/create-account',
      },
      {
        title: 'Manage Accounts',
        link: './admin/manage-accounts',
      },
    ],
  },
];
