<template>
  <a-layout-content :style="{ padding: '20px', margin: 0, height: '100vh' }">
    <a-button class="mb-40" @click="addSection">
      <i class="anticon">
        <PlusSmIcon size="1.4x" class="custom-class" /> </i
      >Add New Section
    </a-button>
    <div class="horizontally-scroll">
      <draggable group="section" v-model="sections" class="d-flex">
        <Section
          v-for="section in sections"
          :key="section.id"
          :section="section"
          @change-section-name="changeSectionName"
        >
        </Section>
      </draggable>
    </div>
  </a-layout-content>
</template>

<script>
import { mapActions } from 'vuex'
import Section from './Section.vue'
import { PlusSmIcon } from '@vue-hero-icons/outline'
import draggable from 'vuedraggable'

export default {
  name: 'ContentComponent',
  components: {
    Section,
    PlusSmIcon,
    draggable,
  },
  computed: {
    sections: {
      get() {
        return this.$store.state.sections
      },
      set(value) {
        this.$store.commit('UPDATE_SECTIONS', value)
      },
    },
  },
  methods: {
    ...mapActions(['addNewSection', 'renameSection']),

    addSection() {
      this.addNewSection()
    },

    changeSectionName(section) {
      this.renameSection(section)
    },
  },
}
</script>

<style scoped>
.fixed {
  position: fixed !important;
  height: 100%;
}

.horizontally-scroll {
  height: calc(100% - 55px);
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}

.mb-40 {
  margin-bottom: 40px;
}

.d-flex {
  display: flex;
}
</style>
