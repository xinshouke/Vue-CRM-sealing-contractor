<template>
    <div id="QueueRangeContainer" class="col">
        <h1>Range Select</h1>
        <div class="row" id="rangeSelectRow">
          <div class="rowitems">
               <div class="datepickerContainer">
               <h2>start</h2>
               <app-datepicker v-model="datePicker.start"></app-datepicker>
               
               </div>
          </div>
          <div class="rowitems">
        <div class="datepickerContainer">
               <h2>end</h2>
               <app-datepicker v-model="datePicker.end" :min="datePicker.start"></app-datepicker>
               
        </div>
          </div>
           

           <div class="rowitems">
               
               <button type="button" id="dateRangeSubmit" class="btnSuccess">GO</button>
           </div>
            
            
        </div>
        
        
    </div>
</template>


<script>
    export default {
        name: 'WorkQueueContainer',
        data: function() {
            return {
              datePicker: {
                  start: "2017-03-10",
                  end: "2017-03-10"
              }
            }
        },
        methods: {
            getDate: function() {
                var today = new Date();
                var year = today.getFullYear();
                var month = toTwoDigits(today.getMonth() + 1);
                var day = toTwoDigits(today.getDate());
                return (year + "-" + day +"-" + month);
            }
        }

    }

</script>


<style lang="scss">
    @import '../../../../styles/vars';
    #QueueRangeContainer {
        width: 100%;
        padding-bottom: 2.5em;
        align-items: center;
        font-size: 1.5em;
        h1 {
            color: $textWhite;
            text-align: center;
            padding: 0.25em;
        }
        h2 {
            text-align: center;
        }
        #rangeSelectRow {
            width: 100%;
            justify-content: space-around;
            .rowitems {
                display: flex;
                justify-content: center;
                align-items: center;
                align-content: center;
                #dateRangeSubmit {
                    font-size: 2em;
                    width: 4em;
                    height: 4em;
                    border-radius: 50%;
                }
            }
        }
    }
    
    .datepickerContainer {
        background-color: $textWhite;
        border-radius: 1em;
        padding: 1em;
    }
    
    .date-picker {
        background-color: $textWhite;
        width: 8em;
        text-align: center;
    }

</style>
