class ZeroBounceApi {
    constructor(apiKey){
        var baseUrl = "https://api.zerobounce.net/v2";
        var get = new XMLHttpRequest();
        /**
         * @param apiKey - your private API key
         * */
        this.apiKey = apiKey;

        /**
         * @return the number of credits remaining on your account
         * */
        this.getCredits = function(){
            var uri = baseUrl + "/getcredits" + "?api_key=" + apiKey;
            get.open('GET', uri, false);
            get.send();
            if (get.readyState === 4 && get.status === 200) {
                return get.responseText;
            }
        }


        /**
         * @param email - the email you want to validate
         * @param ip - the ip to be use for this validation (optional)
         * @return - a JSONObject with all of the information for the specified email
         * */
        this.validate = function(email, ip_address){
            var uri = baseUrl + "/validate" + "?api_key=" + apiKey + "&email=" + encodeURIComponent(email) + "&ip_address=" + ip_address;
            get.open('GET', uri, false);
            get.send();
            if (get.readyState == 4 && get.status == 200) {
                return get.responseText;
            }
        }
    }
}
