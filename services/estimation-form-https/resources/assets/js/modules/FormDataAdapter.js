import Storage from '../modules/Storage';

class FormDataAdapter {
    constructor(data, Config, agency = false) {
        this.data   = data;
        this.config = Config;

        // On n'enregistre le numéro de téléphone que si l'internaute souhaite être recontacté par un pro.
        this.refineWithPro = (this.data.contact.refineWithPro === 'yes') ? true : false;
        this.adaptedData = data.type === 'house' ? this._houseAdapter() : this._apartmentAdapter();

        // Check whether the estimation is done by the agencies
        if (agency) {
            this.adaptedData = this._agencyAdapter();
        }
    }

    _houseAdapter() {
        return {
            SurfaceHabitable:              this.data.surface,
            EpoqueConstruction:            this._getConstructionYear(),
            TypeConstruction:              1, // TODO: obsolete
            ChauffageGaz:                  true, // TODO: obsolete
            Mitoyennete:                   this.data.house.ownership ? this.data.house.ownership : false,
            Standing:                      this._getState(this.data.standing),
            //NbNiveaux: this.data.stories,
            NbEtage:                       this.data.stories,
            NbChambres:                    1, // TODO: obsolete
            SurfaceTotaleTerrainCadastre:  this.data.house.lot,
            SurfaceSolNonMansarde:         1.0, // TODO: obsolete
            SurfaceSolSousToitPentu:       1.0, // TODO: obsolete
            SurfaceSousSol:                1.0, // TODO: obsolete
            SurfaceVeranda:                this._getSurface(this.data.house.veranda),
            SurfaceGarage:                 this._getSurface(this.data.house.garage),
            SurfaceDependances:            this._getSurface(this.data.house.outbuilding),
            Piscine:                       this.data.house.equipment.pool ? this.data.house.equipment.pool : false,
            Tennis:                        this.data.house.equipment.tennis ? this.data.house.equipment.tennis : false,
            EtatMursExterieurs:            this._getState(this.data.state.walls.exterior),
            EtatCouverture:                this._getState(this.data.house.state.roof),
            EtatAlimentationGaz:           1, // TODO: obsolete
            EtatIsolationMursEtCombles:    1, // TODO: obsolete
            EtatIsolation:                 this._getState(this.data.house.isolation),
            EtatIsolationPortesEtFenetres: this._getState(this.data.house.isolation), // TODO: obsolete
            EtatInstallationChauffage:     this._getState(this.data.house.state.heating), // TODO: obsolete
            EtatRevetementMurs:            1, // TODO: obsolete
            EtatRevetementSols:            this._getState(this.data.state.floor) ? this._getState(this.data.state.floor) : 2, // TODO: obsolete
            QualiteEmplacement:            this._getState(this.data.locationQuality),
            SurfaceTerrasse:               this._getSurface(this.data.terraceFloor),
            IdEstimation:                  0,
            NbPiece:                       this.data.rooms,
            EtatMursInterieurs:            this._getState(this.data.state.walls.interior) ? this._getState(this.data.state.walls.interior) : 2,
            EtatInstallationElectrique:    this._getState(this.data.state.electricity),
            EtatPlomberie:                 this._getState(this.data.state.plumbing),
            NomInternaute:                 this.data.contact.name.last ?  this.data.contact.name.last : null,
            TelInternaute:                 this.data.contact.phone ?  this.data.contact.phone : null,
            SituationInternaute:           this._getUserSituation(this.data.project.who),
            DelaiVenteInternaute:          this._getEstimatedTime(this.data.project.when),
            ContactAgence:                 this.data.contactAgency,
            EmailInternaute:               this.data.contact.email,
            TypeBU:                        this.config.get('app.id'),
            Ip:                            '', // todo: to add later (see WS)
            Adresse:                       this.data.location.shortAddress,
            Cp:                            this.data.location.postalCode,
            Ville:                         this.data.location.city || (Storage.get('estimatedLocation') ? Storage.get('estimatedLocation').address.locality : ''),
            CodeInsee:                     '',
            MotDePasse:                    '', // todo: to add later
            ClefIdentification:            '', // todo: to add later
            Latitude:                      this.data.location.latitude,
            Longitude:                     this.data.location.longitude,
            TypeEstimation:                this.data.contactAgency == true ? "1": this.refineWithPro ? "2" : "3", // 1 : Pro / 2 : En Ligne  + optin / 3 : En Ligne  + sans optin
        };
    }

    _apartmentAdapter() {
        return {
            SurfaceHabitable:           this.data.surface,
            Etage:                      this.data.floor,
            DernierEtage:               this.data.apartment.topFloor ? this.data.floor : this.data.floor + 1,
            EpoqueConstruction:         this._getConstructionYear(),
            Standing:                   this._getState(this.data.standing),
            TypeChauffage:              1, // TODO: obsolete
            NatureChauffage:            1, // TODO: obsolete
            Ascenseur:                  this.data.apartment.elevator,
            ChargeCopropriete:          this.data.apartment.charges,
            TypeMateriaux:              this._getMaterial(), // todo: to review (change IDs)
            SurfaceBalconOuLoggia:      this._getSurface(this.data.apartment.balcony),
            Cave:                       this.data.apartment.basement,
            SurfaceJardinPrivatif:      this._getSurface(this.data.apartment.garden),
            NbParkingInterieur:         0, // TODO: obsolete
            NbParkingExterieur:         0, // TODO: obsolete
            NbBox:                      0, // TODO: obsolete
            Vue:                        this._getState(this.data.apartment.view),
            Agencement:                 this._getState(this.data.apartment.agency),
            EtatSols:                   this._getState(this.data.state.floor),
            EtatPlomberie:              this._getState(this.data.state.plumbing),
            QualiteEmplacement:         this._getState(this.data.locationQuality),
            SurfaceTerrasse:            this._getSurface(this.data.terraceFloor),
            IdEstimation:               0,
            NbPiece:                    this.data.rooms,
            EtatMursInterieurs:         this._getState(this.data.state.walls.interior),
            EtatInstallationElectrique: this._getState(this.data.state.electricity),
            NomInternaute:              this.data.contact.name.last ?  this.data.contact.name.last : null,
            TelInternaute:              this.data.contact.phone ?  this.data.contact.phone : null,
            SituationInternaute:        this._getUserSituation(this.data.project.who),
            DelaiVenteInternaute:       this._getEstimatedTime(this.data.project.when),
            ContactAgence:              this.data.contactAgency,
            EmailInternaute:            this.data.contact.email,
            TypeBU:                     this.config.get('app.id'),
            Ip:                         '', // TODO: to add later (see WS)
            Adresse:                    this.data.location.shortAddress,
            Cp:                         this.data.location.postalCode, // TODO: to add later
            Ville:                      this.data.location.city || (Storage.get('estimatedLocation') ? Storage.get('estimatedLocation').address.locality : ''),
            CodeInsee:                  '',  // TODO: to add later
            MotDePasse:                 '',
            ClefIdentification:         '',
            Latitude:                   this.data.location.latitude,
            Longitude:                  this.data.location.longitude,
            TypeEstimation:             this.data.contactAgency == true ? "1": this.refineWithPro ? "2" : "3", // 1 : Pro / 2 : En Ligne  + optin / 3 : En Ligne  + sans optin
        };
    }

    _getConstructionYear() {
        switch (this.data.constructionYear) {
            case 'before1850':
                return 1;
            case 'before1913':
                return 2;
            case 'before1947':
                return 3;
            case 'before1974':
                return 4;
            case 'before1984':
                return 5;
            case 'before2007':
                return 6;
            case 'since2008':
                return 7;
        }
    }

    _getMaterial() {
        switch (this.data.apartment.material) {
            case 'concrete':
                return 4;
            case 'brick':
                return 2;
            case 'stone':
                return 3;
            case 'other':
                return 10;
        }
    }

    _getSurface(type) {
        return type.included ? type.surface : 0;
    }

    _getState(type) {
        switch (type) {
            case 'medium':
                return 1;
            case 'good':
                return 2;
            case 'great':
                return 3;
        }
    }

    _getUserSituation(who) {
        switch (who) {
            case 'seller':
                return 1;
            case 'customer':
                return 2;
            case 'pro':
                return 3;
            case 'guest':
                return 4;
            case 'owner':
                return 5;
        }
    }

    _getEstimatedTime(when) {
        switch (when) {
            case 'now':
                return 1;
            case 'in3Months':
                return 2;
            case 'in6Months':
                return 3;
            case 'unknown':
                return 4;
            case 'forSaleInLonger':
                return 5;
            case 'notForSale':
                return 6;
        }
    }

    /**
     * Adapt the data for agencies.
     *
     * @returns {object}
     *
     * @private
     */
    _agencyAdapter() {
        return {
            typeBien:         this.data.type === 'house' ? 2 : 1,
            nomVoie:          this.data.location.shortAddress,
            codePostal:       this.data.location.postalCode,
            telephone:        this.data.contact.phone,
            email:            this.data.contact.email,
            surfaceHabitable: this.data.surface,
            etage:            this.data.type === 'apartment' ? this.data.floor : 0
        };
    }
}

export default FormDataAdapter;
