import EstimationController from './EstimationController';
import Storage from '../modules/Storage';

class LocationController extends EstimationController {
    constructor($scope, $state, Config, $location) {
        super($scope, $state, Config, $location);

        this.form.title    = Config.get('form.title');
        this.form.titleSub = Config.get('form.titleSub');
        this.form.subtitle = Config.get('form.subtitle');

        // TODO: Reset form data except the location
        let data = Storage.getEstimationFormData();
        if (data) {
            const location = data.location;
            data           = this._getFormData();
            data.location  = location;

            Storage.forgetEstimationFormData();
            Storage.putEstimationFormData(data);
        }
    }
}

LocationController.$inject = ['$scope', '$state', 'Config', '$location'];

export default LocationController;