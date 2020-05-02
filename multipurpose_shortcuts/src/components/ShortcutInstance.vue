<template>
    <div>
        {{ getBlah }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "ShortcutInstance",
    computed: mapGetters(['getBlah'])
};

</script>


<style scoped>

</style>