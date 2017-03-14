<template>
    <div id="workOrderList">
        
        <ul class="infoList" v-if="loaded">
        <li class="infoListItem" v-for="workOrder in workOrders">
            
            <div class="infoListStatus">{{workOrder.status | statusTransform }}</div>
            <div class="infoListDate">{{workOrder.date}}</div>
            <div class="infoListBtns">
                
                <svg class="icon icon-open_in_new">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-open_in_new"></use>
                </svg>
                
            </div>
            
        </li>
       
    </ul>
        <span v-else>LOADING</span>
        
    </div>
    
</template>


<script>
    export default {
        name: "WorkOrderList",
        data: function() {
            return {
                loaded: false,
                workOrders: {},
            }
        },
        mounted: function() {
            this.axios.get('/api/customer/workorders/' + this.$route.params.id)
                .then(function(response) {
                    this.workOrders = response.data;
                    this.loaded = true;
                }.bind(this));
        },
        filters: {
            statusTransform: function(status) {
        if(status == 0) {
        return "Canceled"
        }
        else if(status == 1) {
            return "New"
        }
        else if(status == 2) {
            return "Started"
        }
        else if(status == 3) {
            return "Complete"
        }
    
    }
    }
    }
</script>
