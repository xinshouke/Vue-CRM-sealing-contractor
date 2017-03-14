<template>
    <div class="row" id="nav">
        <router-link to="newCustomer" v-if="onDefault"> 
        
        <span id="newCustomerBtnContainer">
           <span id="newCustomerBtn">+</span>
           New Customer 
        </span>
        
        </router-link>
        
        <router-link to="newCustomer" v-if="onProfile"> 
        
        <span id="newCustomerBtnContainer">
           <span id="newCustomerBtn">+</span>
           New WorkOrder
        </span>
        
        </router-link>

    </div>
</template>

<script>
    export default {
        data: function() {
            return {

            }
        },
        computed: {
            onProfile: function() {
                var base = this.$route.path.substring(1, 8);
                if (base === "profile") {
                    return true;
                } else {
                    return false;
                }
            },
            onDefault: function() {
                if (!this.onProfile) {
                    return true;
                } else {
                    return false;
                }
            }
        }

    }

</script>


<style lang="scss">
    @import "../../styles/vars";
    #nav {
        padding: 1em;
    }
    
    #newCustomerBtnContainer {
        #newCustomerBtn {
            display: inline-block;
            background-color: $greenLight;
            color: $textWhite;
            border-radius: 50%;
            width: 1.5em;
            height: 1.5em;
            text-align: center;
            font-size: 1em;
            line-height: 1.5em;
            font-weight: bold;
            margin: 0.5em;
        }
    }

</style>
