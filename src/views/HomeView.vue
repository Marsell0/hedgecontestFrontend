<template>
  <div class="main_block mt-16 p-4 bg-white flex-full_width ml-auto mr-auto flex-col">
    <div>
      <white-label>step name</white-label>
      <white-label>step deadline</white-label>
    </div>
    <div>
      <div>
        <h1 class="text-main_green text-6xl max-w-mainblock_header">Ежегодный областной творческий конкурс</h1>
      </div>
      <div>
        <img class="inline-block" src="../assets/logo.svg">
        <p class="text-xl max-w-mainblock_subtitle">Министерство региональной и информационной политики Оренбургской области</p>
      </div>
    </div>
    <div class="mt-16 bg-bg_color flex-full_width ml-auto mr-auto">
      <p class="text-3xl font-bold">Описание</p>
      <p class="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsa neque libero tenetur adipisci eum id nobis accusamus nostrum deserunt. Vitae veritatis non dolorem suscipit et officiis quibusdam, iusto numquam, ratione at provident laborum voluptatibus praesentium! Nam fugit maxime a non necessitatibus obcaecati aliquid accusantium ea consequuntur reprehenderit voluptate id fuga sunt cum dolorem recusandae, eveniet molestias neque qui, veniam voluptates tenetur modi placeat. Culpa, ipsa quod! Mollitia possimus aspernatur assumenda saepe repellendus officia enim pariatur quaerat voluptates blanditiis quis nobis expedita unde, omnis veniam rerum repellat consectetur est voluptas consequatur illum! Repellendus deserunt accusantium aliquam sapiente, nesciunt libero aspernatur!</p>
      <!-- <p>Прочитать больше</p> -->
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
  import WhiteButton from '@/components/WhiteButton.vue';
  import WhiteLabel from '@/components/WhiteLabel.vue';

  export default{
    components:{
      WhiteButton, WhiteLabel
    }
  }
</script>
