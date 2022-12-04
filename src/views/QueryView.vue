<template>
    <div class="mt-16">
        <div>
            <p>ФИО</p>
            <p>Название</p>
            <white-button>Печатное издание</white-button>
            <green-button>Скачать</green-button>
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