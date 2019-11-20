<template>
    <div class="trackNavBar" style="height: 700px">
        <div class="content-box">
            <div class="content">
                <div v-for="j in 5" :key="j">
                    <h4>ertertretre</h4>
                    <div v-for="i in 10" :key="i">123</div>
                </div>
            </div>
        </div>
        <div title="nav">

        </div>
    </div>
</template>

<script>
    export default {
        name: "TrackNavBar",
        props:{

        },
        data(){
            return {

            }
        },
        mounted(){

        }
    }
</script>

<style scoped>
.content{
    width: 100%;
    height: 100%;
    overflow-y: scroll;
}
</style>
