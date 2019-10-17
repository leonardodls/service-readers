(function () {
    class AttemptsAPI {

        hostUrl;
        httpModule;
        authSignature;

        constructor(){
            LeonardoApp.Services.register("items", this);
        }

        init(hostUrl, httpModule, authSignature){
            this.hostUrl = hostUrl;
            this.httpModule = httpModule;
            this.authSignature = authSignature;
        }

        getAttemptsData(itemId){
        }

        saveState(){

        }
    }

    new AttemptsAPI();
})();