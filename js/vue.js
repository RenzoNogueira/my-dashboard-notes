const { createApp } = Vue

createApp({
    components: {
        // Grupo de notas escrito em ingles
        groupNotes: {
            // template: `
            // <li @click="clicked" :id="group_id"><a class="btn btn-outline-secondary border-1 px-5 my-2 fs-5 position-relative w-100" :href="group_link">{{title}}<i class="fa-solid fa-grip-lines fs-6 position-absolute px-1 top-50 end-0 translate-middle "></i></a></li>
            // `,
            template: `
        <ul id="group-notes-sortable" class="nav nav-pills nav-stacked d-flex flex-column justify-content-center align-items-center">
          <li v-for="g in arrayObj" :key="g.id" @click="clicked(g.id)" :id="'group_'+g.id">
            <a class="btn btn-outline-secondary border-1 px-5 my-2 fs-5 position-relative w-100" :href="g.link">
              {{g.title}}<i class="fa-solid fa-grip-lines fs-6 position-absolute px-1 top-50 end-0 translate-middle"></i>
            </a>
          </li>
        </ul>
      `,
            props: {
                arrayObj: {
                    type: Array,
                    required: true
                }
            },
            methods: {

            }
        }

    },
    data() {
        return {
            groupNotes: [{
                    id: 1,
                    title: "Home",
                    link: "home.php"
                },
                {
                    id: 2,
                    title: "About",
                    link: "about.php"
                },
                {
                    id: 3,
                    title: "Contact",
                    link: "contact.php"
                },
                {
                    id: 4,
                    title: "Portfolio",
                    link: "portfolio.php"
                }
            ]
        }
    },
    methods: {
        openLeftPanel: function() {
            $('main').toggleClass('left-panel-is-open')
            $('main').toggleClass('left-panel-is-closed')
        },
    },
    mounted: function() {
        console.log('mounted')
    }
}).mount('#app')