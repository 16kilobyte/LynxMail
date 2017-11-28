import Realm from 'realm';
import _ from 'lodash';

export default class Model extends Realm.Object {
   static create(data, update = false) {
      if(data instanceof Array) {
        realm.write(() => {
          _.forEach(data, (item) => {
            realm.create(this.schema.name, item, update)
          })
        })
      }else {
        realm.write(() => {
          return realm.create(this.schema.name, data, update)
        })
      }
  }

  static get() {
      return realm.objects(this.schema.name)
  }

  static deleteAll() {
      realm.write(() => {
          realm.delete(this.get())
      })
  }

  setProp(prop, value) {
      realm.write(() => {
          this[prop] = value
      })
  }
}