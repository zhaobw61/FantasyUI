<template>
    <div>
        <g-slides>
            <g-slides-item>
                <div class="box">1</div>
            </g-slides-item>
            <g-slides-item>
                <div class="box">2</div>
            </g-slides-item>
            <g-slides-item>
                <div class="box">3</div>
            </g-slides-item>
        </g-slides>
    </div>
</template>
<script>
import GSlides from './slides';
import GSlidesItem from './slides-item';
export default {
    name:'demo',
    components: {GSlides, GSlidesItem},
    data() {
        return {}
    }
}
</script>
<style scoped lang="scss">
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .box{
        width: 200px;
        height: 150px;
        background: #ddd;
        border: 1px solid red;
    }
</style>
