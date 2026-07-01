// 类型
import type { User } from 'mockDB/data/users';

// 枚举
import { UserStatusEnum } from '@/enums/user.enum';

export interface IUserSearchParams {
  currentPage?: number;
  pageSize?: number;
  searchText?: string;
  status?: UserStatusType | '';
}

export interface IUser extends Omit<User, 'status'> {
  status: UserStatusType;
}

export type UserStatusType = typeof UserStatusEnum[keyof typeof UserStatusEnum];

export interface IStatusConfig {
  text: string;
  color: 'success' | 'default' | 'error' | 'warning' | 'processing';
}

export interface IUserEditForm {
  name: string;
  email: string;
  phone: string;
  status: UserStatusType;
  role: string;
}
