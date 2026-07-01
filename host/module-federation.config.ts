import { federation, createModuleFederationConfig } from '@module-federation/vite';
import { dependencies } from './package.json';

export default (env: Record<string, string>) => federation(createModuleFederationConfig({
  name: 'host',
  filename: 'remoteEntry.js',
  exposes: {},
  remotes: {
    mockDB: {
      type: 'module',
      name: 'mockDB',
      entry: `${env.VITE_MOCKDB_URL}/remoteEntry.js`,
      entryGlobalName: 'mockDB',
      shareScope: 'default',
    },
    shared: {
      type: 'module',
      name: 'shared',
      entry: `${env.VITE_SHARED_URL}/remoteEntry.js`,
      entryGlobalName: 'shared',
      shareScope: 'default',
    },
  },
  shared: {
    'react': {
      requiredVersion: dependencies.react,
      singleton: true,
    },
    'react-dom/client': {
      requiredVersion: dependencies['react-dom'],
      singleton: true,
    },
    'react-router-dom': {
      requiredVersion: dependencies['react-router-dom'],
      singleton: true,
    },
  },
}));
