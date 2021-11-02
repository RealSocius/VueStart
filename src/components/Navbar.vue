<template>
  <nav class="navbar navbar-expand-lg d-block">
    <div class="navbar-head navbar-bg-set">
      <div class="container">
        <div class="row navbar-head-row align-items-center">
          <div class="col-lg-4">
            <div class="site-branding navbar-brand">
              <router-link
                to="/"
                class="custom-logo-link"
                rel="home"
                aria-current="page"
              >
                <img
                  width="940"
                  height="340"
                  src="../wp-content/uploads/2021/01/weazel2-2.png"
                  class="custom-logo"
                  alt=""
                  srcset="
                    ../wp-content/uploads/2021/01/weazel2-2.png         940w,
                    ../wp-content/uploads/2021/01/weazel2-2-300x109.png 300w,
                    ../wp-content/uploads/2021/01/weazel2-2-768x278.png 768w
                  "
                  sizes="(max-width: 940px) 100vw, 940px"
              /></router-link>
              <h1 class="site-title">
                <router-link to="/" rel="home"></router-link>
              </h1>
            </div>
            <!-- .site-branding .navbar-brand -->
          </div>
        </div>
        <!-- .row -->
      </div>
      <!-- .container -->
    </div>
    <!-- .navbar-head -->
    <div class="navigation-bar">
      <div class="navigation-bar-top">
        <div class="container">
          <button
            class="navbar-toggler menu-toggle"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <span class="search-toggle"></span>
        </div>
        <!-- .container -->
        <div class="search-bar">
          <div class="container">
            <div class="search-block off">
              <form
                @submit.prevent="
                  search ? $router.push('/search/' + search) : ''
                "
                class="search-form"
              >
                <label class="assistive-text"> Search </label>
                <div class="input-group">
                  <input
                    type="search"
                    placeholder="Search"
                    class="form-control s"
                    v-model="search"
                  />
                  <div class="input-group-prepend">
                    <button class="btn btn-theme">Search</button>
                  </div>
                </div>
              </form>
              <!-- .search-form -->
            </div>
            <!-- .search-box -->
          </div>
          <!-- .container -->
        </div>
        <!-- .search-bar -->
      </div>
      <!-- .navigation-bar-top -->
      <div class="navbar-main">
        <div class="container">
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div
              id="site-navigation"
              class="main-navigation nav-uppercase"
              role="navigation"
            >
              <ul class="nav-menu navbar-nav d-lg-block">
                <li
                  id="menu-item-62"
                  class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-62"
                >
                  <router-link to="/" aria-current="page"
                    >Startseite</router-link
                  >
                </li>
                <li
                  id="menu-item-499"
                  class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-499"
                >
                  <router-link to="/category/weazel%20news"
                    >WEAZEL NEWS</router-link
                  >
                  <ul class="sub-menu">
                    <li
                      id="menu-item-492"
                      class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-492"
                    >
                      <router-link to="/category/san%20andreas%20news"
                        >San Andreas News</router-link
                      >
                    </li>
                    <li
                      id="menu-item-494"
                      class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-494"
                    >
                      <router-link to="/category/los%20santos">
                        Los Santos
                      </router-link>
                    </li>
                    <li
                      id="menu-item-496"
                      class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-496"
                    >
                      <router-link to="/category/sandy%20shores"
                        >Sandy Shores</router-link
                      >
                    </li>
                    <li
                      id="menu-item-495"
                      class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-495"
                    >
                      <router-link to="/category/paleto%20bay"
                        >Paleto Bay</router-link
                      >
                    </li>
                    <li
                      id="menu-item-493"
                      class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-493"
                    >
                      <router-link to="/category/grapeseed"
                        >Grapeseed</router-link
                      >
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-477"
                  class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-477"
                >
                  <router-link to="/category/lifestyle">Lifestyle</router-link>
                  <ul class="sub-menu">
                    <li
                      id="menu-item-488"
                      class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-488"
                    >
                      <router-link to="/category/fashion">Fashion</router-link>
                    </li>
                    <li
                      id="menu-item-479"
                      class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-479"
                    >
                      <router-link to="/category/body%20art"
                        >Body Art</router-link
                      >
                    </li>
                    <li
                      id="menu-item-487"
                      class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-487"
                    >
                      <router-link to="/category/carporn">Carporn</router-link>
                    </li>
                    <li
                      id="menu-item-489"
                      class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-489"
                    >
                      <router-link to="/category/foodporn"
                        >Foodporn</router-link
                      >
                    </li>
                    <li
                      id="menu-item-1233"
                      class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1233"
                    >
                      <router-link to="/category/fitness">Fitness</router-link>
                    </li>
                    <li
                      id="menu-item-478"
                      class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-478"
                    >
                      <router-link to="/category/gossip">Gossip</router-link>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-647"
                  class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-647"
                >
                  <router-link to="/category/urban">Urban</router-link>
                </li>
                <li
                  id="menu-item-481"
                  class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-481"
                >
                  <router-link to="/category/business">Business</router-link>
                </li>
                <li
                  id="menu-item-755"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-755"
                >
                  <router-link to="/events">EVENTS</router-link>
                  <ul class="sub-menu">
                    <li
                      id="menu-item-482"
                      class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-482"
                    >
                      <router-link to="/category/events">Events</router-link>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-78"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-78"
                >
                  <router-link to="/about-us">Über uns</router-link>
                  <ul class="sub-menu">
                    <li
                      id="menu-item-524"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-524"
                    >
                      <router-link to="/about-weazel-news"
                        >Über das Projekt</router-link
                      >
                    </li>
                    <li
                      id="menu-item-529"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-529"
                    >
                      <router-link to="/portfolio">Portfolio</router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <!-- #site-navigation .main-navigation -->
          </div>
          <!-- .navbar-collapse -->
          <div class="nav-search">
            <span class="search-toggle"></span>
          </div>
          <!-- .nav-search -->
        </div>
        <!-- .container -->
      </div>
      <!-- .navbar-main -->
    </div>
    <!-- .navigation-bar -->
  </nav>
  <!-- .navbar -->
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar-bg-set {
  background-image: url("../wp-content/uploads/2021/02/grand-theft-auto-v-los-santos-tapete-4096x1152-19329_76-scaled.jpg");
}
</style>
