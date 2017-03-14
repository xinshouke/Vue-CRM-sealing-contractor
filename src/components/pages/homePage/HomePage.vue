<template>
    <div id="home" class="col">
        <div class="searchContainer">
            <app-searchBox></app-searchBox>
        </div>
        <div class="btnContainer row">
        <button type="button" id="workQueueBtn" class="btnNormal" v-on:click="setPage0">Queue</button>
        <button type="button" id="workQueueBtn" class="btnNormal" v-on:click="setPage1">Range</button>                  
    </div>
        
        <div class="pageContainer">
            
        <app-workQueueContainer :startDate="startDate" :endDate="endDate" v-if="activePage == 0"></app-workQueueContainer>
        <app-queueRangeContainer v-if="activePage == 1"></app-queueRangeContainer>
            
        </div>

        
        
    </div>
</template>

<style lang="scss">
    @import '../../../styles/vars';
    .searchContainer {
        width: 100%;
        background-color: #FFF;
    }
    
    #home {
        background-color: $blueLight;
        
        .pageContainer {
            min-height: 435px;
        }
    }

</style>


<script>
    import SearchBox from "../../../components/ui/SearchBox.vue";
    import WorkQueueContainer from "../../../components/pages/homePage/modules/WorkQueueContainer.vue";
    import QueueRangeContainer from "../../../components/pages/homePage/modules/QueueRangeContainer.vue";

    export default {
        components: {
            "app-searchBox": SearchBox,
            "app-workQueueContainer": WorkQueueContainer,
            "app-queueRangeContainer": QueueRangeContainer
        },
        data: function() {
            return {
                activePage: 0, //Which app to show (Queue, range)
                startDate: "2017-03-10",
                endDate: "2017-03-10"
            }
        },
        methods: {
            setPage0: function() {
                this.activePage = 0;
            },
            setPage1: function() {
                this.activePage = 1;
            }
        }
    }

</script>
