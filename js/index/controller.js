  function Controller() {

    this.getLoginHTML = (text) => {
        view.getLoginHTML(text);
    };

    this.validateUserInfo = (obj) => {
       let formInfo = model.validateUserInfo(obj);
       if(formInfo.length > 0 ) { return view.showFormErrors(formInfo) }

       view.setLoading();

       view.removeDocumentEvListener('click', 'toggleErrorTab');
       //IMITATE SERVER RESPONSE DELAY
        setTimeout(function(){
            view.removeLoading();
			view.selectPlace();//HERE THE RECEIVED FROM A SERVER OBJECT SHOULD BE USED
        }, 1500)
    };

}



