({
	handleClick: function (component, event, helper) {
		var textEnteredEvent = $A.get("e.c:ExerciseAccountSelected");
		textEnteredEvent.setParams({
			"AccountId": component.get("v.AccountId")
		});
		textEnteredEvent.fire();
	}
})