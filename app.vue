<script setup></script>

<template>
  <NuxtPage />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  overflow-x: hidden;
  vertical-align: middle;
  font-family: "Poppins", sans-serif;
}
body {
  background-color: #121212;
  color: white;
}

:root {
  --grid-gaps: 0.5rem;
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-track:hover {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5rem;
  }
}
</style>
