<template>
    <div id="QueueContainer" class="col">
        <h1>Work Queue</h1>
        <ul class="infoList">
            
            <li class="infoListItem" v-for="job in queue">
                
                  <div class="infoListName">{{job.name}}</div>
                            <div class="infoListAppt">{{job.appt}}</div>
                            <div class="infoListBtns">
                                <svg class="icon icon-my_location">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-my_location"></use>
                                </svg>
                                
                                <svg class="icon icon-open_in_new">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-open_in_new"></use>
                                </svg>

                            </div>

                
            </li>
            
        </ul>
    </div>
</template>


<script>
export default {
    name: 'WorkQueueContainer',
    data: function() {
    return {
    queue: [
            {
                id: 0,
                name: "Alex Jones",
                appt: "Today at 3:00 in Little Egg Harbor",
        
            },
                        {
                id: 1,
                name: "Alex Jones",
                appt: "Today at 3:00 in Little Egg Harbor",
        
            },
                        {
                id: 2,
                name: "Alex Jones",
                appt: "Today at 3:00 in Little Egg Harbor",
        
            },
        ]
};
},
    props:["startDate", "endDate"]
        
    }


</script>


<style lang="scss">
@import '../../../../styles/vars';
     
    
#QueueContainer{
    width: 100%;
    
    padding-bottom: 2.5em;
    align-items: center;
    font-size: 1.5em;
    
    h1 {
            color: $textWhite;
            text-align: center;
            padding: 0.25em;
        }
    
    }
        
.infoList {
    display: flex;
    flex-direction: column;
    width: $contentWidth;
    }
.infoListItem {
        display: flex;
        flex-direction: row;
        padding: 1em;
        border-style: solid;
        border-color: $greyLight;
        border-width: 0.1em;
        border-bottom-width: 0.05em;
        justify-content: space-between;
        background-color: $textWhite;
        align-items: center;
    }
    
    
    
</style>