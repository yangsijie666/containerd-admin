import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  primaryColor: '#1890ff',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Containerd',
  pwa: false,
  logo: '/logo.svg',
  iconfontUrl: '',
  "splitMenus": false,
  "headerHeight": 48,
};

export default Settings;
