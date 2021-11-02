<template>
  <footer id="colophon" class="site-footer" role="contentinfo">
    <div class="container" v-if="ads.length > 1">
      <section class="featured-stories">
        <h2 class="stories-title">Werbungen</h2>
        <div class="row gutter-parent-14">
          <div class="w-100 grid-images">
            <img
              v-for="(ad, index) of ads.slice(1, 5)"
              :key="index"
              :src="ad.bild"
              class="w-100"
            />
            <!-- .post-boxed -->
          </div>
          <!-- .col-sm-6 .col-lg-3 -->
        </div>
        <!-- .row -->
      </section>
      <!-- .featured-stories -->
    </div>
    <!-- .container -->

    <div class="widget-area">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-lg-3">
            <section id="text-5" class="widget widget_text">
              <div class="textwidget">
                <p><strong>WEAZEL</strong></p>
                <p>Redaktion &amp; Eventagentur</p>
                <p>Shauni Teller &amp; Glinda Leverstone</p>
                <p>
                  Portola Drive 5145<br />
                  Los Santos<br />
                  1822 – 9600 9997
                </p>
                <p><strong>Spenden</strong> VBAN: 683 485</p>
              </div>
            </section>
          </div>
          <!-- footer sidebar column 1 -->
          <div class="col-sm-6 col-lg-3"></div>
          <!-- footer sidebar column 2 -->
          <div class="col-sm-6 col-lg-3"></div>
          <!-- footer sidebar column 3 -->
          <div class="col-sm-6 col-lg-3">
            <section id="text-7" class="widget widget_text">
              <div class="textwidget">
                <p>
                  <img
                    loading="lazy"
                    class="alignright wp-image-1015"
                    src="../wp-content/uploads/2021/02/verified-300x200.png"
                    alt=""
                    width="250"
                    height="167"
                    srcset="
                      ../wp-content/uploads/2021/02/verified-300x200.png   300w,
                      ../wp-content/uploads/2021/02/verified-1024x683.png 1024w,
                      ../wp-content/uploads/2021/02/verified-768x512.png   768w,
                      ../wp-content/uploads/2021/02/verified.png          1200w
                    "
                    sizes="(max-width: 250px) 100vw, 250px"
                  />
                </p>
              </div>
            </section>
          </div>
          <!-- footer sidebar column 4 -->
        </div>
        <!-- .row -->
      </div>
      <!-- .container -->
    </div>
    <!-- .widget-area -->
    <!-- .container -->
    <div class="back-to-top"><a title="Go to Top" href="#masthead"></a></div>
  </footer>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions(["set"]),
  },
  computed: {
    ...mapGetters({
      ads: "getAds",
    }),
  },
  mounted() {
    this.set("werb");
  },
};
</script>

<style scoped>
.w-100 {
  width: 100%;
}
img {
  margin-right: 0.7vw;
}
.grid-images {
  display: grid;
  gap: calc(5% / 3);
  grid-auto-flow: column;
  grid-template-columns: repeat(4, 22.5%);
  justify-content: center;
  align-items: center;
}
</style>
