"use client"
import {
    ChromeFilled,
    CrownFilled,
    SmileFilled,
    TabletFilled,
  } from '@ant-design/icons';
import Tables from './table';
  
  export default {
    route: {
      path: '/',
      routes: [
        {
          path: '/welcome',
          name: 'LPOI',
          icon: <SmileFilled />,
          component: './Welcome',
        },
        {
          path: '/icon',
          name: 'Icon Routes',
          icon: <CrownFilled />,
          access: 'canAdmin',
          component: <Tables/>,
          routes: [
            {
              path: '/admin/dashboard',
              name: 'Dashboard',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
              component: './Welcome',
            },
            {
              path: '/admin/sub-page2',
              name: 'Sub Page2',
              icon: <CrownFilled />,
              component: './Welcome',
            },
            {
              path: '/admin/sub-page3',
              name: 'Sub page 3',
              icon: <CrownFilled />,
              component: './Welcome',
            },
          ],
        },
        {
          name: 'List',
          icon: <TabletFilled />,
          path: '/list',
          component: './ListTableList',
          routes: [
            {
              path: '/list/sub-page',
              name: 'list/sub',
              icon: <CrownFilled />,
              routes: [
                {
                  path: 'sub-sub-page1',
                  name: 'subsub1',
                  icon: <CrownFilled />,
                  component: './Welcome',
                },
                {
                  path: 'sub-sub-page2',
                  name: 'sub-sub2',
                  icon: <CrownFilled />,
                  component: './Welcome',
                },
                {
                  path: 'sub-sub-page3',
                  name: 'pg3',
                  icon: <CrownFilled />,
                  component: './Welcome',
                },
              ],
            },
            {
              path: '/list/sub-page2',
              name: 'pg2',
              icon: <CrownFilled />,
              component: './Welcome',
            },
            {
              path: '/list/sub-page3',
              name: '三级列表页面',
              icon: <CrownFilled />,
              component: './Welcome',
            },
          ],
        },
        {
          path: 'https://ant.design',
          name: 'Ant Design 官网外链',
          icon: <ChromeFilled />,
        },
      ],
    },
    location: {
      pathname: '/',
    },
    appList: [
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        title: 'Ant Design',
        desc: 'Profile',
        url: 'https://ant.design',
      },
      // {
      //   icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
      //   title: 'AntV',
      //   desc: '蚂蚁集团全新一代数据可视化解决方案',
      //   url: 'https://antv.vision/',
      //   target: '_blank',
      // },
      
    ],
  };
  