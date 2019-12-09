import Helpers from '../modules/Helpers';
import Storage from '../modules/Storage';

class ResultsFooterController {
    constructor($scope ,$http,Config) 
    {
        var vm = this;
        let urlEligibleAgencies = Helpers.url(Config.get('app.services.estimation.eligibleAgencies'), Config.get('app.urlWS'));
        $scope.GetEligibleAgencies = GetEligibleAgencies;
        $scope.GetAllEligibleAgencies = GetAllEligibleAgencies;
        vm.formData = Storage.get('estimationFormData');
        vm.isShow = false;
        vm.isAllEligibleAgencies = false;
        vm.EligibleAgencies = {
            loadingeAgencies:true,
            result:{}
        }
        
        vm.idSite = (Config.get('app.id').toUpperCase() == 'LCI' ) || (Config.get('app.id').toUpperCase() == 'SL') ? true : false;

        $scope.$on('initFooter', function($event,location) { 
            if(vm.idSite)
            {
                $scope.GetEligibleAgencies(4,urlEligibleAgencies);
            }
        });
       

        function GetEligibleAgencies(top, urlEligibleAgencies){
            vm.EligibleAgencies.result = {}; 
            // ADD GetEligibleAgencies WS
            var agencySearchCriteria = 
                {
                    idLead : 0,
                    latitude : vm.formData.location.latitude,
                    longitude: vm.formData.location.longitude,
                    topAgences : top,
                    Source : 1
                };
            $http.get(urlEligibleAgencies, { params: agencySearchCriteria, cache: false }).success((data) => {
                if(data.length > 0)
                {
                    vm.EligibleAgencies.result = data;
                    vm.EligibleAgencies.loadingeAgencies = false;
                    vm.formData.valid   = true;
                   
                }
                vm.isShow = (vm.formData.contact.refineWithPro === 'no') && vm.EligibleAgencies.result.length > 0;
            }).error(() => {

                vm.EligibleAgencies.loadingeAgencies = true;
                vm.EligibleAgencies.result = {}
                vm.formData.valid   = false;
            })
        }

        function GetAllEligibleAgencies(){
            if(vm.idSite)
            {
                vm.isAllEligibleAgencies = true;
                //vm.EligibleAgencies.result = {}; 
                // ADD GetEligibleAgencies WS
                var agencySearchCriteria = 
                    {
                        idLead : 0,
                        latitude : vm.formData.location.latitude,
                        longitude: vm.formData.location.longitude,
                        topAgences : 30,
                        Source : 1
                    };

                $http.get(urlEligibleAgencies, { params: agencySearchCriteria, cache: false }).success((data) => {
                    if(data.length > 0)
                    {
                        vm.EligibleAgencies.result = data;
                        vm.EligibleAgencies.loadingeAgencies = false;
                        vm.formData.valid   = true;
                   
                    }
                    vm.isShow = (vm.formData.contact.refineWithPro === 'no') && vm.EligibleAgencies.result.length > 0;
                }).error(() => {

                    vm.EligibleAgencies.loadingeAgencies = true;
                    vm.EligibleAgencies.result = {}
                })
            }

        }
       

    }

  

}
ResultsFooterController.$inject = ['$scope','$http','Config'];

export default ResultsFooterController;
