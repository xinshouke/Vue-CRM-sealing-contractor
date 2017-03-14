<template>
    <div id="workOrderContainer">
        <h1>Price: $55</h1>
        <span id="status">Status:</span> 
        <select id="statusSelect">
            <option value="0">Canceled</option>
            <option value="1">New</option>
            <option value="2">Started</option>
            <option value="3">Complete</option>
            
        </select>
        <form>
            <input type="radio" name="Not Paid" value="0">
            <input type="radio" name="Cash" value="1">
            <input type="radio" name="Check" value="2">
        </form>
        <div id="checknumberContainer" v-if="workOrder.payment === 2">
            <span>Check #:</span> <input type="text" >
        </div>
        
        <span>Size: </span><input type="text">
        <span>Damage</span>
        <input type="checkbox" value="Cracks"> Cracks
        <input type="checkbox" value="Holes"> Holes
        <input type="checkbox" value="Oil"> Oil
    </div>
    
</template>