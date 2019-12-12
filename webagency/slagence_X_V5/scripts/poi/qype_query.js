SLG.POIMap.QypeQuery = (function($){

    var baseUrl = 'http://api.qype.com/v1/';
    var APIKey = 'hnFc40WjQfN2yZOjaNOQ';
    
    /*
     * Object that build a request for Qype API
     *
     */
    function QypeQuery(latitude, longitude, categoryId)
    {
        if(latitude && longitude && categoryId)
        {
            this.url = buildURL(latitude, longitude, categoryId);
        }
    }
    
    
    /*
     * Object that build a request for Qype API
     *
     * @param {float} latitude
     * @param {float} longitude
     * @param {int} categoryId
     *
     * @return {String}
     *
     */
    function buildURL(latitude, longitude, categoryId) {
        
        var url = '';
        
        url  = baseUrl + 'positions/' + latitude + ',' + longitude;
        url += '/places.json?consumer_key=' + APIKey + '&in_category=' + categoryId;
        url += '&order=distance&per_page=30&expand=latest_review,user_compact&lang=fr&callback=?';
        
        return url;
    }
    
    QypeQuery.prototype = {
        constructor : QypeQuery
    }
    
    return QypeQuery;

}($ || $j));