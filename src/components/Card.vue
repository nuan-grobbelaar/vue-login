<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style>
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    border-radius: 5px;

    height: 100vh;
  }
</style>