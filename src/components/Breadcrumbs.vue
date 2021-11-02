<template>
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
          <meta name="itemListOrder" content="Ascending" />
          <li
            itemprop="itemListElement"
            itemscope
            itemtype="http://schema.org/ListItem"
            class="trail-item trail-begin"
          >
            <router-link to="/" rel="home" itemprop="item">
              <span itemprop="name">Home</span>
            </router-link>
            <meta itemprop="position" />
          </li>
          <li
            v-if="categories.includes('WEAZEL NEWS') && title != 'WEAZEL NEWS'"
            itemprop="itemListElement"
            itemscope
            itemtype="http://schema.org/ListItem"
            class="trail-item trail-begin"
          >
            <router-link to="/" rel="home" itemprop="item">
              <span itemprop="name">WEAZEL NEWS</span>
            </router-link>
            <meta itemprop="position" />
          </li>
          <li
            v-if="
              categories.includes('San Andreas News') &&
              title != 'San Andreas News'
            "
            itemprop="itemListElement"
            itemscope
            itemtype="http://schema.org/ListItem"
            class="trail-item trail-begin"
          >
            <router-link to="/" rel="home" itemprop="item">
              <span itemprop="name">San Andreas News</span>
            </router-link>
            <meta itemprop="position" />
          </li>
          <li
            v-if="
              categories.includes('Lifestyle') &&
              title != 'Lifestyle' &&
              !categories.includes('WEAZEL NEWS')
            "
            itemprop="itemListElement"
            itemscope
            itemtype="http://schema.org/ListItem"
            class="trail-item trail-begin"
          >
            <router-link to="/" rel="home" itemprop="item">
              <span itemprop="name">Lifestyle</span>
            </router-link>
            <meta itemprop="position" />
          </li>
          <li
            v-if="
              categories.includes('Party') &&
              title != 'Party' &&
              !categories.includes('WEAZEL NEWS')
            "
            itemprop="itemListElement"
            itemscope
            itemtype="http://schema.org/ListItem"
            class="trail-item trail-begin"
          >
            <router-link to="/" rel="home" itemprop="item">
              <span itemprop="name">Party</span>
            </router-link>
            <meta itemprop="position" />
          </li>
          <li
            itemprop="itemListElement"
            itemscope
            itemtype="http://schema.org/ListItem"
            class="trail-item trail-end"
          >
            <span itemprop="name">{{ title }}</span>
            <meta itemprop="position" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      route: this.$route.fullPath,
    };
  },
  props: {
    categories: null,
    title: null,
  },
};
</script>
