export default class OmnitureService {

    constructor($window) {
        this.$window = $window;
        this.omniture = this.$window.SL_Omniture;
    }

    hasSEO (){
        return this.getVar('v60') === "1";
    }

    pushVar(key, value) {
        this.omniture.addToVars(key, value, true, false);
    }

    pushEvents(...events) {
        this.omniture.addToEvents(events.toString(), "events", true, false);
    }

    deletePreviousEvents() {
        this.omniture.addToEvents("", "events", true, false);
    }

    getVar(key) {
        return this.omniture.s_vars[key];
    }

    getVarFromS(key) {
        return this.omniture.s[key];
    }

    getVars() {
        return this.omniture.s_vars;
    }

    deleteAllVars() {
        this.omniture.s_vars = {};
        this.omniture.linkTrackVars = "";
    }

    sendData() {
        let that = this;
        let svarsKeys = getSvarsKeys().toString();
        this.omniture.s.linkTrackVars = svarsKeys;

        this.omniture.sendData("products");

        function getSvarsKeys() {
            return Object.keys(that.omniture.s_vars).map((key) => {
                if (that.omniture.s_vars[key] && that.omniture.s_vars[key].length > 0) {
                    return key;
                }
            });
        }
        this.resetOmnitureVars();
    }

    setDefaultVars() {
        this.pushVar("channel", this.getVarFromS("channel"));
        this.pushVar("server", this.getVarFromS("server"));
        this.pushVar("eVar1", this.getVarFromS("eVar1"));
        this.pushVar("eVar2", this.getVarFromS("eVar2"));
        this.pushVar("eVar3", this.getVarFromS("eVar3"));
        this.pushVar("eVar60",  this.hasSEO() ? "SEO" : "Non SEO");
        this.pushVar("prop1", this.getVarFromS("prop1"));
        this.pushVar("prop10", this.getVarFromS("prop10"));
        this.pushVar("prop11", this.getVarFromS("prop11"));
        this.pushVar("prop47", this.getVarFromS("prop47"));
        this.pushVar("prop48", this.getVarFromS("prop48"));
        this.pushVar("prop49", this.getVarFromS("prop49"));
        this.pushVar("eVar7", "");
        this.pushVar("eVar52", "");
        this.pushEvents("");
    }

    resetOmnitureVars() {
        for (var key in this.omniture.s_vars) {
            this.omniture.s_vars[key] = this.omniture.s[key];
        }
    }
}

OmnitureService.$inject = ['$window'];