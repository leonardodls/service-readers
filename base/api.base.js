class BaseApi {

    hostUrl;
    httpModule;

    init(hostUrl, httpModule){
        this.hostUrl = hostUrl;
        this.httpModule = httpModule;
    }
}

export default new BaseApi();