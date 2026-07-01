import { Pagination } from 'antd';
import type { PaginationProps } from 'antd';
import './SharedPagination.css';

export default function SharedPagination(props: PaginationProps) {
  const { current = 1, pageSize = 10, total = 0, ...restProps } = props;
  return (
    <div className="shared-pagination">
      <div className="shared-pagination__left">
        共
        {total}
        条数据，当前显示第
        {(current - 1) * pageSize + 1}
        -
        {Math.min(current * pageSize, total)}
        条
      </div>
      <Pagination
        current={current}
        pageSize={pageSize}
        total={total}
        showSizeChanger
        showQuickJumper
        pageSizeOptions={['10', '20', '50', '100']}
        showTotal={(total: number) => `共 ${total} 条`}
        {...restProps}
      />
    </div>
  );
}
