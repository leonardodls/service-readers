(function () {
    class AttemptsAPI {

        hostUrl;
        httpModule;

        constructor(){
            LeonardoApp.Services.register("attempts", this);
        }

        init(hostUrl, httpModule){
            this.hostUrl = hostUrl;
            this.httpModule = httpModule;
        }

        getAttemptsData(itemId){
        }

        saveState(){

        }
    }

    new AttemptsAPI();
})();