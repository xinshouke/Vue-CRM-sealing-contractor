<template>
<div class="searchBox">
    
        <input class="search" type="text" placeholder="Search Name or Phone ..." list="searchComplete" id="searchInput">
        <datalist id="searchComplete">
            <option v-for="item in searchList" :value="item"></option>
        </datalist>
    
    <svg class="icon icon-search">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-search"></use>
    </svg>
    
</div>
</template>

<script>
    export default {
        data: function() {
            return {
                searchList: [
                    "Alex Jones",
                    "John Smith",
                    "David Hasslehoff",
                    "James Lindburgh"
                ]
            }
        },

    }

</script>


<style lang="scss" scoped>
    @import "../../styles/vars";
    .searchBox {
        display: flex;
        width: $contentWidth;
        margin: 0.5em auto;
        #searchInput::-webkit-calendar-picker-indicator {
            display: none;
        }
        .search {
            width: 100%;
            font-size: 1.5em;
            padding: 1em;
            &:focus {
                outline: none;
            }
        }
        .icon {
            position: relative;
            left: -2em;
            top: 0.8em;
            font-size: 2em;
            color: $greyLight;
        }
    }

</style>
