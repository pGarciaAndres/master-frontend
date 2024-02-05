<template>
  <Menubar :model="items">
    <template #item="{ item, props, hasSubmenu }">
      <router-link
        v-if="item.route"
        v-slot="{ href, navigate }"
        :to="item.route"
        custom
      >
        <a
          v-ripple
          :href="href"
          v-bind="props.action"
          @click="navigate"
          class="nav-button"
        >
          <span :class="item.icon" />
          <span
            :class="
              router.currentRoute.value.path === item.route &&
              'router-link-active'
            "
          >
            {{ item.label }}
          </span>
          <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
        </a>
      </router-link>
      <a
        v-else
        v-ripple
        :href="item.url"
        :target="item.target"
        v-bind="props.action"
        class="nav-button"
      >
        <span :class="item.icon" />
        <span>{{ item.label }}</span>
      </a>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
const router = useRouter()

const items = ref([
  {
    label: 'Tareas',
    icon: 'pi pi-home',
    route: '/'
  },
  {
    label: 'Finalizadas',
    icon: 'pi pi-check',
    route: '/done'
  },
  {
    label: 'Todas',
    icon: 'pi pi-qrcode',
    route: '/all'
  },
  {
    label: 'Papelera',
    icon: 'pi pi-trash',
    route: '/deleted',
    items: [
      {
        label: 'Vaciar Papelera',
        icon: 'pi pi-times-circle',
        command: () => {
          const { destroyDeletedTodos } = useTodos()
          destroyDeletedTodos()
        }
      }
    ]
  }
])
</script>

<style scoped>
.nav-button {
  display: flex;
  gap: 0.3em;
  @media screen and (min-width: 960px) {
    color: #bbc4d2;
  }
}

.nav-button:hover {
  color: #334155;
}

.router-link-active {
  text-decoration: underline;
}
</style>
