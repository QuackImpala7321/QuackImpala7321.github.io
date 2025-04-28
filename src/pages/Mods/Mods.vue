<script setup lang="ts">
import ItemContainer from '@/components/ItemContainer.vue';
import Navbar from '@/components/Navbar.vue';
import { injectHead } from '@/inject-meta';

injectHead("Mods - Quack's Portfolio")
</script>

<template>
  <Navbar />
  <div class="main-contents" style="margin-left: 400px; margin-right: 400px;">
    <div class="main-contents-header">
      <h1>Mods</h1>
    </div>
    <Suspense>
      <ItemContainer dir="mods"/>
    </Suspense>
	</div>
</template>

<style src="@/assets/style.css" />
