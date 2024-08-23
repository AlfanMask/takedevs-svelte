<script lang="ts">
    /**
     * Fontawesome icon 
     * @type {string}
     */
    export let icon: string;
    export let iconColor: string = "text-white"; // tailwind: 'text-white'
    /**
     * Text icon 
     * @type {string}
     */
    export let text: string;
    export let textColor: string = "text-white"; // tailwind: 'text-white'
</script>

<div class="flex gap-5 items-center {textColor}">
    <i class="{icon} {iconColor}"></i>
    <p>{text}</p>
</div>