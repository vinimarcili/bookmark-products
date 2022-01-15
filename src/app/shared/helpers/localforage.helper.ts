import * as localForage from 'localforage'
import { environment } from './../../../environments/environment'

if (environment.env !== 'test') {
  localForage.config({
    driver: [localForage.LOCALSTORAGE, localForage.INDEXEDDB, localForage.WEBSQL],
    name: 'BookmarkProducts',
    storeName: 'bookmark_products',
  })
}

export default localForage
