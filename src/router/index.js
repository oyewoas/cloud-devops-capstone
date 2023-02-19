import Vue from 'vue'
import Router from 'vue-router'
import PeopleList from '../views/ViewPeopleList.vue'
import PlanetList from '../views/ViewPlanetList.vue'
import StarshipList from '../views/ViewStarshipList.vue'


Vue.use(Router);

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'peoplelist',
      component: PeopleList
    },
    {
      path: '/planetlist',
      name: 'planetlist',
      component: PlanetList
    },
    {
      path: '/starshiplist',
      name: 'starshiplist',
      component: StarshipList
    },
    // {
    //     path: '*',
    //     name: 'peoplelist',
    //     component: PeopleList
    //   },
  ]
});


export default router;