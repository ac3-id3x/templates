import Validator from '../modules/Validator';

// todo: If dynamic fields (shown/hidden), differentiate types

export default ['$state', 'Config', 'OmnitureService', ($state, Config, OmnitureService) => {
    let currentTabNumber = 0;

    return {
        restrict: 'A',
        scope: {
            options: '=validateForm'
        },
        link(scope, element) {
            const currentHousingType = getCurrentHousingType();
            const ONLINE_ESTIMATION_STATES = {
                GENERAL: 'online.general',
                HOUSE: {
                    DETAILS: 'online.house.details',
                    SURFACE: 'online.house.surface',
                    STATE: 'online.house.state',
                    STATEFINAL: 'online.house.stateFinal'
                },
                APARTMENT: {
                    DETAILS: 'online.apartment.details',
                    BUILDING: 'online.apartment.building',
                    SURFACE: 'online.apartment.surface',
                    STATE: 'online.apartment.state'
                },
                CONTACT: 'online.contact'
            };
            const tabTrackingFunctions = {
                [ONLINE_ESTIMATION_STATES.GENERAL]: setTrackingForGeneralTab,
                [ONLINE_ESTIMATION_STATES.HOUSE.DETAILS]: setTrackingForDetailsTab,
                [ONLINE_ESTIMATION_STATES.HOUSE.SURFACE]: setTrackingForSurfaceTab,
                [ONLINE_ESTIMATION_STATES.HOUSE.STATE]: setTrackingForStateTab,
                [ONLINE_ESTIMATION_STATES.HOUSE.STATEFINAL]: setTrackingForStateFinalTab,
                [ONLINE_ESTIMATION_STATES.APARTMENT.DETAILS]: setTrackingForDetailsTab,
                [ONLINE_ESTIMATION_STATES.APARTMENT.BUILDING]: setTrackingForApartmentBuildingTab,
                [ONLINE_ESTIMATION_STATES.APARTMENT.SURFACE]: setTrackingForSurfaceTab,
                [ONLINE_ESTIMATION_STATES.APARTMENT.STATE]: setTrackingForStateTab,
                [ONLINE_ESTIMATION_STATES.CONTACT]: setTrackingForContact,
            };

            function setTrackingForGeneralTab() {
                onGeneralTabExit();
                onDetailsTabEnter();

                function onGeneralTabExit() {
                    currentTabNumber++;
                    let nextPageName = `ESTI_${currentHousingType}_${currentTabNumber}`;

                    OmnitureService.deleteAllVars();
                    OmnitureService.setDefaultVars();
                    OmnitureService.pushVar("pageName", nextPageName);
                    OmnitureService.pushVar("prop1", "PRE_EST");
                    OmnitureService.pushVar("eVar7", `EstiOnline_${currentHousingType}`);
                    OmnitureService.pushEvents("event24");
                    OmnitureService.sendData();
                }

                function onDetailsTabEnter() {
                    currentTabNumber++;
                    let nextPageName = `ESTI_${currentHousingType}_${currentTabNumber}`;

                    OmnitureService.deleteAllVars();
                    OmnitureService.setDefaultVars();
                    OmnitureService.pushVar("pageName", nextPageName);
                    OmnitureService.sendData();
                }
            }

            function setTrackingForDetailsTab() {
                onDetailsTabExit();
                if (isHouseTheChosenHousingType()) {
                    onHouseSurfaceTabEnter();
                } else {
                    onApartmentBuildingTabEnter();
                }

                function onDetailsTabExit() {
                    OmnitureService.deleteAllVars();
                    OmnitureService.pushVar("eVar7", `EstiOnline_${currentHousingType}`);
                    OmnitureService.pushEvents("event25");
                    OmnitureService.sendData();
                }

                function onHouseSurfaceTabEnter() {
                    currentTabNumber++;
                    let nextPageName = `ESTI_Maison_${currentTabNumber}`;

                    OmnitureService.deleteAllVars();
                    OmnitureService.setDefaultVars();
                    OmnitureService.pushVar("pageName", nextPageName);
                    OmnitureService.sendData();
                }

                function onApartmentBuildingTabEnter() {
                    currentTabNumber++;
                    let nextPageName = `ESTI_Appartement_${currentTabNumber}`;

                    OmnitureService.deleteAllVars();
                    OmnitureService.setDefaultVars();
                    OmnitureService.pushVar("pageName", nextPageName);
                    OmnitureService.sendData();
                }
            }

            function setTrackingForSurfaceTab() {
                onSurfaceTabExit();
                onStateTabEnter();

                function onSurfaceTabExit() {
                    let surfaceExitEvent = isHouseTheChosenHousingType() ? "event26" : "event27";

                    OmnitureService.deleteAllVars();
                    OmnitureService.pushVar("eVar7", `EstiOnline_${currentHousingType}`);
                    OmnitureService.pushEvents(surfaceExitEvent);
                    OmnitureService.sendData();
                }

                function onStateTabEnter() {
                    currentTabNumber++;
                    let nextPageName = `ESTI_${currentHousingType}_${currentTabNumber}`;

                    OmnitureService.deleteAllVars();
                    OmnitureService.setDefaultVars();
                    OmnitureService.pushVar("pageName", nextPageName);
                    OmnitureService.sendData();
                }
            }

            function setTrackingForApartmentBuildingTab() {
                onApartmentBuildingExit();
                onApartmentSurfaceTabEnter();

                function onApartmentBuildingExit() {
                    OmnitureService.deleteAllVars();
                    OmnitureService.pushVar("eVar7", `EstiOnline_${currentHousingType}`);
                    OmnitureService.pushEvents("event26");
                    OmnitureService.sendData();
                }

                function onApartmentSurfaceTabEnter() {
                    currentTabNumber++;
                    let nextPageName = `ESTI_Appartement_${currentTabNumber}`;

                    OmnitureService.deleteAllVars();
                    OmnitureService.setDefaultVars();
                    OmnitureService.pushVar("pageName", nextPageName);
                    OmnitureService.sendData();
                }
            }

            function setTrackingForStateTab() {
                onStateTabExit();
                if (isHouseTheChosenHousingType()) {
                    onStateFinalTabEnter();
                } else {
                    onContactTabEnter();
                }

                function onStateTabExit() {
                    let stateTabExitEventName = isHouseTheChosenHousingType() ? "event27" : "event61";

                    OmnitureService.deleteAllVars();
                    OmnitureService.pushVar("eVar7", `EstiOnline_${currentHousingType}`);
                    OmnitureService.pushEvents(stateTabExitEventName);
                    OmnitureService.sendData();
                }

                function onStateFinalTabEnter() {
                    currentTabNumber++;
                    let nextPageName = `ESTI_${currentHousingType}_${currentTabNumber}`;

                    OmnitureService.deleteAllVars();
                    OmnitureService.setDefaultVars();
                    OmnitureService.pushVar("pageName", nextPageName);
                    OmnitureService.sendData();
                }

                function onContactTabEnter() {
                    OmnitureService.deleteAllVars();
                    OmnitureService.setDefaultVars();
                    OmnitureService.pushVar("pageName", "ESTI_Contact");
                    OmnitureService.sendData();
                }
            }

            function setTrackingForStateFinalTab() {
                onStateFinalTabExit();
                onContactTabEnter();

                function onStateFinalTabExit() {
                    OmnitureService.deleteAllVars();
                    OmnitureService.pushVar("eVar7", `EstiOnline_${currentHousingType}`);
                    OmnitureService.pushEvents("event61");
                    OmnitureService.sendData();
                }

                function onContactTabEnter() {
                    OmnitureService.deleteAllVars();
                    OmnitureService.setDefaultVars();
                    OmnitureService.pushVar("pageName", "ESTI_Contact");
                    OmnitureService.sendData();
                }
            }

            function setTrackingForContact() {
                onContactTabExit();

                function onContactTabExit() {
                    OmnitureService.deleteAllVars();
                    OmnitureService.pushVar("eVar7", `EstiOnline_${currentHousingType}`);
                    OmnitureService.pushVar("eVar52", `EstiOnline_${currentHousingType}`);
                    OmnitureService.pushEvents("event10", "event32", "event62");
                    OmnitureService.sendData();
                }
            }

            function getCurrentHousingType() {
                return isHouseTheChosenHousingType() ? 'Maison' : 'Appartement';
            }

            function isHouseTheChosenHousingType() {
                return scope.options.formData.type === "house";
            }

            function setOmnitureTrackingFollowingCurrentEstimationTab(pageState) {
                tabTrackingFunctions[pageState]();
            }

            scope.validateForm = function () {

                var validator = new Validator(scope.options.formData, $state.current.name, Config.get('validation'));

                if (scope.options.state == 'pro.credentials') {
                    var validatorProGeneral = new Validator(scope.options.formData, 'pro.general', Config.get('validation'));
                    if (validatorProGeneral.hasErrors()) {
                        validator = validatorProGeneral;
                        $state.go("pro.general");
                    }
                    /*else if (validatorProGeneral.noErrors())
                    {
                        var validatorProCredentials = new Validator(scope.options.formData, 'pro.credentials', Config.get('validation'));
                        if (validatorProCredentials.hasErrors()) {
                            validator = validatorProCredentials;
                            $state.go("pro.credentials");
                        }
                    }*/

                }
                else if (scope.options.state == 'online.house.surface') {
                    var validatorGeneral = new Validator(scope.options.formData, 'online.general', Config.get('validation'));

                    if (validatorGeneral.hasErrors()) {
                        validator = validatorGeneral;
                    }
                    else if (validatorGeneral.noErrors()) {


                        var validatorHouseDetails = new Validator(scope.options.formData, 'online.house.details', Config.get('validation'));

                        if (validatorHouseDetails.noErrors()) {
                            validator = validatorHouseDetails;
                        }
                        else if (validatorHouseDetails.hasErrors()) {
                            validator = validatorHouseDetails;

                            $state.go("online.house.details")
                        }
                    }
                }
                else if (scope.options.state == 'online.house.state') {
                    var validatorGeneral = new Validator(scope.options.formData, 'online.general', Config.get('validation'));

                    if (validatorGeneral.hasErrors()) {
                        validator = validatorGeneral;
                    }
                    else if (validatorGeneral.noErrors()) {
                        var validatorHouseDetails = new Validator(scope.options.formData, 'online.house.details', Config.get('validation'));

                        if (validatorHouseDetails.hasErrors()) {
                            validator = validatorHouseDetails;

                            $state.go("online.house.details")
                        }

                        else if (validatorHouseDetails.noErrors()) {
                            validator = validatorHouseDetails;
                            var validatorSurface = new Validator(scope.options.formData, 'online.house.surface', Config.get('validation'));
                            if (validatorSurface.noErrors()) {
                                validator = validatorSurface;
                            }
                            else if (validatorSurface.hasErrors()) {
                                validator = validatorSurface;
                                $state.go("online.house.surface")
                            }

                        }
                    }
                }

                else if (scope.options.state == 'online.apartment.building') {
                    var validatorGeneral = new Validator(scope.options.formData, 'online.general', Config.get('validation'));

                    if (validatorGeneral.hasErrors()) {
                        validator = validatorGeneral;
                    }
                    else if (validatorGeneral.noErrors()) {
                        var validatorApartmentDetails = new Validator(scope.options.formData, 'online.apartment.details', Config.get('validation'));

                        if (validatorApartmentDetails.noErrors()) {
                            validator = validatorApartmentDetails;
                        }
                        else if (validatorApartmentDetails.hasErrors()) {
                            validator = validatorApartmentDetails;

                            $state.go("online.apartment.details")
                        }
                    }
                }

                else if (scope.options.state == 'online.apartment.surface') {
                    var validatorGeneral = new Validator(scope.options.formData, 'online.general', Config.get('validation'));

                    if (validatorGeneral.hasErrors()) {
                        validator = validatorGeneral;
                    }
                    else if (validatorGeneral.noErrors()) {
                        var validatorApartmentDetails = new Validator(scope.options.formData, 'online.apartment.details', Config.get('validation'));

                        if (validatorApartmentDetails.hasErrors()) {
                            validator = validatorApartmentDetails;

                            $state.go("online.apartment.details")
                        }
                        else if (validatorApartmentDetails.noErrors()) {
                            validator = validatorApartmentDetails;
                            var validatorApartmentBuilding = new Validator(scope.options.formData, 'online.apartment.building', Config.get('validation'));

                            if (validatorApartmentBuilding.noErrors()) {
                                validator = validatorApartmentBuilding;
                            }
                            else if (validatorApartmentBuilding.hasErrors()) {
                                validator = validatorApartmentBuilding;

                                $state.go("online.apartment.building")
                            }
                        }
                    }
                }

                else if (scope.options.state == 'online.apartment.state') {
                    var validatorGeneral = new Validator(scope.options.formData, 'online.general', Config.get('validation'));

                    if (validatorGeneral.hasErrors()) {
                        validator = validatorGeneral;
                    }
                    else if (validatorGeneral.noErrors()) {
                        var validatorApartmentDetails = new Validator(scope.options.formData, 'online.apartment.details', Config.get('validation'));

                        if (validatorApartmentDetails.hasErrors()) {
                            validator = validatorApartmentDetails;

                            $state.go("online.apartment.details")
                        }
                        else if (validatorApartmentDetails.noErrors()) {
                            validator = validatorApartmentDetails;
                            var validatorApartmentBuilding = new Validator(scope.options.formData, 'online.apartment.building', Config.get('validation'));

                            if (validatorApartmentBuilding.hasErrors()) {
                                validator = validatorApartmentBuilding;

                                $state.go("online.apartment.building")
                            }

                            else if (validatorApartmentBuilding.noErrors()) {
                                validator = validatorApartmentBuilding;

                                var validatorApartmentSurface = new Validator(scope.options.formData, 'online.apartment.surface', Config.get('validation'));

                                if (validatorApartmentSurface.noErrors()) {
                                    validator = validatorApartmentSurface;
                                }
                                else if (validatorApartmentSurface.hasErrors()) {
                                    validator = validatorApartmentSurface;

                                    $state.go("online.apartment.surface")
                                }
                            }
                        }
                    }
                }

                else if (scope.options.state == 'online.contact') {
                    if (scope.options.formData.type == 'apartment') {
                        var validatorGeneral = new Validator(scope.options.formData, 'online.general', Config.get('validation'));

                        if (validatorGeneral.hasErrors()) {
                            validator = validatorGeneral;
                        }
                        else if (validatorGeneral.noErrors()) {
                            var validatorApartmentDetails = new Validator(scope.options.formData, 'online.apartment.details', Config.get('validation'));

                            if (validatorApartmentDetails.hasErrors()) {
                                validator = validatorApartmentDetails;

                                $state.go("online.apartment.details")
                            }
                            else if (validatorApartmentDetails.noErrors()) {
                                validator = validatorApartmentDetails;
                                var validatorApartmentBuilding = new Validator(scope.options.formData, 'online.apartment.building', Config.get('validation'));

                                if (validatorApartmentBuilding.hasErrors()) {
                                    validator = validatorApartmentBuilding;

                                    $state.go("online.apartment.building")
                                }

                                else if (validatorApartmentBuilding.noErrors()) {
                                    validator = validatorApartmentBuilding;

                                    var validatorApartmentSurface = new Validator(scope.options.formData, 'online.apartment.surface', Config.get('validation'));

                                    if (validatorApartmentSurface.hasErrors()) {
                                        validator = validatorApartmentSurface;

                                        $state.go("online.apartment.surface")
                                    }
                                    else if (validatorApartmentSurface.noErrors()) {
                                        validator = validatorApartmentSurface;
                                        var validatorApartmentState = new Validator(scope.options.formData, 'online.apartment.state', Config.get('validation'));

                                        if (validatorApartmentState.noErrors()) {
                                            validator = validatorApartmentState
                                        }
                                        else if (validatorApartmentState.hasErrors()) {
                                            validator = validatorApartmentState;

                                            $state.go("online.apartment.state")
                                        }


                                    }
                                }
                            }
                        }
                    }
                    else if (scope.options.formData.type == 'house') {
                        var validatorGeneral = new Validator(scope.options.formData, 'online.general', Config.get('validation'));

                        if (validatorGeneral.hasErrors()) {
                            validator = validatorGeneral;
                        }
                        else if (validatorGeneral.noErrors()) {
                            var validatorHouseDetails = new Validator(scope.options.formData, 'online.house.details', Config.get('validation'));

                            if (validatorHouseDetails.hasErrors()) {
                                validator = validatorHouseDetails;

                                $state.go("online.house.details")
                            }

                            else if (validatorHouseDetails.noErrors()) {
                                validator = validatorHouseDetails;
                                var validatorSurface = new Validator(scope.options.formData, 'online.house.surface', Config.get('validation'));

                                if (validatorSurface.hasErrors()) {
                                    validator = validatorSurface;
                                    $state.go("online.house.surface")
                                }
                                else if (validatorSurface.noErrors()) {
                                    validator = validatorSurface;

                                    var validatorHouseState = new Validator(scope.options.formData, 'online.house.state', Config.get('validation'));

                                    if (validatorHouseState.hasErrors()) {
                                        validator = validatorHouseState;
                                        $state.go("online.house.state")

                                    }
                                    else if (validatorHouseState.noErrors()) {
                                        validator = validatorHouseState;

                                        var validatorHouseStateFinal = new Validator(scope.options.formData, 'online.house.stateFinal', Config.get('validation'));
                                        if (validatorHouseStateFinal.hasErrors()) {
                                            validator = validatorHouseStateFinal;
                                            $state.go("online.house.stateFinal")

                                        }
                                        else if (validatorHouseStateFinal.noErrors()) {
                                            validator = validatorHouseStateFinal;
                                        }


                                    }
                                }

                            }
                        }
                    }
                }

                // No errors. Next state
                if (validator.noErrors()) {
                    setOmnitureTrackingFollowingCurrentEstimationTab($state.current.name);

                    // Form data for tracking only when the form is valid
                    window.ava_data.form = scope.options.formData;

                    $state.go(scope.options.state);
                }

                if (validator.hasErrors()) {
                    // Custom Event for form errors
                    const event = new CustomEvent('formError', {
                        detail: {
                            stepId: scope.options.state
                        }
                    });
                    document.dispatchEvent(event);
                }

                // todo: Upgrade this method with more fluent version
                // Remove all error messages
                const $formGroups = $('.form-group.invalid');
                $formGroups.removeClass('invalid');

                validator.errors().forEach(function (error, i) {
                    const $formGroup = $(`[name="${error.field}"]`).parents('.form-group:not(.expandable)').not(".optional");
                    let $label;

                    // Scroll to the first error only
                    if (i === 1) {
                        $('html, body').animate({
                            scrollTop: $formGroup.offset().top
                        }, 250);
                    }

                    $formGroup.addClass('invalid');

                    if ($formGroup.has('> checkbox').length) {
                        $label = $formGroup.find('label .title');
                    } else {
                        $label = $formGroup.find('> label');
                    }

                    $label.text(error.message);

                    i++;
                });
            };

            // "onclick" event
            element.on('click', () => {
                scope.validateForm();
            });
        }
    };
}];
