<template>
    <div class="m-md-tips">
        <p>Tips</p>
        <slot></slot>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                //
            }
        },
    }
</script>

<style lang="stylus">
.m-md-tips {
    color: #fff;
    background-color: $accentColor;
    border-radius: 6px;
}
</style>