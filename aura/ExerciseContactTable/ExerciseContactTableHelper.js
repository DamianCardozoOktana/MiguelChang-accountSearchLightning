({
	getContacts : function(component,AccountId) {
        var action = component.get("c.getContacts");        
        action.setParams({"AccountId": AccountId});
        action.setCallback(this, function(response){
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
               console.log(response.getReturnValue());
               component.set("v.Contacts",response.getReturnValue() );
            }else
            {
                console.log(response.getError());
            }
    	});
    	$A.enqueueAction(action);
	}
})
