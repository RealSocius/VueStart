<template>
  <div>
    <header>
      <div class="top-stories-bar">
        <div class="container">
          <div class="row top-stories-box clearfix">
            <div class="col-sm-auto">
              <div class="top-stories-label">
                <div class="top-stories-label-wrap">
                  <span class="flash-icon"></span>
                  <span class="label-txt"> Aktuelles </span>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm top-stories-lists">
              <div class="row align-items-center">
                <div class="col">
                  <marquee-text
                    :duration="30"
                    @mouseover="hover = true"
                    @mouseleave="hover = false"
                    :paused="hover"
                  >
                    <router-link
                      v-for="(article, index) of articles.slice(0, 5)"
                      :key="index"
                      :to="'/article/' + article.id"
                    >
                      {{ article.titel }}
                    </router-link>
                  </marquee-text>
                  <!-- .marquee -->
                </div>
                <!-- .col -->
              </div>
              <!-- .row .align-items-center -->
            </div>
            <!-- .col-12 .col-sm .top-stories-lists -->
          </div>
          <!-- .row .top-stories-box -->
        </div>
        <!-- .container -->
      </div>
      <!-- .top-stories-bar -->

      <section class="featured-section">
        <div class="container">
          <div class="row gutter-parent-10 two-column-featured-section">
            <div class="col-12 col-lg-8">
              <div class="featured-slider post-slider">
                <div class="post-slider-header title-wrap">
                  <h3 class="stories-title">WEAZEL NEWS</h3>
                </div>
                <carousel
                  v-if="weazel"
                  :loop="true"
                  :autoplay="true"
                  :margin="0"
                  :nav="true"
                  :navText="['', '']"
                  :navElement="'button'"
                  :dots="false"
                  :autoplayTimeout="5500"
                  :autoplayHoverPause="true"
                  :responsive="{
                    0: {
                      items: 1,
                    },
                  }"
                >
                  <div class="item">
                    <div class="post-item post-block">
                      <div class="post-img-wrap">
                        <router-link
                          :to="'/article/' + weazel.id"
                          class="post-img"
                          :style="'background-image: url(' + weazel.bild + ');'"
                        ></router-link>
                      </div>
                      <div class="entry-header">
                        <div class="entry-meta category-meta">
                          <div class="cat-links">
                            <router-link
                              v-for="(cat, index) of weazel.categories"
                              :key="index"
                              :to="'/category/' + cat.toLowerCase()"
                              rel="category tag"
                              >{{ cat }}</router-link
                            >
                          </div>
                        </div>
                        <!-- .entry-meta -->
                        <h2 class="entry-title">
                          <router-link :to="'/article/' + weazel.id">{{
                            weazel.titel
                          }}</router-link>
                        </h2>
                        <div class="entry-meta">
                          <div class="date">
                            <router-link
                              :to="'/article/' + weazel.id"
                              :title="weazel.titel"
                              >{{ formatDate(weazel.created_at) }}</router-link
                            >
                          </div>
                          <div class="by-author vcard author">
                            <router-link :to="'/author/' + weazel.autor">
                              {{ weazel.autor }}
                            </router-link>
                          </div>
                        </div>
                      </div>
                      <!-- .entry-header -->
                    </div>
                    <!-- .post-item .post-block -->
                  </div>
                  <div
                    class="item"
                    v-for="(article, index) of articles.slice(0, 2)"
                    :key="index"
                  >
                    <div class="post-item post-block">
                      <div class="post-img-wrap">
                        <router-link
                          :to="'/article/' + article.id"
                          class="post-img"
                          :style="
                            'background-image: url(' + article.bild + ');'
                          "
                        ></router-link>
                      </div>
                      <div class="entry-header">
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
                      </div>
                      <!-- .entry-header -->
                    </div>
                    <!-- .post-item .post-block -->
                  </div>
                </carousel>
                <!-- .owl-carousel -->
              </div>
              <!-- .featured-slider .post-slider -->
            </div>
            <!-- col-12 col-lg-8 -->

            <div class="col-lg-4">
              <div class="featured-post">
                <div class="title-wrap">
                  <h3 class="stories-title">Lifestyle</h3>
                </div>
                <div class="row">
                  <div
                    class="col-sm-6 col-lg-12"
                    v-for="(article, index) of lifestyle().slice(0, 2)"
                    :key="index"
                  >
                    <div class="post-item post-block">
                      <div class="post-img-wrap">
                        <router-link
                          :to="'/article/' + article.id"
                          class="post-img"
                          :style="
                            'background-image: url(' + article.bild + ');'
                          "
                        ></router-link>
                      </div>
                      <div class="entry-header">
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
                      </div>
                      <!-- .entry-header -->
                    </div>
                    <!-- .post-item .post-block -->
                  </div>
                  <!-- col-sm-6 col-lg-12 -->
                </div>
                <!-- .row -->
              </div>
              <!-- .featured-post -->
            </div>
            <!-- col-lg-4 -->
          </div>
          <!-- .row -->
        </div>
        <!-- .container -->
      </section>
      <!-- .featured-section -->
    </header>
    <div id="content" class="site-content pt-0">
      <div class="container">
        <div class="row justify-content-center site-content-row">
          <div id="primary" class="col-lg-8 content-area">
            <main id="main" class="site-main">
              <div class="row gutter-parent-14 post-wrap">
                <div
                  class="col-sm-6 col-xxl-4 post-col"
                  v-for="(article, index) of articles.slice(
                    0 + (index - 1) * 6,
                    6 + (index - 1) * 6
                  )"
                  :key="index"
                >
                  <div
                    class="post-1650 post type-post status-publish format-standard has-post-thumbnail hentry category-events category-lifestyle category-sanews category-urban category-weazelnews tag-cinema tag-film tag-kino tag-vinewood-zombie"
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
import MarqueeText from "vue-marquee-text-component";
import carousel from "vue-owl-carousel";
import date from "date-and-time";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    MarqueeText,
    carousel,
  },
  data() {
    return {
      hover: false,
      index: 1,
    };
  },
  methods: {
    ...mapActions(["set"]),
    lifestyle() {
      return this.articles.filter((article) => {
        if (!article.categories) return false;
        if (article.categories.includes("Lifestyle")) return article;
      });
    },
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
      hints: "getHints",
    }),
    hintsArray() {
      return this.hints.map((hint) => hint.hint);
    },
    pages() {
      return Math.ceil(this.articles.length / 6);
    },
    weazel() {
      return this.articles.filter((article) => {
        if (article.titel == "WEAZEL – Das sind wir") return article;
      })[0];
    },
  },
  mounted() {
    this.set("articles");
    this.set("hints");
  },
};
</script>

<style>
.page-numbers {
  cursor: pointer;
}
</style>
