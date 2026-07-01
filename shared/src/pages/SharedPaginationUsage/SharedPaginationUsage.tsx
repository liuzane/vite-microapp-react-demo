// 基础模块
import { useState } from 'react';
import { Card, Button } from 'antd';

// 组件
import SharedPagination from '@/components/SharedPagination';

export default function SharedPaginationUsage() {
  // 示例1: 基本分页
  const [page1, setPage1] = useState(1);
  const [pageSize1, setPageSize1] = useState(10);
  const total1: number = 156;

  const onChange1 = (page: number, size: number) => {
    setPage1(page);
    setPageSize1(size);
    console.log('基本分页 - 当前页:', page, '每页条数:', size);
  };

  // 示例2: 带更多选项的分页
  const [page2, setPage2] = useState(3);
  const [pageSize2, setPageSize2] = useState(20);
  const total2: number = 892;

  const onChange2 = (page: number, size: number) => {
    setPage2(page);
    setPageSize2(size);
    console.log('高级分页 - 当前页:', page, '每页条数:', size);
  };

  // 跳转到指定页
  const jumpToPage = () => {
    setPage1(5);
  };

  return (
    <div className="m-4 space-y-6">
      {/* 示例1: 基本分页 */}
      <Card title="基本分页示例" variant="outlined">
        <div className="mb-4 text-gray-500">
          当前页码:
          {' '}
          <span className="font-bold text-primary">{page1}</span>
          ,
          每页条数:
          {' '}
          <span className="font-bold text-primary">{pageSize1}</span>
        </div>
        <SharedPagination
          current={page1}
          pageSize={pageSize1}
          total={total1}
          onChange={onChange1}
        />
        <Button type="primary" onClick={jumpToPage} className="mt-4">
          跳转到第5页
        </Button>
      </Card>

      {/* 示例2: 带更多选项的分页 */}
      <Card title="高级分页示例" variant="outlined">
        <div className="mb-4 text-gray-500">
          当前页码:
          {' '}
          <span className="font-bold text-primary">{page2}</span>
          ,
          每页条数:
          {' '}
          <span className="font-bold text-primary">{pageSize2}</span>
        </div>
        <SharedPagination
          current={page2}
          pageSize={pageSize2}
          total={total2}
          onChange={onChange2}
          showSizeChanger
          showQuickJumper
          pageSizeOptions={['10', '20', '50', '100', '200']}
          disabled={false}
        />
      </Card>
    </div>
  );
}
