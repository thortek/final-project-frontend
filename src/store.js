  
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editableCourse: null
    },
    getters: {
        currentEditableCourse: state => {
            return state.editableCourse
        }
    },
  mutations: {
      editCourse(state, editableCourse) {
          state.editableCourse = editableCourse
    }
  },
  actions: {
      editCourse(context, course) {
          context.commit('editCourse', course)
    }
  }
})