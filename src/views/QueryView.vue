<template>
    <div>
        <div>
            <p>ФИО</p>
            <p>Название</p>
            <white-button></white-button>
            <green-button></green-button>
        </div>
    </div>
</template>

<script>
import GreenButton from '@/components/GreenButton.vue';
import WhiteButton from '@/components/WhiteButton.vue';

export default {
    components:{
        GreenButton, WhiteButton
    },
}
</script>