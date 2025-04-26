<script lang="ts">
import { getJson } from '@/util';
import { ref } from 'vue';

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

export default {
    props: ['src', 'last'],
    methods: {
        replaceInfo(filename: any, info: any) {
            const [ date, time ] = filename.split(' ')
            const [ month, day, year ] = date.split('-')
            const [ hour, minute ] = time.split('-')

            const monthName = months[month - 1]
            const hour12 = hour > 12 ? hour - 12 : hour == 0 ? 12 : hour

            const body = info.body instanceof Array ? info.body.join('<br>') : info.body

            this.title = info.title
            this.body = body
            this.timestamp = `${monthName} ${day}, ${year} at ${hour12}:${minute}${hour > 12 ? 'pm':'am'}`
        }
    },
    setup(props, ctx) {
        return {
            title: ref<string>(),
            body: ref<string>(),
            
            timestamp: ref<string>()
        }
    },
    created() {
        const filename = this.src.substring(0, this.src.lastIndexOf('.'))
        getJson(`/database/newsletter/${this.src}`)
        .then((info) => this.replaceInfo(filename, info))
    }
}
</script>

<template>
    <div class="news-item">
        <h1>{{ title }}</h1>
        <div class="news-timestamp">
            <h3>{{ timestamp }}</h3>
        </div>
        <p class="news-body" v-html="body"></p>
    </div>
    <div v-if="!last" class="hr-wrapper">
        <hr />
    </div>
</template>