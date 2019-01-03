export const navItems = [
  {
    name: 'Home page',
    url: '/Home',
    icon: 'icon-home',
  },
  {
    title: true,
    name: 'BUSES AND DRIVERS'
  },
  {
    name: 'Buses',
    url: '/Buses',
    icon: 'fa fa-bus',
    children: [
      {
        name: 'New Bus',
        url: '/Buses/new-bus',
      
      },
      {
        name: 'View buses',
        url: '/Buses/manage-buses',
      
      }
    ]
  },
  {
    name: 'Drivers',
    url: '/Drivers',
    icon: 'fa fa-male',
    children: [
      {
        name: 'New driver',
        url: '/Drivers/new-driver',
      
      },
      {
        name: 'View drivers',
        url: '/Drivers/manage-drivers',
      
      }
    ]
  },

  {
    title: true,
    name: 'STATIONS AND LINES'
  },
  {
    name: 'Bus Stations',
    url: '/Stations',
    icon: 'fa fa-institution',
    children: [
      {
        name: 'Manage Stations',
        url: '/Stations/manage-stations',
      
      }
    ]
  },
  {
    name: 'Destination Lines',
    url: '/Lines',
    icon: 'fa fa-road',
    children: [
      {
        name: 'Set Lines',
        url: '/Lines/manage-lines',
      
      },
      {
        name: 'Line prices',
        url: '/Lines/prices',
      
      },
      {
        name: 'Working schedulers',
        url: '/Lines/working-schedulers',
      
      }
    ]
  },
  {
    title: true,
    name: 'SYSTEM USERS'
  },
  {
    name: 'Station users',
    url: '/Users',
    icon: 'fa fa-users',
    children: [
      {
        name: 'New user',
        url: '/Users/new-user',
      
      },
      {
        name: 'manage users',
        url: '/Users/manage-users',
      
      }
    ]
  },
  {
    title: true,
    name: 'BUS SCHEDULERS'
  },
  {
    name: 'Bus Schedulers',
    url: '/Schedulers',
    icon: 'fa fa-clock-o',
    children: [
      {
        name: 'New Schedulers',
        url: '/Schedulers/new-scheduler',
      
      },
      {
        name: 'Schedulers history',
        url: '/Schedulers/view-history',
      
      }
    ]
  },
  /* {
    name: 'Base',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Cards',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Carousels',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      },
      {
        name: 'Collapses',
        url: '/base/collapses',
        icon: 'icon-puzzle'
      },
      {
        name: 'Forms',
        url: '/base/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Pagination',
        url: '/base/paginations',
        icon: 'icon-puzzle'
      },
      {
        name: 'Popovers',
        url: '/base/popovers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Progress',
        url: '/base/progress',
        icon: 'icon-puzzle'
      },
      {
        name: 'Switches',
        url: '/base/switches',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tables',
        url: '/base/tables',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tabs',
        url: '/base/tabs',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor'
      },
      {
        name: 'Brand Buttons',
        url: '/buttons/brand-buttons',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Charts',
    url: '/charts',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Icons',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'CoreUI Icons',
        url: '/icons/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Flags',
        url: '/icons/flags',
        icon: 'icon-star'
      },
      {
        name: 'Font Awesome',
        url: '/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: 'icon-bell'
      },
      {
        name: 'Modals',
        url: '/notifications/modals',
        icon: 'icon-bell'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  } */
];
