import packageInfo from '../../package.json'

export const environment = {
  name: `${packageInfo?.name}`,
  version: `${packageInfo?.version}-development`,
  env: 'production',
  services: {
    mocky: 'https://run.mocky.io/v3',
  },
}
