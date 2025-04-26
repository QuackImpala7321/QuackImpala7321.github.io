<script lang="ts">
import { getJson } from '@/util.ts'
import { modsDir, type ModInfo, type ModManifest } from '@/pages/Mods/mods.ts'
import { ref } from 'vue';

export default {
    name: 'mod-item',
    props: ['src'],
    methods: {
        replaceImg(img: HTMLImageElement) {
            this.loadingImg = false
            img.remove()
        },
        replaceInfo(manifest: ModManifest) {
            this.info = {
                title: manifest.name,
                short: manifest.short_description,
                desc: manifest.description,
                source: manifest.source,
                downloads: manifest.downloads
            }
        }
    },
    setup(props, ctx) {
        const modDir = `${modsDir}/${props.src}`
        const imgSrc = `${modDir}/icon.png`

        return {
            loadingImg: ref<boolean>(true),
            imgSrc: ref<string>(imgSrc),

            info: ref<ModInfo>()
        }
    },
    created() {
        const modDir = `${modsDir}/${this.src}`

        getJson(`${modDir}/manifest.json`)
        .then(this.replaceInfo)

        const img = new Image()
        img.onload = () => this.replaceImg(img)
        img.src = this.imgSrc
    }
}
</script>

<template>
    <div class="mod-item">
        <div class="mod-item-body">
            <div v-if="loadingImg" class="mod-img-placeholder"></div>
            <img v-else :src="imgSrc">
            <div class="mod-item-head">
                <h2>{{ info?.title ?? "Loading..." }}</h2>
                <p>{{ info?.short ?? "Loading..." }}</p>
            </div>
        </div>
        <div class="button-row">
            <a v-if="info?.source" :href="info.source">
                <p>Source</p>
            </a>
            <a v-if="info?.downloads" :href="info.downloads">
                <p>Downloads</p>
            </a>
        </div>
    </div>
</template>