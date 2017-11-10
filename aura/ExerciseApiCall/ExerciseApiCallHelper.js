({
    getResponse: function(component, base) {
        // create a server side action.       
        var action = component.get("c.getCalloutResponseContents");
        // set the url parameter for getCalloutResponseContents method (to use as endPoint) 
        action.setParams({
            "url": 'https://api.punkapi.com/v2/beers?brewed_before=11-2012?' + base
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                // set the response(return Map<String,object>) to response attribute.
                console.log (response.getReturnValue());      
                component.set("v.mydata", JSON.stringify(response.getReturnValue()));
            }
        });
 
        $A.enqueueAction(action);
    },
    
    getApiResponse: function(component,url) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              component.set("v.mydata", JSON.stringify(this.responseText));
          }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
})