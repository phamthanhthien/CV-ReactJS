import React from 'react'
import Sidebar from '../../components/Home/Sidebar'
import { Route } from 'react-router-dom';

import { Layout } from 'antd';

const HomeLayout = (props) => {
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout className="site-layout">
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {props.children}
          </div>
        </Layout>
      </Layout>
    </>
  );
};


export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={propsComponent => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
