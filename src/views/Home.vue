<template>
  <div></div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      names: [
        "cars",
        "ourcars",
        "leases",
        "orders",
        "partners",
        "weapons",
        "status",
      ],
    };
  },
  mounted() {
    this.names.forEach((name) => this.set(name));
  },
  methods: {
    ...mapActions(["set"]),
  },
  computed: {
    ...mapGetters(["get"]),
    data() {
      let data = [];
      this.names.forEach((name) => {
        data[name] = this.get(name);
      });
      return data;
    },
  },
};
</script>
