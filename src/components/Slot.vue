<template>
    <div>Header</div>
        <slot :data="judul" />
    <div>Judul</div>
        <slot name="content" :dataContent="isiContent" />
    <div>Footer</div>
        <slot name="footer" :data="footer"/>
        <slot name="cr" :data="cr" />
</template>

<script>
export default{
 data(){
    return{
        judul : 'Ruang Kontent',
        isiContent : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, harum nostrum minima vitae iure quod doloribus.',
        footer : 'Made with Love In Madrid',
        cr : "Copy Right @2022",
    }
 }
}
</script>