<template>
  <div class="sticky-sidebar">
    <section id="categories-2" class="widget widget_categories">
      <h3 class="widget-title">Kategorien</h3>
      <form>
        <label class="screen-reader-text" for="cat">Kategorien</label>
        <select
          name="cat"
          id="cat"
          class="postform"
          v-model="category"
          @change="goTo()"
        >
          <option value="">Kategorie auswählen</option>
          <option
            v-for="(cat, index) of categoriesArray"
            :key="index"
            class="level-0"
            :value="cat"
          >
            {{ cat }}
          </option>
        </select>
      </form>
    </section>
    <section id="categories-2" class="widget widget_werb" v-if="ads[0]">
      <img :src="ads[0].bild" />
    </section>
    <section id="recent-posts-2" class="widget widget_recent_entries">
      <h3 class="widget-title">Neueste Beiträge</h3>
      <ul>
        <li v-for="(article, index) of articles.slice(0, 5)" :key="index">
          <router-link :to="'/article/' + article.id">
            {{ article.titel }}
          </router-link>
        </li>
      </ul>
    </section>
    <section id="media_image-3" class="widget widget_media_image">
      <img
        width="1000"
        height="505"
        src="../wp-content/uploads/2021/01/weazellogobg-iutt-e1611958933170.png"
        class="image wp-image-131 attachment-1000x1000 size-1000x1000"
        alt=""
        loading="lazy"
        style="max-width: 100%; height: auto"
        srcset="
          ../wp-content/uploads/2021/01/weazellogobg-iutt-e1611958933170.png         1000w,
          ../wp-content/uploads/2021/01/weazellogobg-iutt-e1611958933170-300x152.png  300w,
          ../wp-content/uploads/2021/01/weazellogobg-iutt-e1611958933170-768x388.png  768w
        "
        sizes="(max-width: 1000px) 100vw, 1000px"
      />
    </section>
  </div>
  <!-- .sticky-sidebar -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      category: "",
    };
  },
  mounted() {
    this.set("categories");
    this.set("articles");
  },
  methods: {
    ...mapActions(["set"]),
    goTo() {
      this.$router.push("/category/" + this.category.toLowerCase());
    },
  },
  computed: {
    ...mapGetters({
      categories: "getCategories",
      articles: "getArticles",
      ads: "getAds",
    }),
    categoriesArray() {
      return this.categories.map((cat) => cat.titel);
    },
  },
};
</script>

<style></style>
