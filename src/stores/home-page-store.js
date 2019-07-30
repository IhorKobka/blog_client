import * as apiUtil from '../utils/api-util';
import { decorate, observable, action, computed, configure, runInAction } from 'mobx';
configure({ enforceActions: 'observed' });

class HomePageStore {
  recentPosts = [];
  featuredPosts = [];
  mostReadPosts = [];
  mostReadPostsMeta = {};
  isLoadingRecentPosts = false;

  fetchRecentPosts() {
    this.isLoadingRecentPosts = true;
    apiUtil.postsList('recent', null, null, null, 6)
      .then(response => {
        runInAction(() => {
          this.recentPosts = response.collection;
        });
      })
  }

  fetchFeaturedPosts() {
    apiUtil.postsList('featured', null, null, null, 7)
      .then(response => {
        runInAction(() => {
          this.featuredPosts = response.collection;
        });
      })
  }

  fetchMostReadPosts() {
    apiUtil.postsList('most_read', null, null, null, 4)
      .then(response => {
        runInAction(() => {
          this.mostReadPosts = this.mostReadPosts.concat(response.collection);
          this.mostReadPostsMeta = response.meta;
          console.log(this.mostReadPosts);
        });
      })
  }

  get mostReadPostsShort() {
    return this.mostReadPosts.slice(0,4)
  }
}

decorate(HomePageStore, {
  recentPosts: observable,
  featuredPosts: observable,
  mostReadPosts: observable,
  mostReadPostsMeta: observable,
  fetchRecentPosts: action,
  fetchFeaturedPosts: action,
  fetchMostReadPosts: action,
  mostReadPostsShort: computed,
});

export default HomePageStore;