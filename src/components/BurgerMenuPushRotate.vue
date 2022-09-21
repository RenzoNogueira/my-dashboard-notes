<template>
  <div class="d-flex justify-content-center">
    <PushRotate left>
      <!-- <CardMenu/> -->
      <div>
        <ul id="sortable" class="list-group bg-transparent border-0 w-100">
          <li class="ui-state-default list-group-item bg-white w-100 my-1" v-for="card in cardsMenu" :key="card.id">
            <CardMenu :id="card.id" :title="card.title" @remove-card="removeCard" />
          </li>
        </ul>
      </div>
    </PushRotate>
  </div>
</template>


<script>
import { PushRotate } from 'vue-burger-menu'
import CardMenu from '@/components/cards/CardMenu.vue'
import $ from "jquery";
import "jquery-ui";
import "jquery-ui/ui/widgets/sortable.js";

export default {
  name: 'BurgerMenuPushRotate',
  data () {
    return {
      cardsMenu: [ { id: 1, title: 'title 1' }, { id: 2, title: 'title 2' }, { id: 3, title: 'title 3' }, {
        id: 4,
        title: 'title 4'
      }, { id: 5, title: 'title 5' }, { id: 6, title: 'title 6' }, { id: 7, title: 'title 7' } ]
    }
  },
  components: {
    PushRotate,
    CardMenu
  },
  methods: {
    removeCard: function ( id ) {
      this.cardsMenu = this.cardsMenu.filter( card => card.id !== id )
    }
  },
  mounted () {
    $( "#sortable" ).sortable( {
      placeholder: "ui-state-highlight"
    } );
  }
}
</script>

<style>
.bm-menu {
  background-color: var(--bs-gray-200);
}
</style>
