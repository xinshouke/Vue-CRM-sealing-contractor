<template>
    <div id="profile">
    <div id="colLeft" class="col">
                         
     <app-customerInfo></app-customerInfo>
           
    </div>
    <div id="colRight" class="col">
    
    <router-view></router-view>

    </div>
    
    </div>
</template>


<script>
    import CustomerInfo from "./modules/CustomerInfo.vue";
    import WorkOrderList from "./modules/WorkOrderList.vue";

    import * as CONFIG from '../../../config.js';

    export default {
        components: {
            "app-customerInfo": CustomerInfo
        },
        name: 'ProfilePage',
        
        data: function() {
            return {
            }
        }
    };

</script>


<style lang="scss" scoped>
    @import '../../../styles/vars';
    .className {
        font-size: 2em;
    }
    
    .list {
        border: 1px solid $greyLight;
        width: 100%;
        .listItem {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            padding: 0.5em 0.25em;
        }
    }
    
    #profile {
        display: flex;
        flex: 1;
        #colRight {
            flex: 1;
            padding: 0px 2em;
        }
        #colLeft {
            flex: 1;
            padding: 0px 2em;
            #profileContactList {
                margin: 1em;
                .icon {
                    font-size: 2em;
                }
                li {
                    .icon {
                        margin-right: 1em;
                    }
                    display: flex;
                    padding: 0.5em;
                    align-content: center;
                }
            }
        }
    }

</style>
