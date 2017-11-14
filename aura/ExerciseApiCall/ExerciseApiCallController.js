({
  calloutCtrl: function(component, event, helper) {
    helper.getApiResponse(component, 'https://api.punkapi.com/v2/beers');
  },
})
