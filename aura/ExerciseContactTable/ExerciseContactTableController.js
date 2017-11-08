({
	fillContacts : function(component, event, helper) {
		var AccountId = event.getParam("AccountId");
        helper.getContacts(component,AccountId);
	},
    clearContacts : function(component, event, helper) {
		component.set("v.Contacts", null);
	},
    getContactListSize : function(component, event, helper) {
		component.set("v.Contacts", null);
	}
    
})