

<template>
    <transition>
        <div class="car-item" v-if="selfIndex === currentIndex">
            <slot></slot>
        </div>
    </transition>
</template>
<script lang="ts">
import {getCurrentInstance,reactive,toRefs,watch} from 'vue' 
    export default{
        name:"CarItem",
        setup(){
            const instance = getCurrentInstance() //获取当前组件实例
            // console.log(instance)
            //获取key
            const state = reactive({
                selfIndex:instance.vnode.key,
                currentIndex:instance.parent.ctx.currentIndex
            })
            console.log(state)

            watch(()=>{
                return instance.parent.ctx.currentIndex
            },(value)=>{
                state.currentIndex = value
            })
            return{
                ...toRefs(state)
            }
        }
    }
</script>
<style scoped lang="scss">
.car-item{
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
}

.v-enter-active,
.v-leave-active{
    transition:all .3s linear;
}
.v-enter-active{
    transform:translateX(100%)
}
.v-enter-to{
    transform:translateX(0%)
}
.v-leave-active{
    transform:translateX(0%)
}
.v-leave-to{
    transform:translateX(-100%)
}
img{
    width:100%;
}
</style>
