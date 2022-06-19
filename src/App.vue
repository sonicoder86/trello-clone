<script setup lang="ts">
import { AppHeader, AppFooter, Board } from './components';
undefined
</script>

<template>
  <div id="app" class="d-flex flex-column text-light">
    <AppHeader />
    <div id="content" class="container-fluid py-2 px-0 bg-light-blue">
      <Board />
    </div>
    <AppFooter />
  </div>
</template>

<style lang="scss">
@import './app.scss';
</style>
