<script setup>
    import { ref } from 'vue';
    const props = defineProps({
        uri: {type: String, required: true},
        name: {type: String, required: true},
        nameAlbum: {type: String},
        nameImg: {type: String},
        tumb: {type: String},
    })

    lightbox.option({
            'alwaysShowNavOnTouchDevices': true,
            'showImageNumberLabel': true,
            'imageFadeDuration': 100,
            'resizeDuration': 100,
            'fadeDuration': 100,
            'disableScrolling': true,
            'wrapAround': true,
            'albumLabel': "Imagen %1 de %2",
            })
</script>

<template>
    <a 
        class=""
        :href="uri + name" 
        :data-lightbox="nameAlbum ? nameAlbum : name"
        :data-title="nameImg ? nameImg : name"
    >
        <img 
            loading="lazy"
            class="w-full h-full object-cover object-center"
            :src="tumb ? uri + name : uri + 'tumb_' + name" 
            alt="imagen portada"
        >
    </a>
    <!-- <a 
        class="w-4/12"
        :href="apiConfig.urlBack+product.image_hero_uri+ product.image_hero" 
        data-lightbox="{{ product.image_hero }}"
    >
        <img 
            loading="lazy"
            class="object-cover object-center max-w-28"
            :src="apiConfig.urlBack+product.image_hero_uri+ 'tumb_' +product.image_hero" 
            alt="imagen portada"
        >
    </a> -->
</template>

<style scoped>

</style>