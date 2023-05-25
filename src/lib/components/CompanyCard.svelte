<script lang="ts">

    export let image: string;

</script>

<a
    href='https://emurgo.io/'
    target="_blank"
    class="personCard flex flex-row gap-4 items-center border border-purple-800 p-2 rounded-md overflow-hidden shadow-lg hover:shadow-xl"
>
    <img src={image.url} alt="profile" class="bg-purple-600 rounded-full w-10 h-10 m-0" />
    <span class="m-0 border-0 font-medium">{name}</span>
</a>
