({
	handleClick : function(component, event, helper) {
		var textEnteredEvent = $A.get("e.c:ExerciseAccountSelected");
        console.log(component.get("v.AccountId"));
        textEnteredEvent.setParams({"AccountId" : component.get("v.AccountId")});
        textEnteredEvent.fire();
	}
})