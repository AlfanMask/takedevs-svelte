<script lang="ts">
    /**
     * Fontawesome icon 
     * @type {string}
     */
    export let icon: string;
    /**
     * Text icon 
     * @type {string}
     */
    export let text: string;
</script>

<div class="flex gap-5 items-center text-white">
    <i class="{icon}"></i>
    <p>{text}</p>
</div>