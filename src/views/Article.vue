<template>
  <div>
    <header>
      <bread :categories="article.categories" :title="article.titel" />
      <!-- .breadcrumb -->
    </header>
    <!-- #masthead -->
    <div id="content" class="site-content">
      <div class="container">
        <div class="row justify-content-center site-content-row">
          <div id="primary" class="col-lg-8 content-area">
            <main id="main" class="site-main">
              <div
                class="post-601 post type-post status-publish format-standard has-post-thumbnail hentry category-los-santos category-sanews category-urban tag-armut tag-family tag-ghetto tag-polizei tag-sozialarbeit tag-soziale-ungerechtigkeit tag-streetlife tag-urban"
              >
                <figure class="post-featured-image page-single-img-wrap">
                  <div
                    class="post-img"
                    :style="'background-image: url(' + article.bild + ');'"
                  ></div>
                </figure>
                <!-- .post-featured-image .page-single-img-wrap -->

                <div class="entry-meta category-meta" v-if="article.categories">
                  <div class="cat-links">
                    <router-link
                      v-for="(cat, index) of article.categories"
                      :key="index"
                      :to="'/category/' + cat.toLowerCase()"
                      rel="category tag"
                      >{{ cat }}
                    </router-link>
                  </div>
                </div>
                <!-- .entry-meta -->

                <header class="entry-header">
                  <h1 class="entry-title">{{ article.titel }}</h1>
                  <div class="entry-meta">
                    <div class="date">
                      <router-link
                        :to="'/article/' + article.id"
                        :title="article.titel"
                      >
                        {{ formatDate(article.created_at) }}
                      </router-link>
                    </div>
                    <div class="by-author vcard author">
                      <router-link :to="'/author/' + article.autor">
                        {{ article.autor }}
                      </router-link>
                    </div>
                  </div>
                  <!-- .entry-meta -->
                </header>
                <div class="entry-content" v-html="article.text"></div>
                <!-- entry-content -->
                <footer class="entry-meta" v-if="article.hints">
                  <br />
                  <span class="tag-links">
                    <span class="label">Tags: </span>
                    <router-link
                      v-for="(hint, index) of article.hints"
                      :key="hint"
                      :to="'/tag/' + hint.toLowerCase()"
                      rel="tag"
                      >{{ hint
                      }}<span
                        v-if="index != article.hints.length - 1"
                        class="komma"
                        >,</span
                      >
                    </router-link> </span
                  ><!-- .tag-links -->
                </footer>
                <!-- .entry-meta -->
              </div>
              <!-- .post-601 -->
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
import { mapGetters, mapActions } from "vuex";
import date from "date-and-time";
export default {
  mounted() {
    if (!this.$route.params.title) {
      this.$route.push("/#/");
    }
    this.setArticle(this.$route.params.title);
  },
  methods: {
    ...mapActions(["setArticle", "set"]),
    formatDate(dateString) {
      return date.transform(
        dateString.slice(0, 10),
        "YYYY-MM-DD",
        "DD.MM.YYYY"
      );
    },
  },
  computed: {
    ...mapGetters({
      article: "getArticle",
      categories: "getCategories",
    }),
  },
};
</script>

<style>
.author {
  margin-left: 0.25vw;
}
.komma {
  color: #555555;
  margin-right: 0.2vw;
}
img.alignleft {
  margin-right: 1vw !important;
}

img.alignright {
  margin-left: 1vw !important;
}
</style>
