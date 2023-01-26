<template>
  <a-layout-sider width="320" :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
    <a-menu
      mode="inline"
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      :style="{ height: '100%', borderRight: 0 }"
    >
      <a-sub-menu key="sub1">
        <span slot="title" class="ant-menu-item">
          <i class="anticon">
            <svg viewBox="0 0 1024 1024" width="1.4em" height="1.4em" aria-hidden="true" focusable="false">
              <path
                d="M864 64H160C107 64 64 107 64 160v704c0 53 43 96 96 96h704c53 0 96-43 96-96V160c0-53-43-96-96-96z"
              ></path>
            </svg>
          </i>
          Company
        </span>
        <a-menu-item key="1">
          <a-row type="flex">
            <a-col :flex="4">
              <i class="anticon">
                <ViewGridIcon size="1.4x" />
              </i>
              <span>Tasks</span>
            </a-col>
            <a-col :flex="1">
              <div style="text-align: end">
                <span class="count-badge">{{ tasks.length }}</span>
              </div>
            </a-col>
          </a-row>
        </a-menu-item>
        <a-menu-item key="2">
          <a-row type="flex">
            <a-col :flex="4">
              <i class="anticon">
                <BellIcon size="1.4x" />
              </i>
              <span>Notification</span>
            </a-col>
            <a-col :flex="1">
              <div style="text-align: end">
                <span class="count-badge">7</span>
              </div>
            </a-col>
          </a-row>
        </a-menu-item>
        <a-menu-item key="3">
          <i class="anticon">
            <ChartSquareBarIcon size="1.4x" />
          </i>
          Analytics
        </a-menu-item>
        <a-menu-item key="4">
          <a-row type="flex">
            <a-col :flex="4">
              <i class="anticon">
                <UserIcon size="1.4x" />
              </i>
              <span>Team</span>
            </a-col>
            <a-col :flex="1">
              <div style="text-align: end">
                <span class="count-badge">2</span>
              </div>
            </a-col>
          </a-row>
        </a-menu-item>
        <a-menu-item key="5" class="fixed-bottom">
          <i class="anticon">
            <CogIcon size="1.4x" />
          </i>
          Settings
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import { BellIcon, UserIcon, ChartSquareBarIcon, ViewGridIcon, CogIcon } from '@vue-hero-icons/outline'
import { mapState } from 'vuex'

export default {
  name: 'SiderComponent',
  components: {
    BellIcon,
    UserIcon,
    ChartSquareBarIcon,
    ViewGridIcon,
    CogIcon,
  },
  computed: {
    ...mapState(['tasks']),
  },
}
</script>

<style scoped>
.count-badge {
  margin: 0 1px;
  padding: 0.2em 0.5em;
  border-radius: 3px;
  font-size: 0.9em;
  color: #1d2939;
  background-color: #f2f4f7;
}

.fixed-bottom {
  position: absolute !important;
  bottom: 0 !important;
  width: 276px !important;
}
</style>
