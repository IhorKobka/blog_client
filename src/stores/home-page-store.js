import * as apiUtil from '../utils/api-util';
import { decorate, observable, action, computed, configure, runInAction } from 'mobx';
configure({ enforceActions: 'observed' });

class HomePageStore {
  recentPosts = [];
  featuredPosts = [];
  mostReadPosts = [];
  mostReadPostsMeta = {};
  categories = [];
  tags = [];
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

  fetchMostReadPosts(page = null) {
    apiUtil.postsList('most_read', null, null, page, 4)
      .then(response => {
        runInAction(() => {
          this.mostReadPosts = this.mostReadPosts.concat(response.collection);
          this.mostReadPostsMeta = response.meta;
          console.log(this.mostReadPostsMeta);
        });
      })
  }

  get mostReadPostsShort() {
    return this.mostReadPosts.slice(0,4)
  }

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

  loadMoreMostReadPosts(currentPage, totalPages) {
    const nextPage = currentPage + 1;
    if (nextPage <= totalPages) {
      this.fetchMostReadPosts(nextPage);
    }
  }
}

decorate(HomePageStore, {
  recentPosts: observable,
  featuredPosts: observable,
  mostReadPosts: observable,
  mostReadPostsMeta: observable,
  categories: observable,
  tags: observable,
  fetchRecentPosts: action,
  fetchFeaturedPosts: action,
  fetchMostReadPosts: action,
  fetchCategories: action,
  fetchTags: action,
  mostReadPostsShort: computed,
});

export default HomePageStore;