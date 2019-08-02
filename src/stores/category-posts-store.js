import * as apiUtil from '../utils/api-util';
import { decorate, observable, action, configure, runInAction } from 'mobx';
configure({ enforceActions: 'observed' });

class CategoryPostsStore {
  posts = [];
  meta = {};

  fetchPosts(category_id, page=1) {
    apiUtil.postsList(null, null, category_id, page, 4)
      .then(response => {
        runInAction(() => {
          this.posts = this.posts.concat(response.collection);
          this.meta = response.meta;
        })
      })
  }

  clearPosts() {
    runInAction(() => {
      this.posts = [];
      this.meta = {};
    })
  }
}

decorate(CategoryPostsStore, {
  posts: observable,
  fetchPosts: action,
  clearPosts: action
});

export default CategoryPostsStore;