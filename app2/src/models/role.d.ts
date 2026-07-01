// 类型
import type { Role } from 'mockDB/data/roles';

// 枚举
import { RoleStatusEnum } from '@/enums/role.enum';

export interface IRoleSearchParams {
  currentPage?: number;
  pageSize?: number;
  searchText?: string;
  status?: RoleStatusType | '';
}

export interface IRole extends Omit<Role, 'status'> {
  status: RoleStatusType;
}

export type RoleStatusType = typeof RoleStatusEnum[keyof typeof RoleStatusEnum];

export interface IStatusConfig {
  text: string;
  color: 'success' | 'default' | 'error' | 'warning' | 'processing';
}

export interface IRoleEditForm {
  name: string;
  code: string;
  status: RoleStatusType;
  description: string;
}
