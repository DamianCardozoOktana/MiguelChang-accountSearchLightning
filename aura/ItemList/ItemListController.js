({
	getCampingItems : function(cmp) {
        var action = cmp.get("c.getCampingItemArray");
        action.setCallback(this, function(response){
        	var state = response.getState();
            console.log(state);
            if (state ==="SUCCESS") 
            {
                console.log(response.getReturnValue());
                cmp.set("v.CampingItems", response.getReturnValue())
            }
            
        });
	$A.enqueueAction(action);
 	
	}
})