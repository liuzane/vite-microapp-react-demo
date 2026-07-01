import { Table } from 'antd';
import type { TableProps } from 'antd';

export default function SharedTable<T>(props: TableProps<T>) {
  return (
    <Table<T>
      bordered
      pagination={false}
      size="middle"
      {...props}
    />
  );
}
