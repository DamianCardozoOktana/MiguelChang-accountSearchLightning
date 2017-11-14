({
  getAccounts: function(component, searchText) {
    var action = component.get("c.getAccounts");
    action.setParams({
      "searchText": searchText
    });
    action.setCallback(this, function(response) {
      var state = response.getState();
      if (component.isValid() && state === "SUCCESS") {
        component.set("v.Accounts", response.getReturnValue());
      } else {
        console.log(response.getError());
      }
    });
    $A.enqueueAction(action);

  }
})
