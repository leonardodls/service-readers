(function () {
    class AttemptsAPI {

        hostUrl;
        httpModule;
        authSignature;

        constructor(){
            LeonardoApp.Services.register("attempts", this);
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