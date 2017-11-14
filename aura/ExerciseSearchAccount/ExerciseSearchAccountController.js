({
  handletextEntered: function (component, event, helper) {
    var searchText = event.getParam("SearchText");
    helper.getAccounts(component, searchText);
  }
})