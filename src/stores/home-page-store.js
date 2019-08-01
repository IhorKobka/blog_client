import * as apiUtil from '../utils/api-util';
import { decorate, observable, action, configure, runInAction } from 'mobx';
configure({ enforceActions: 'observed' });

class HomePageStore {
  recentPosts = [];
  featuredPosts = [];
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
}

decorate(HomePageStore, {
  recentPosts: observable,
  featuredPosts: observable,
  mostReadPosts: observable,
  mostReadPostsMeta: observable,
  fetchRecentPosts: action,
  fetchFeaturedPosts: action,
});

export default HomePageStore;