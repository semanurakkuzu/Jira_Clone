import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    sections: [],
    tasks: [],
  }),

  mutations: {
    UPDATE_SECTIONS(state, sections) {
      state.sections = sections
    },

    ADD_NEW_SECTION(state) {
      state.sections.push({
        id: Math.floor(Math.random() * 100000),
        name: 'New Task',
      })
    },

    ADD_NEW_TASK(state, { taskTitle, taskDate, taskUserName, taskText, sectionId }) {
      taskDate = new Date().toLocaleDateString('en-us', { day: 'numeric', weekday: 'short', month: 'short' })
      
      state.tasks.push({
        title: taskTitle,
        date: taskDate,
        name: taskUserName,
        text: taskText,
        sectionId: sectionId,
      })
    },

    RENAME_SECTION(state, { id, name }) {
      const sectionIndex = state.sections.findIndex((item) => item.id === id)
      state.sections[sectionIndex].name = name
    },
  },
  actions: {
    addNewSection({ commit }) {
      commit('ADD_NEW_SECTION')
    },

    addNewTask({ commit }, newTask) {
      commit('ADD_NEW_TASK', newTask)
    },

    renameSection({ commit }, section) {
      commit('RENAME_SECTION', section)
    },
  },
})
