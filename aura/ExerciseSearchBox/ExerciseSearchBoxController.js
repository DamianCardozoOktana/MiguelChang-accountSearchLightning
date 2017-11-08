({
	triggerSearchAccount : function(component, event, helper) {
		var textEnteredEvent = $A.get("e.c:textEntered");
        console.log(component.get("v.searchText"));
        textEnteredEvent.setParams({"SearchText" : component.get("v.searchText")});
        textEnteredEvent.fire();
	}
})