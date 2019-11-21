<template>
    <div class="trackNavBar">
        <div class="content-box" @scroll="scroll" ref="contentBox">
            <div class="content" ref="content">
                <slot></slot>
            </div>
        </div>
        <div class="nav">
            <div v-for="(v,i) in h4s" :key="i" v-html="v.innerHTML" :class="{active:(i === activeIndex)}" @click="scrollTo(i)">
                {{v.innerHTML}}
            </div>
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
                firstScroll:true,
                contentBox:null,
                boxOffsetTop:0,
                content:null,
                h4s:[],
                h4sTops:[],
                activeIndex:0,
                clickId:-1
            }
        },
        mounted(){
            this.contentBox = this.$refs.contentBox;
            this.boxOffsetTop = this.contentBox.offsetTop;
            this.content = this.$refs.content;
            this.h4s = this.content.querySelectorAll('h4');
            this.firstScroll = false;
            for(let i = 0;i < this.h4s.length;i++){
                this.h4sTops.push(this.h4s[i].offsetTop-this.boxOffsetTop-this.contentBox.scrollTop)
            }
        },
        methods:{
            scroll(){
                for(let i = 0;i < this.h4s.length;i++){
                    let h4sTops = this.h4s[i].offsetTop-this.boxOffsetTop-this.contentBox.scrollTop;
                    if(h4sTops*this.h4sTops[i]<=0){
                        this.activeIndex = i;
                    }
                    this.h4sTops[i] = h4sTops;
                }

            },
            scrollTo(i){
                this.contentBox.scrollTo({
                    left: 0,
                    top: this.h4s[i].offsetTop-10,
                    behavior: 'smooth'
                })
            }
        }
    }
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.content-box{
    width: 100%;
    height: 100%;
    overflow-y: scroll;
}
.nav{
    position: fixed;
    top: 100px;
    right: 100px;
}
.nav>div{
    cursor: pointer;
}
.nav>div.active{
    color: red;
}
</style>
