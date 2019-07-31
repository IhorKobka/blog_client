import * as apiUtil from '../utils/api-util';
import { decorate, observable, action, configure, runInAction } from 'mobx';
configure({ enforceActions: 'observed' });

class AppStore {
  categories = [];
  tags = [];

  fetchCategories() {
    apiUtil.categoriesList()
      .then(response => {
        runInAction(() => {
          this.categories = response.collection;
        })
      })
  }

  fetchTags() {
    apiUtil.tagsList()
      .then(response => {
        runInAction(() => {
          this.tags = response.collection;
        })
      })
  }
}

decorate(AppStore, {
  categories: observable,
  tags: observable,
  fetchCategories: action,
  fetchTags: action,
});

export default AppStore;