<template>
                  <svg class="icon icon-spinner">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-spinner"></use>
              </svg>
</template>


<style scoped>

    svg {
        padding: 1.5em;
        font-size: 2em;
        animation: spin;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-duration: 1000ms;
    }
    
    @keyframes spin {
        from{
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    
</style>


<script>
export default {
    name: "Spinner",
}
    
</script>