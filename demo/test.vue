<template>
    <TrackNavBar style="height: 700px" >
        <div v-for="j in 100" :key="j">
            <h4 style="background: yellow">{{j}}</h4>
            <div v-for="i in 10" :key="i">123</div>
        </div>
    </TrackNavBar>
</template>

<script>
    export default {
        name: "test"
    }
</script>

<style scoped>

</style>
