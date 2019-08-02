import * as apiUtil from '../utils/api-util';
import {decorate, observable, action, configure, runInAction, computed} from 'mobx';
configure({ enforceActions: 'observed' });

class AppStore {
  categories = [];
  tags = [];
  mostReadPosts = [];
  mostReadPostsMeta = {};

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

  fetchMostReadPosts(page = null) {
    apiUtil.postsList('most_read', null, null, page, 4)
      .then(response => {
        runInAction(() => {
          this.mostReadPosts = this.mostReadPosts.concat(response.collection);
          this.mostReadPostsMeta = response.meta;
        });
      })
  }

  get mostReadPostsShort() {
    return this.mostReadPosts.slice(0,4)
  }
}

decorate(AppStore, {
  categories: observable,
  tags: observable,
  mostReadPosts: observable,
  mostReadPostsMeta: observable,
  fetchCategories: action,
  fetchTags: action,
  fetchMostReadPosts: action,
  mostReadPostsShort: computed,
});

export default AppStore;