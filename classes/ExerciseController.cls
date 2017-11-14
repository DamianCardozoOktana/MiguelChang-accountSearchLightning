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
}
