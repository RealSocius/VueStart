<template>
  <div>
    <header>
      <div id="breadcrumb">
        <div class="container">
          <div
            role="navigation"
            aria-label="Breadcrumbs"
            class="breadcrumb-trail breadcrumbs"
            itemprop="breadcrumb"
          >
            <ul
              class="trail-items"
              itemscope
              itemtype="http://schema.org/BreadcrumbList"
            >
              <meta name="numberOfItems" content="2" />
              <meta name="itemListOrder" content="Ascending" />
              <li
                itemprop="itemListElement"
                itemscope
                itemtype="http://schema.org/ListItem"
                class="trail-item trail-begin"
              >
                <router-link to="/" rel="home" itemprop="item"
                  ><span itemprop="name">Home</span></router-link
                >
                <meta itemprop="position" content="1" />
              </li>
              <li
                itemprop="itemListElement"
                itemscope
                itemtype="http://schema.org/ListItem"
                class="trail-item trail-end"
              >
                <span itemprop="name">Portfolio</span>
                <meta itemprop="position" content="2" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- .breadcrumb -->
    </header>
    <!-- #masthead -->
    <div id="content" class="site-content">
      <div class="container">
        <div class="row justify-content-center site-content-row">
          <div id="primary" class="col-lg-8 content-area">
            <main id="main" class="site-main">
              <div
                id="post-527"
                class="post-527 page type-page status-publish hentry"
              >
                <header class="entry-header">
                  <h1 class="entry-title">Portfolio</h1>
                </header>
                <!-- .entry-header -->

                <div class="entry-content" v-html="portfolio.text"></div>
                <!-- .entry-content -->
              </div>
              <!-- #post-527 -->
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
import { mapActions, mapGetters } from "vuex";

export default {
  mounted() {
    this.set("portfolio");
  },
  methods: {
    ...mapActions(["set"]),
  },
  computed: {
    ...mapGetters({
      portfolio: "getPortfolio",
    }),
  },
};
</script>
