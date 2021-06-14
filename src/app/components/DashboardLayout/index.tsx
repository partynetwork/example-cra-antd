import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Drawer, Layout, Menu } from 'antd';
import { useMediaQuery } from 'beautiful-react-hooks';
import Sider from 'antd/es/layout/Sider';
import {
  // UserOutlined,
  // BellOutlined,
  // RedEnvelopeOutlined,
  // CalculatorOutlined,
  // TeamOutlined,
  // BankOutlined,
  // SolutionOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  // GiftOutlined,
  LineChartOutlined,
  // PieChartOutlined,
} from '@ant-design/icons';

interface ISiderOrDrawer {
  collapsed: boolean;
  toggle: () => void;
}

const SiderOrDrawer: React.FunctionComponent<ISiderOrDrawer> = ({
  children,
  collapsed,
  toggle,
}) => {
  const isSmall = useMediaQuery('(max-width: 1199px)');
  const logo = `${process.env.PUBLIC_URL}/logo-123.svg`;
  const logoCollapse = `${process.env.PUBLIC_URL}/logo-123-collapse.svg`;
  const LogoComponent = () => (
    <div className="logo" style={isSmall ? { margin: 16 } : {}}>
      {(isSmall && !collapsed) || (!isSmall && collapsed) ? (
        <img src={logoCollapse} alt="smallLogoCt" height={24} />
      ) : (
        <img src={logo} alt="logoCt" height={24} className="custom-logo" />
      )}
    </div>
  );
  return isSmall ? (
    <Drawer
      width={220}
      placement="left"
      visible={collapsed}
      closable={false}
      onClose={toggle}
      drawerStyle={{ backgroundColor: '#001529' }}
      bodyStyle={{ padding: 0 }}
    >
      <LogoComponent />
      {children}
    </Drawer>
  ) : (
    <Sider width={220} trigger={null} collapsible collapsed={collapsed}>
      <LogoComponent />
      {children}
    </Sider>
  );
};
export const DashboardLayout = ({ children }) => {
  const [state, setState] = useState({
    collapsed: false,
  });
  const handleToggleCollapse = () => {
    setState({
      ...state,
      collapsed: !state.collapsed,
    });
  };
  return (
    <>
      <Wrapper>
        <Layout>
          <SiderOrDrawer
            collapsed={state.collapsed}
            toggle={handleToggleCollapse}
          >
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              // selectedKeys={[current]}
              // onClick={handleClick}
            >
              <Menu.Item
                key="system-overview"
                icon={<LineChartOutlined style={{ color: 'white' }} />}
              >
                <Link to="/">ภาพรวมระบบ</Link>
              </Menu.Item>
            </Menu>
          </SiderOrDrawer>
          <Layout className="site-layout">
            <Layout.Header
              className="site-layout-background"
              style={{ padding: '0 1em' }}
            >
              {React.createElement(
                state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: 'trigger',
                  onClick: handleToggleCollapse,
                },
              )}
              <header></header>
            </Layout.Header>
            <Layout.Content className="site-layout-content">
              {children}
            </Layout.Content>
          </Layout>
        </Layout>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background: #fff;
  font-size: 16px;
`;
