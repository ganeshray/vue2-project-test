<template>
  <v-app>
    <v-main>
      <v-container>
        <v-card class="mx-auto" max-width="400">
          <v-card-title>
            <h1>{{ count }}</h1>
          </v-card-title>
          <v-card-actions>
            <v-btn color="primary" @click="increment">Increment</v-btn>
          </v-card-actions>
           <v-card-actions>
            <v-btn color="primary" @click="decrement">Decrement</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.getters.getCount;
    }
  },
  methods: {
    increment() {
      this.$store.dispatch('increment');
    },
    decrement() {
      this.$store.dispatch('decrement')
    }
  }
};
</script>

<style>
/* Add your styles here */
</style>