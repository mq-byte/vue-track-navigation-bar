<template>
    <div class="trackNavBar">
        <div class="content-box" @scroll="scroll" ref="contentBox">
            <div class="content" ref="content">
                <slot></slot>
            </div>
        </div>
        <div class="nav" ref="navTitle" :style="{...navPosition}">
            <div class="navList" v-for="(v,i) in h4s" :key="i" :class="{active:(i === activeIndex)}" @click="scrollTo(i)">
                {{v.innerHTML}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TrackNavBar",
        props:{
            navPosition:{
                type:Object
            },

        },
        data(){
            return {
                firstScroll:true,
                contentBox:null,
                boxOffsetTop:0,
                content:null,
                h4s:[],
                h4sTops:[],
                activeIndex:0
            }
        },
        mounted(){
            this.contentBox = this.$refs.contentBox;
            this.boxOffsetTop = this.contentBox.offsetTop;
            this.content = this.$refs.content;
            this.h4s = this.content.querySelectorAll('h4');
            this.firstScroll = false;
            for(let i = 0;i < this.h4s.length;i++){
                this.h4sTops.push({offsetTop:this.h4s[i].offsetTop-10,allHeight:this.h4s[i].offsetTop+this.h4s[i].offsetHeight+Number(this.h4s[i].style.margin)+10})
            }
        },
        methods:{
            scroll(){
                for(let i = 0;i < this.h4sTops.length;i++){
                    if(this.contentBox.scrollTop>=this.h4sTops[i].offsetTop && this.contentBox.scrollTop <= this.h4sTops[i].allHeight){
                        this.activeIndex = i;
                        break;
                    }
                }
                let navTitle = this.$refs.navTitle;
                navTitle.scrollTo({
                    left: 0,
                    top: navTitle.querySelectorAll('.navList')[this.activeIndex].offsetTop,
                    behavior: 'smooth'
                })
            },
            scrollTo(i){
                this.contentBox.scrollTo({
                    left: 0,
                    top: this.h4s[i].offsetTop,
                    behavior: 'smooth'
                })
                this.activeIndex = i;
            }
        }
    }
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.content{
    position: relative;
}
.content-box{
    width: 100%;
    height: 100%;
    overflow-y: scroll;
}
.nav{
    position: fixed;
    height: 200px;
    overflow-y: auto;
    width: 150px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    color: #303133;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    /*max-width: 150px;*/
}
.nav>div{
    cursor: pointer;
    padding: 10px;
    max-width: 100%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.nav>div.active{
    color: red;

}
</style>
