// 基础模块
import { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

// 类型
import type { NavigateFunction } from 'react-router-dom';

// 组件
import SharedMenuUsage from './pages/SharedMenuUsage';
import SharedTableUsage from './pages/SharedTableUsage';
import SharedPaginationUsage from './pages/SharedPaginationUsage';

const MICRO_APP_NAME: string = window.__MICRO_APP_NAME__;

function App() {
  const navigate: NavigateFunction = useNavigate();

  /**
   * 监听全局应用发送过来的数据变化
   * @param globalData 全局应用发送过来的数据
   */
  const dataListener = (globalData: Record<string, Record<string, unknown>>): void => {
    if (MICRO_APP_NAME in globalData) {
      const data: Record<string, unknown> = globalData[MICRO_APP_NAME];
      console.log(`${MICRO_APP_NAME} 收到数据:`, data);
      // 根据 path 进行路由跳转
      if (typeof data.path === 'string') {
        navigate(data.path);
      }
    }
  };

  useEffect(() => {
    const globalData: Record<string, Record<string, unknown>> = window.microApp?.getGlobalData() || {};
    console.log(`${MICRO_APP_NAME} 初始化参数:`, globalData);
    // 子应用初始化完成后，通知父应用已加载完成
    window.microApp?.setGlobalData({ [MICRO_APP_NAME]: { ...globalData[MICRO_APP_NAME], ready: true } });
    // 子应用中监听数据变化
    window.microApp?.addGlobalDataListener(dataListener, true);
    return () => {
      console.log(`${MICRO_APP_NAME} 卸载数据监听`);
      window.microApp?.removeGlobalDataListener(dataListener);
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/shared-menu-usage" />} />
      <Route path="/shared-menu-usage" element={<SharedMenuUsage />} />
      <Route path="/shared-table-usage" element={<SharedTableUsage />} />
      <Route path="/shared-pagination-usage" element={<SharedPaginationUsage />} />
    </Routes>
  );
}

export default App;
