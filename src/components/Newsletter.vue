<script lang="ts">
import { getJson } from '@/util';
import NewsItem from './NewsItem.vue';
import { ref } from 'vue';

export default {
    components: {
        NewsItem
    },
    setup() {
        return {
            entries: ref<string[]>([])
        }
    },
    created() {
        getJson("/database/newsletter/entries.json")
        .then(entries => this.entries = entries)
    }
}
</script>

<template>
    <div v-if="entries.length > 1" class="newsletter">
        <NewsItem v-for="entry of entries.slice(0, -1)" :src="entry" :last="false" />
        <NewsItem :src="entries[entries.length - 1]" :last="true" />
    </div>
    <div v-else-if="entries.length > 0" class="newsletter">
        <NewsItem :src="entries[0]" :last="true" />
    </div>
</template>