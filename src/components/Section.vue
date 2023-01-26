<template>
  <a-col class="section-container">
    <div class="section-card">
      <a-row type="flex" class="mb-20">
        <a-col :flex="3">
          <p v-if="!isEditing" class="section-title" @click="editSectionName">
            {{ section.name }}
          </p>
          <a-input
            v-else
            ref="sectionNameInput"
            class="new-section-input"
            :placeholder="section.name"
            v-model="newSectionName"
            @keyup.enter="changeSectionName"
            @blur="changeSectionName"
          />
        </a-col>
        <a-col :flex="2">
          <div class="text-end">
            <a-button @click="modalVisible = true">
              <i class="anticon">
                <PlusSmIcon size="1.4x" class="custom-class" />
              </i>
              Add Task
            </a-button>
          </div>
        </a-col>
      </a-row>
      <div class="vertically-scroll">
        <draggable tag="div" class="min-h-700" group="sectionItem">
          <Task v-for="task in sectionTasks" :key="task.id" :task="task" />
        </draggable>
      </div>
    </div>
    <a-modal v-model="modalVisible" title="New Task" @ok="handleOk" @cancel="handleCancel">
      <div style="margin: 24px 0">
        <a-input placeholder="Title" v-model="taskTitle" />
      </div>
      <div style="margin: 24px 0">
        <a-date-picker v-model="taskDate" />
      </div>
      <div style="margin: 24px 0">
        <a-input placeholder="User Name" v-model="taskUserName" />
      </div>
      <div style="margin: 24px 0">
        <a-textarea placeholder="Enter your text.." :auto-size="{ minRows: 2, maxRows: 6 }" v-model="taskText" />
      </div>
    </a-modal>
  </a-col>
</template>

<script>
import Task from '@/components/Task.vue'
import { mapActions, mapState } from 'vuex'
import { PlusSmIcon } from '@vue-hero-icons/outline'
import draggable from 'vuedraggable'

export default {
  name: 'SectionComponent',
  props: {
    section: {
      type: Object,
      required: true,
    },
  },
  components: {
    Task,
    PlusSmIcon,
    draggable,
  },
  data() {
    return {
      newSectionName: '',
      modalVisible: false,
      isEditing: false,
      taskTitle: '',
      taskDate: '',
      taskUserName: '',
      taskText: '',
    }
  },
  computed: {
    ...mapState(['tasks', 'sections']),

    sectionTasks() {
      return this.tasks.filter((task) => {
        return task.sectionId === this.section.id
      })
    },
  },
  methods: {
    ...mapActions(['addNewTask']),

    changeSectionName() {
      if (this.newSectionName.length === 0) {
        this.isEditing = false
        return
      }

      this.isEditing = false

      this.$emit('change-section-name', {
        id: this.section.id,
        name: this.newSectionName,
      })
    },

    editSectionName() {
      this.isEditing = true
      this.$nextTick(() => {
        this.$refs.sectionNameInput.focus()
      })
    },

    handleOk() {
      if (
        this.taskTitle.length !== 0 &&
        this.taskDate.length !== 0 &&
        this.taskUserName.length !== 0 &&
        this.taskText.length !== 0
      ) {
        this.addNewTask({
          taskTitle: this.taskTitle,
          taskDate: this.taskDate,
          taskUserName: this.taskUserName,
          taskText: this.taskText,
          sectionId: this.section.id,
        })
      }

      this.modalVisible = false
      this.taskTitle = ''
      this.taskDate = ''
      this.taskUserName = ''
      this.taskText = ''
    },

    handleCancel() {
      this.taskTitle = ''
      this.taskDate = ''
      this.taskUserName = ''
      this.taskText = ''
    },
  },
}
</script>

<style scoped>
.section-container {
  width: 390px;
  display: inline-block;
  margin-right: 20px;
}

.section-card {
  background-color: transparent;
  width: 370px;
  border: 1px solid #e8e8e8;
  padding: 20px;
}

.vertically-scroll {
  margin: 5px;
  padding: 5px;
  width: 340px;
  height: 720px;
  overflow-x: hidden;
  overflow-y: scroll;
  white-space: nowrap;
  text-align: justify;
}

.new-section-input {
  width: 130px !important;
}

.section-title {
  color: #667085;
  margin-top: 5px;
}

.text-end {
  text-align: end;
}

.min-h-700 {
  min-height: 700px;
}
</style>
