<script setup lang="ts">
import ItemContainer from '@/components/ItemContainer.vue';
import Navbar from '@/components/Navbar.vue';
import { injectHead } from '@/inject-meta';

injectHead("Mods - Quack's Portfolio")
</script>

<template>
  <Navbar />
  <div class="main-contents">
		<h1>Mods</h1>
    <Suspense>
      <ItemContainer dir="mods"/>
    </Suspense>
	</div>
</template>

<style src="@/assets/style.css" />
