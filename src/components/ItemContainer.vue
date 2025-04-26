<script lang="ts">
import { getModList } from '@/pages/Mods/mods'
import ModTile from './ModTile.vue';
import { ref } from 'vue';

export default {
    name: 'item-container',
    props: ['dir'],
    components: {
        ModTile
    },
    async setup(props, ctx) {
        const modDirs = new Array<string>()
        const mods = await getModList(props.dir)
        for (const mod of mods) {
            modDirs.push(`${props.dir}/${mod}`)
        }
        return {
            modDirs: ref(modDirs)
        }
    }
}

</script>

<template>
    <div class="item-container-wrapper">
        <div class="item-container">
            <ModTile v-for="dir in modDirs" :src="dir"/>
        </div>
    </div>
</template>