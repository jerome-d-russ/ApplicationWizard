({
    handleClick: function (component, event, helper) {     
        var selectedButtonLabel = event.getSource().get("v.label");
        switch(selectedButtonLabel){
            case 'Cancel':
                component.find("overlayLib").notifyClose();
                break;
            case 'Previous':
                component.set('v.step', component.get('v.step') - 1);
                break;
            case 'Next':
                component.set('v.step', component.get('v.step') + 1);
                break;
            case 'Submit':
                console.log('Submit handled by recordEditForm');
                break;
        }
        console.log(component.get('v.step'));
    },
    
    handlePublicChange : function(component, event, helper){
        console.log('There was a change!');
        component.set('v.isPrivate', event.getParam("checked"));
    },
    
    handleSubmit : function(component, event, helper){
        event.preventDefault();
        
        var fields = event.getParam("fields");
        console.log(JSON.stringify(fields));
        
        if(event._params.fields.Is_Private__c == true){
            fields.Public_Sponsor__c = 'n/a';
        } else {
            fields.Additional_Notes__c = 'n/a';
        }
        
        console.log(JSON.stringify(fields));
        
        component.find('recordEditForm').submit(fields);
    },
    
    handleSuccess : function(component, event, helper) {
        console.log(JSON.stringify(event));
        component.find("overlayLib").notifyClose();
    },
})