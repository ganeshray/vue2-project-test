
  <template>
  <v-app>
    <v-toolbar app>
      <!-- <v-toolbar-title > <v-btn text to ="/"> My Vue App</v-btn> </v-toolbar-title> -->
      <v-spacer></v-spacer>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/about">About</v-btn>
    </v-toolbar>
    <v-main>
      <v-container>
        <router-view></router-view>
         <MyTodoForm />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>

import MyTodoForm from './MyTodoForm';

export default {
  name: 'HeaderMenu',
  components: {
    MyTodoForm,
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>