({
    popupApplicationWizard : function(component, event, helper) {
        console.log('clicked button');
        var modalBody;
        $A.createComponent(
            "c:ApplicationWizard", 
            {},
            function(content, status) {
                if (status === "SUCCESS") {
                    modalBody = content;
                    component.find('overlayLib').showCustomModal({
                        header: "New Application Wizard",
                        body: modalBody, 
                        showCloseButton: true,
                        closeCallback: function(){
                        }
                    })
                }
            });
	},
})