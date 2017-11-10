public class ExerciseController {
    
    @AuraEnabled
    public static List<Account> getAccounts(String searchText) 
    {
        string sanitizedText = String.escapeSingleQuotes(searchText);
        return [SELECT Id, Name, Site, BillingCity, Phone, Type  FROM account WHERE Name LIKE :(sanitizedText + '%') LIMIT 10]; 
    }
    
    @AuraEnabled
    public static List<Contact> getContacts(String AccountId) 
    {
        return [SELECT Id, Name, FirstName, LastName FROM Contact WHERE AccountId  = :AccountId]; 
    }
    
	// Pass in the endpoint to be used using the string url
	@AuraEnabled
	public static List <Object > getCalloutResponseContents(String url) {
 
		// Instantiate a new http object
		Http h = new Http();
 
		// Instantiate a new HTTP request, specify the method (GET) as well as the endpoint
		HttpRequest req = new HttpRequest();
		req.setEndpoint(url);
		req.setMethod('GET');
 
		// Send the request, and return a response
		HttpResponse res = h.send(req);
		System.debug('response:--> ' + res.getBody());
 
		// Deserialize the JSON string into collections of primitive data types.
		List < Object > resultsList = (List < Object > ) JSON.deserializeUntyped(res.getBody());
		system.debug('resultsList-->' + resultsList);
 
		return resultsList;
	}
}