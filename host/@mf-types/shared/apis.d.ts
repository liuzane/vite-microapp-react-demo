
    export type RemoteKeys = 'shared/consts/db' | 'shared/components';
    type PackageType<T> = T extends 'shared/components' ? typeof import('shared/components') :T extends 'shared/consts/db' ? typeof import('shared/consts/db') :any;