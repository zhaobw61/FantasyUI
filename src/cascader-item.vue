<template>
    <div class="cascaderItem">
        {{sourceItem.name}}
        <cascader-item
            v-if="sourceItem.children"
            v-for="item in sourceItem.children"
            :key = "item.name"
            :sourceItem="item"
        ></cascader-item>
    </div>
</template>

<script>
export default {
    name: 'cascaderItem',
    props: {
        sourceItem: {
            type: Object
        }
    }
}
</script>

<style scoped lang="scss">

</style>

