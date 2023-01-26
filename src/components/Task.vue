<template>
  <div>
    <a-card class="w-300">
      <h6 class="task-title title-ellipsis">{{ task.title }}</h6>
      <div class="mb-20 name-ellipsis">
        <span class="text-color-light-gray date">{{ task.date }} - </span>
        <span class="text-color-light-gray">Created by </span>
        <span class="text-color-dark-gray"> {{ task.name }}</span>
      </div>
      <p class="text-color-light-gray text-ellipsis">
        {{ task.text }}
      </p>
    </a-card>
    <br />
  </div>
</template>

<script>
export default {
  name: 'TaskComponent',
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.task-title {
  color: #1d2939;
  font-size: 24px;
}

.text-color-light-gray {
  color: #98a2b3 !important;
}

.text-color-dark-gray {
  color: #667085;
}

.w-300 {
  width: 300px;
}

.ant-card {
  border-radius: 10px !important;
}

.date::after {
  width: 15px;
  height: 15px;
  background-color: #667085;
  border-radius: 50%;
}

.text-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.name-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.title-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 250px;
}
</style>
