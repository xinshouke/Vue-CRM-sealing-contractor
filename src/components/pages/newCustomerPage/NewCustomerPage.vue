<template>
    <form id="newCustomer" class="col">
       
       <h1>Add New Customer</h1>
       
       <div class="formPageContainer">
           
        <div class="formPage" id="page1" v-if="formProgression.activePage == 1">
            <h2>Customer Name</h2>
            <input type="text" v-model="customer.fName" placeholder="First name" required>
            <input type="text" v-model="customer.lName" placeholder="Last name" required>
        </div>
               
        <div class="formPage" id="page2"  v-if="formProgression.activePage == 2">
            <h2>Contact info</h2>
            <input type="text" v-model="customer.cellNumber" placeholder="Main phone number">
            <input type="text" v-model="customer.homeNumber" placeholder="Secondary phone number">
        </div>
        
        <div class="formPage" id="page3"  v-if="formProgression.activePage == 3">
            <h2>Address</h2>
            <input type="text" v-model="customer.address" placeholder="Address">
            <input type="text" v-model="customer.city"   placeholder="City">
            <select v-model="customer.state" placeholder="NJ">
	<option value="AL">AL</option>
	<option value="AK">AK</option>
	<option value="AZ">AZ</option>
	<option value="AR">AR</option>
	<option value="CA">CA</option>
	<option value="CO">CO</option>
	<option value="CT">CT</option>
	<option value="DE">DE</option>
	<option value="DC">DC</option>
	<option value="FL">FL</option>
	<option value="GA">GA</option>
	<option value="HI">HI</option>
	<option value="ID">ID</option>
	<option value="IL">IL</option>
	<option value="IN">IN</option>
	<option value="IA">IA</option>
	<option value="KS">KS</option>
	<option value="KY">KY</option>
	<option value="LA">LA</option>
	<option value="ME">ME</option>
	<option value="MD">MD</option>
	<option value="MA">MA</option>
	<option value="MI">MI</option>
	<option value="MN">MN</option>
	<option value="MS">MS</option>
	<option value="MO">MO</option>
	<option value="MT">MT</option>
	<option value="NE">NE</option>
	<option value="NV">NV</option>
	<option value="NH">NH</option>
	<option value="NJ">NJ</option>
	<option value="NM">NM</option>
	<option value="NY">NY</option>
	<option value="NC">NC</option>
	<option value="ND">ND</option>
	<option value="OH">OH</option>
	<option value="OK">OK</option>
	<option value="OR">OR</option>
	<option value="PA">PA</option>
	<option value="RI">RI</option>
	<option value="SC">SC</option>
	<option value="SD">SD</option>
	<option value="TN">TN</option>
	<option value="TX">TX</option>
	<option value="UT">UT</option>
	<option value="VT">VT</option>
	<option value="VA">VA</option>
	<option value="WA">WA</option>
	<option value="WV">WV</option>
	<option value="WI">WI</option>
	<option value="WY">WY</option>
</select>
            <input type="text" v-model="customer.zip" maxlength="5" placeholder="Zip code">
            
        </div>
          
                 <div class="formPage" id="page4"  v-if="formProgression.activePage == 4">
                     <p>VERIFY ALL CUSTOMER INFO</p>
                     
                     <div class="customerInfoPanel">
                        
                         <h2>{{customer.fName + " " + customer.lName}}</h2>
                     
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
                     
                 </div>       
           
           <button type="button" id="formBack" v-on:click="formBack" v-if="formProgression.back">Back</button>
           <button type="button" id="formProgression" v-on:click="formProgressionCheck" v-bind:class="buttonStateToClass" >{{buttonText}}</button>
           
       </div>
        
        
        
                
    </form>
</template>

<style lang="scss" scoped>
    @import '../../../styles/vars';
    #newCustomer {
        align-items: center;
        justify-content: center;
        align-content: center;
        background-color: $blueLight;
        color: $textWhite;
        text-align: center;
        
        .customerInfoPanel {
            padding: 1em;
            margin: 1em;
            background-color: $textWhite;
            color: $textBlack;
        }
    }
    
    input {
        display: block;
        padding: 0.5em;
        margin: 0.5em;
        font-size: 1.25em;
    }

</style>


<script>
    export default {
        name: 'NewCustomerPage',
        data: function() {
            return {
                customer: {
                    fName: '',
                    lName: '',
                    homeNumber: '',
                    cellNumber: '',
                    address: '',
                    city: '',
                    zip: '',
                    state: ''
                },
                formProgression: {
                    state: 1,
                    // state 0 = Incomplete
                    // state 1 = Ready
                    // state 2 = Submit
                    activePage: 1,
                    back: false
                }

            }
        },
        computed: {
            buttonText: function() {
                if (this.formProgression.state === 0) {

                    return 'Incomplete';
                } else if (this.formProgression.state === 1) {
                    return 'Next';
                } else if (this.formProgression.state === 2) {
                    return 'Submit';
                } else {
                    return 'ERROR';
                }
            },
            buttonStateToClass: function(){
                if (this.formProgression.state === 0) {
                    return 'btnInactive';
                } else if (this.formProgression.state === 1) {
                    return 'btnNormal';
                } else if (this.formProgression.state === 2) {
                    return 'btnSuccess';
                } 
            }


        },
        methods: {
            formProgressionCheck: function() {
                //If page is not on last page, and the state is ready, continue to next page.
                if (this.formProgression.activePage < 3 && this.formProgression.state == 1) {
                    this.formProgression.activePage++;
                    this.formProgression.back = true;
                } else if (this.formProgression.activePage == 3 && this.formProgression.state == 1) {
                    this.formProgression.activePage++;
                    this.formProgression.state = 2;
                } else if (this.formProgression.activePage == 4 && this.formProgression.state == 2) {
                    //Save New Customer
                }
            },
            formBack: function() {
                if (this.formProgression.activePage != 1) {
                    this.formProgression.activePage--;
                    this.formProgression.state = 1;
                } else {
                    this.formProgression.back = false;
                }
            }
        }
    }

</script>
