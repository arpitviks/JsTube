//Get policy records
List<Policy__c> plclist=[Select id,lastActionName__c,Policy_Number__c,Policy_Status__c,Danni_Cancel_Date__c,Opportunity__r.Id   from Policy__c where Policy_Status__c ='Cancelled'AND Danni_Cancel_Date__c < 2022-05-05T13:34:49.880+05:30 AND Danni_Cancel_Date__c > 2022-04-28T13:34:49.880+05:30];
System.debug('Size***'+plclist.size());

//getting opp ids
List<id> oppid= new List<id>();
for(Policy__c pl : plclist){
    oppid.add(pl.Opportunity__r.Id);
}
System.debug('oppid***'+oppid.size());

//Getting policy ids
List<Policy_Quote__c> plcQList=[select id,Opportunity__c,Selected_for_Purchase__c  from Policy_Quote__c where Selected_for_Purchase__c =true AND Opportunity__r.id IN :oppid];
System.debug('plcQList***'+plcQList.size());
List<id> plcQids= new List<id>();
for(Policy_Quote__c pl : plcQList){
    plcQids.add(pl.Id);
}

//getting log records for savepolicy
List<Log__c> logList=[select id,Callout_Name__c,Response__c,Related_Record__c  from Log__c WHERE Callout_Name__c ='Danni - Save Policy' AND Related_Record__c IN :plcQids];
System.debug('logList***'+logList.size());


Map<String,String> mp = new Map<String,String>();
for(Policy__c pl : plclist){
    for(id opprid : oppid){
        if(pl.Opportunity__r.Id == opprid){
            for(Policy_Quote__c plcId : plcQList){
                if(plcId.Opportunity__c == opprid){
                    for(Log__c log : logList){
                        if(log.Related_Record__c == plcId.id){
                            mp.put(pl.Policy_Number__c,log.Response__c);
                        }
                    }
                }
            }
        }
    }
}
//List of policies to update
List<Policy__c> plcToUpdate= new List<Policy__c>();


List < String > newPolicyNumbers = new List < String > {'VSCU.900010991.01.01','VSCU.900009485.01.01','VSCSP.900012454.01.01','MBIU.900002108.01.01','MBISP.900003120.01.01','MBIU.900009114.01.01','MBIU.900009113.01.01','MBIU.900009137.01.01','MBIS.900009361.01.01','MBIU.900009708.01.01','VSCU.900013900.01.01','VSCU.900012558.01.01','VSCU.900013410.01.01','VSCSP.900013892.01.01','VSCU.900013365.01.01','VSCU.900012726.01.01','VSCS.900013664.01.01','MBIU.900013160.01.01','VSCU.900013178.01.01','VSCS.900013953.01.01','MBISP.900013358.01.01','MBIS.900013615.01.01','MBISP.900011197.01.02','MBISP.900010987.01.03','MBIU.900013756.01.01','MBIU.900002134.01.02','VSCU.900013978.01.01','VSCU.900010413.01.01','MBIU.900012617.01.01','VSCSP.900013890.01.01','MBISP.900011475.01.02','MBIU.900013024.01.01','VSCSP.900013919.01.01','MBISP.900013578.01.01','MBIU.900003024.01.01','VSCU.900005880.01.02'};
List < Policy__c > policyList=[Select id, lastActionName__c, Policy_Number__c, Policy_Status__c, Danni_Cancel_Date__c, Opportunity__r.Id   from Policy__c where Policy_Number__c IN : newPolicyNumbers];



for(Policy__c pl : policyList){
    if(mp.containsKey(pl.Policy_Number__c)){
        
        String decryptedJSON =mp.get(pl.Policy_Number__c);
        if(decryptedJSON.contains('currentDisbursements')){
           	//parse with old parser
			Map<String,String> mapStr = new Map<String,String>();
            mapStr.put('QBE Net Premium', 'QBE_Net_Premium');
            mapStr.put('Broker Commission', 'Broker_Commission');
            mapStr.put('London Remit', 'London_Remit');
            mapStr.put('Fronting Fee (incl IPT)', 'Fronting_Fee_incl_IPT');
            mapStr.put('Insurable Premium', 'Insurable_Premium');
            mapStr.put('Claims and IT Admin Fee', 'Claims_and_IT_Admin_Fee');
            mapStr.put('Olive Commission', 'Olive_Commission');
            mapStr.put('Gross Premium', 'Gross_Premium');
            for(String str: mapStr.keySet()) {
                decryptedJSON = decryptedJSON.replace(str, mapStr.get(str));
            }
            OldSavepolicyParser qResponse = OldSavepolicyParser.parse(decryptedJSON);
            System.debug(pl.Policy_Number__c +'::::::'+qResponse.responseData.policyNumber);            
            //if(pl.Policy_Number__c == qResponse.responseData.policyNumber){
            pl.QBE_Net__c = (qResponse.responseData.currentDisbursements.QBE_Net_Premium != null)
                ? Utility.roundHalfUp(qResponse.responseData.currentDisbursements.QBE_Net_Premium, 2)
                : 0.0;

            pl.London_Broker__c = (qResponse.responseData.currentDisbursements.London_Remit != null)
                ? Utility.roundHalfUp(qResponse.responseData.currentDisbursements.London_Remit, 2)
                : 0.0;

            pl.Fronting_Fee__c = (qResponse.responseData.currentDisbursements.Fronting_Fee_incl_IPT != null)
                ? Utility.roundHalfUp(qResponse.responseData.currentDisbursements.Fronting_Fee_incl_IPT, 2)
                : 0.0;

            pl.Olive_Commission__c = (qResponse.responseData.currentDisbursements.Olive_Commission != null)
                ? Utility.roundHalfUp(qResponse.responseData.currentDisbursements.Olive_Commission, 2)
                : 0.0;

            pl.Insurable_Premium__c = (qResponse.responseData.currentDisbursements.Insurable_Premium != null)
                ? Utility.roundHalfUp(qResponse.responseData.currentDisbursements.Insurable_Premium, 2)
                : 0.0;

            pl.Claim_Reserve__c = (qResponse.responseData.currentDisbursements.Claims_and_IT_Admin_Fee != null)
                ? Utility.roundHalfUp(qResponse.responseData.currentDisbursements.Claims_and_IT_Admin_Fee, 2)
                : 0.0;

            pl.Policy_Price__c = (qResponse.responseData.currentDisbursements.Gross_Premium != null)
                ? Utility.roundHalfUp(qResponse.responseData.currentDisbursements.Gross_Premium, 2)
                : 0.0;           
            //}
            plcToUpdate.add(pl);
        } else{
            //parse with new parser
            Map<String,String> mapStr = new Map<String,String>();
            mapStr.put('QBE Net Premium', 'QBE_Net_Premium');
            mapStr.put('Broker Commission', 'Broker_Commission');
            mapStr.put('London Remit ', 'London_Remit');
            mapStr.put('Fronting Fee (incl IPT)', 'Fronting_Fee_incl_IPT');
            mapStr.put('Insurable Premium', 'Insurable_Premium');
            mapStr.put('Claims and IT Admin Fee', 'Claims_and_IT_Admin_Fee');
            mapStr.put('Olive Commission', 'Olive_Commission');
			mapStr.put('Gross Premium', 'Gross_Premium');
            //(Start)Newly added field(New Danni API changes)
            mapStr.put('Pre Discount Customer Retail', 'Pre_Discount_Customer_Retail');	
            mapStr.put('Pre Discount Commission Client', 'Pre_Discount_Commission_Client');	
            //(Start)Newly added field(New Danni API changes)
            for(String str: mapStr.keySet()) {
                decryptedJSON = decryptedJSON.replace(str, mapStr.get(str));
            }
            SavePolicyResponse qResponse = SavePolicyResponse.parse(decryptedJSON);
            System.debug(pl.Policy_Number__c +'::::::'+qResponse.responseData.createDisbursements.policyNumber);              
            //if(pl.Policy_Number__c == qResponse.responseData.createDisbursements.policyNumber){  
 			pl.QBE_Net__c = (qResponse.responseData.createDisbursements.disbursements.QBE_Net_Premium != null) ? qResponse.responseData.createDisbursements.disbursements.QBE_Net_Premium : 0.0;

            //New assignment(start)
            pl.lastActionName__c = (qResponse.responseData.createDisbursements.lastActionName != null) ? qResponse.responseData.createDisbursements.lastActionName : '';
            pl.London_Broker__c = (qResponse.responseData.createDisbursements.disbursements.Broker_Commission != null) ? qResponse.responseData.createDisbursements.disbursements.Broker_Commission : 0.0;// Using to assign create broker commission field from disbursement
            pl.London_Remit__c = (qResponse.responseData.createDisbursements.disbursements.London_Remit != null) ? qResponse.responseData.createDisbursements.disbursements.London_Remit : 0.0;
            //New assignment(End)                    
            pl.Fronting_Fee__c = (qResponse.responseData.createDisbursements.disbursements.Fronting_Fee_incl_IPT != null) ? qResponse.responseData.createDisbursements.disbursements.Fronting_Fee_incl_IPT : 0.0;

            pl.Olive_Commission__c = (qResponse.responseData.createDisbursements.disbursements.Olive_Commission != null) ? qResponse.responseData.createDisbursements.disbursements.Olive_Commission : 0.0;

            pl.Insurable_Premium__c = (qResponse.responseData.createDisbursements.disbursements.Insurable_Premium != null) ? qResponse.responseData.createDisbursements.disbursements.Insurable_Premium : 0.0;

            pl.Claim_Reserve__c = (qResponse.responseData.createDisbursements.disbursements.Claims_and_IT_Admin_Fee != null) ? qResponse.responseData.createDisbursements.disbursements.Claims_and_IT_Admin_Fee : 0.0;

            pl.Policy_Price__c = (qResponse.responseData.createDisbursements.disbursements.Gross_Premium != null) ? qResponse.responseData.createDisbursements.disbursements.Gross_Premium : 0.0;
            //(Start)Newly added field(New Danni API changes)
            pl.Pre_Discount_Commission_Client__c = (qResponse.responseData.createDisbursements.disbursements.Pre_Discount_Commission_Client != null) ? qResponse.responseData.createDisbursements.disbursements.Pre_Discount_Commission_Client : 0.0;
            pl.Pre_Discount_Customer_Retail__c = (qResponse.responseData.createDisbursements.disbursements.Pre_Discount_Customer_Retail != null) ? qResponse.responseData.createDisbursements.disbursements.Pre_Discount_Customer_Retail : 0.0;
            pl.Claims_and_IT_Admin_Fee__c = (qResponse.responseData.createDisbursements.disbursements.Claims_and_IT_Admin_Fee != null) ? qResponse.responseData.createDisbursements.disbursements.Claims_and_IT_Admin_Fee : 0.0;
            pl.Gross_Premium__c = (qResponse.responseData.createDisbursements.disbursements.Gross_Premium != null) ? qResponse.responseData.createDisbursements.disbursements.Gross_Premium : 0.0;
            //}
            plcToUpdate.add(pl);
        }        
    }
}
System.debug('Policies to update****'+plcToUpdate.size());
Database.update(plcToUpdate);
System.debug('mp***'+mp);