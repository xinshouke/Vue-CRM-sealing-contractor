<template>
   
   <div id="CustomerInfo">
    
    <div id="customerLoaded" v-if="loaded">
               <h1 class="customerName">{{customer.fName + " " + customer.lName}}</h1>
       
        <ul id="profileContactList">
            <li>
              <svg class="icon icon-phone">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-phone"></use>
              </svg>
            
                {{customer.cellNumber}}
            
            </li>
            <li>

              <svg class="icon icon-phone">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-phone"></use>
              </svg>
            
                {{customer.homeNumber}}
           
           </li>
            <li>
    
              <svg class="icon icon-room">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-room"></use>
              </svg>
            
                {{customer.address}} <br />
                {{customer.city}} <br />
                {{customer.zip}}
          
           </li>
        </ul>
         
     </div>
     <div id="customerUnloaded" v-else>
         <app-spinner></app-spinner>
     </div>
      

        
       
   </div>
    
</template>

<style lang="scss">
    .customerName {
        margin-bottom: 0.5em;
    }
    
    #profileContactList {
        li {
            display: flex;
            flex-direction: row;
            padding: 0.5em;
        }
        .icon {
            margin-right: 0.4em;
        }
    }

</style>

<script>
    export default {
        name: "CustomerInfo",
        data: function() {
            return {
                loaded: false,
                customer: {},
            }
        },
        mounted: function() {
            this.axios.get('/api/customer/get/' + this.$route.params.id)
                .then(function(response) {
                    this.customer = response.data[0];
                    this.loaded = true;
                }.bind(this));

        }
    }

</script>
