<template>
  <div>
    <header>
      <bread :hints="[]" :title="search" />
      <!-- .breadcrumb -->
    </header>
    <div id="content" class="site-content">
      <div class="container">
        <div class="row justify-content-center site-content-row">
          <div id="primary" class="col-lg-8 content-area">
            <main id="main" class="site-main">
              <header class="page-header">
                <h1 class="page-title">
                  Suchwort: <span>{{ search }}</span>
                </h1>
              </header>
              <!-- .page-header -->

              <div class="row gutter-parent-14 post-wrap">
                <div
                  class="col-sm-6 col-xxl-4 post-col"
                  v-for="(article, index) of activeArticles.slice(
                    0 + (index - 1) * 6,
                    6 + (index - 1) * 6
                  )"
                  :key="index"
                >
                  <div
                    class="post-1650 post type-post status-publish format-standard has-post-thumbnail hentry hint-events hint-lifestyle hint-sanews hint-urban hint-weazelnews tag-cinema tag-film tag-kino tag-vinewood-zombie"
                  >
                    <figure class="post-featured-image post-img-wrap">
                      <router-link
                        :to="'/article/' + article.id"
                        class="post-img"
                        :style="'background-image: url(' + article.bild + ');'"
                      ></router-link>
                      <div class="entry-meta category-meta">
                        <div class="cat-links">
                          <router-link
                            v-for="(cat, index) of article.categories"
                            :key="index"
                            :to="'/category/' + cat.toLowerCase()"
                            rel="category tag"
                            >{{ cat }}</router-link
                          >
                        </div>
                      </div>
                      <!-- .entry-meta -->
                    </figure>
                    <!-- .post-featured-image .post-img-wrap -->

                    <header class="entry-header">
                      <h2 class="entry-title">
                        <router-link :to="'/article/' + article.id">{{
                          article.titel
                        }}</router-link>
                      </h2>
                      <div class="entry-meta">
                        <div class="date">
                          <router-link
                            :to="'/article/' + article.id"
                            :title="article.titel"
                            >{{ formatDate(article.created_at) }}</router-link
                          >
                        </div>
                        <div class="by-author vcard author">
                          <router-link :to="'/author/' + article.autor">
                            {{ article.autor }}
                          </router-link>
                        </div>
                      </div>
                      <!-- .entry-meta -->
                    </header>
                    <div class="entry-content">
                      <span v-html="article.text.slice(0, 200) + ' ...'">
                      </span>
                    </div>
                    <!-- entry-content -->
                  </div>
                  <!-- .post-1650 -->
                </div>
                <!-- .col-sm-6 .col-xxl-4 .post-col -->
              </div>
              <!-- .row .gutter-parent-14 .post-wrap -->

              <nav
                class="navigation pagination"
                role="navigation"
                aria-label="Beiträge"
              >
                <h2 class="screen-reader-text">Beitrags-Navigation</h2>
                <div class="nav-links">
                  <a
                    class="previous page-numbers"
                    @click="changeIndex(index - 1)"
                    v-if="index != 1"
                    >Previous</a
                  >
                  <span
                    class="page-numbers"
                    v-if="index == pages && index != 1"
                    @click="changeIndex(index - 2)"
                    >{{ index - 2 }}</span
                  >
                  <span
                    class="page-numbers"
                    v-if="index != 1"
                    @click="changeIndex(index - 1)"
                    >{{ index - 1 }}</span
                  >
                  <span
                    aria-current="page"
                    class="page-numbers current"
                    @click="changeIndex(index)"
                    >{{ index }}</span
                  >
                  <span
                    v-if="index < pages - 1"
                    class="page-numbers"
                    @click="changeIndex(index + 1)"
                    >{{ index + 1 }}</span
                  >
                  <span class="page-numbers dots" v-if="pages - index > 2"
                    >&hellip;</span
                  >
                  <span
                    class="page-numbers"
                    v-if="pages - index > 0"
                    @click="changeIndex(pages)"
                    >{{ pages }}</span
                  >
                  <a
                    class="next page-numbers"
                    @click="changeIndex(index + 1)"
                    v-if="index != pages"
                    >Next</a
                  >
                </div>
              </nav>
              <!-- .row .gutter-parent-14 .post-wrap-->
            </main>
            <!-- #main -->
          </div>
          <!-- #primary -->

          <aside
            id="secondary"
            class="col-lg-4 widget-area"
            role="complementary"
          >
            <side />
            <!-- .sticky-sidebar -->
          </aside>
          <!-- #secondary -->
        </div>
        <!-- row -->
      </div>
      <!-- .container -->
    </div>
  </div>
</template>

<script>
import date from "date-and-time";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Search",
  data() {
    return {
      index: 1,
      search: this.$route.params.search,
    };
  },
  methods: {
    ...mapActions(["set"]),
    formatDate(dateString) {
      return date.transform(
        dateString.slice(0, 10),
        "YYYY-MM-DD",
        "DD.MM.YYYY"
      );
    },
    changeIndex(newIndex) {
      this.index = newIndex;
    },
  },
  computed: {
    ...mapGetters({
      articles: "getArticles",
    }),
    activeArticles() {
      return this.articles.filter((article) => {
        return (
          article.titel.includes(this.search) ||
          article.text.includes(this.search)
        );
      });
    },
    pages() {
      return Math.ceil(this.activeArticles.length / 6);
    },
  },
  mounted() {
    this.set("articles");
  },
};
</script>
