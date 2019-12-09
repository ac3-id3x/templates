# Installation

#### 1. Bower

Ajouter la dépendance "bower":

``` json
{
  "dependencies": {
    "estimation-form": "http://stash.seloger.com/scm/tv/rlci-estimation-form.git"
  }
}
```

Vous pouvez aussi spécifier quelle branche / tag ou commit utiliser : `http://stash.seloger.com/scm/tv/rlci-estimation-form.git#develop`, **tag ID** or **commit ID**.

#### 2. Markup

Il faut ajouter :

``` html
<estimation id="estimation-app" ng-app="estimationApp" ng-controller="EstimationController as $ec"></estimation>
```

dans l'endroit où vous voulez avoir le formulaire.

#### 3. Scripts

Le formulaire nécessite jQuery, `mapcontrol` de Microsoft, ainsi que les trois fichiers assets propre au formulaire.

Les fichiers **CSS** :

``` html
<link rel="stylesheet" href="/z/produits/sl/assets/css/sl/vendors_import/estimation-form/estimation-form.css" />
```

Les fichiers **JS** :

``` html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script src="https://www.bing.com/api/maps/mapcontrol"></script>
<script src="/z/produits/sl/assets/js/sl/vendors_import/estimation-form/estimation-form-vendor.js"></script>
<script src="/z/produits/sl/assets/js/sl/vendors_import/estimation-form/estimation-form.js"></script>
```

#### 4. AngularJS

Pour intégrer le formulaire il faut l'inclure dans les dépendances de votre application (modules).

``` js
const slApp = angular.module('slApp', ['estimationApp']);
```

##### 4.1 Configuration

Vous pouvez aussi configurer l'application en remplacant les valeurs dans les fichiers .JSON situés dans `bower_components/estimation-form/resources/config`.

``` js
slApp.config((estimationServiceProvider) => {
  estimationServiceProvider.update(fileName, values);
});
```

Paramètres acceptés :
- `fileName` : c'est le nom du fichier .JSON que vous configurez (ex. : 'app', 'validation', etc).
- `values` : un objet qui remplace les valeurs dans le fichier de configuration. Fonctionne de la même façon que les options des plugins de jQuery (`modal(options)` de Twitter Bootstrap). Par exemple :
``` js
  {
    url: 'http://seloger.com',
    paths: {
      resources: '/z/produits/sl/sv6_annonces/vendors_import/estimation-form',
      views:     '/z/produits/sl/sv6_annonces/vendors_import/estimation-form/views',
      sidebars:  '/z/produits/sl/sv6_annonces/vendors_import/estimation-form/views/sidebars'
    }
  }
```
Toutes les autres valeurs restent telles quelles, elle ne sont pas changées.

#### 5. ID3x (étape supplémentaire)

##### 5.1 Fichier `libs_copy_config.json`

Il faut ajouter dans le fichier ces tâches pour Grunt :

``` json
"estimation-form": [
  {
      "expand": true,
      "cwd": "assets/vendors/sl/bower_components/estimation-form/assets/css/",
      "src": [
          "**"
      ],
      "dest": "assets/css/sl/vendors_import/estimation-form/"
  },
  {
      "expand": true,
      "cwd": "assets/vendors/sl/bower_components/estimation-form/assets/img/",
      "src": [
          "**"
      ],
      "dest": "assets/images/sl/vendors_import/estimation-form/"
  },
  {
      "expand": true,
      "cwd": "assets/vendors/sl/bower_components/estimation-form/assets/fonts/",
      "src": [
          "**"
      ],
      "dest": "assets/fonts/font-awesome/"
  },
  {
      "expand": true,
      "cwd": "assets/vendors/sl/bower_components/estimation-form/assets/js/",
      "src": [
          "**"
      ],
      "dest": "assets/js/sl/vendors_import/estimation-form/"
  },
  {
      "expand": true,
      "cwd": "assets/vendors/sl/bower_components/estimation-form/resources/views/",
      "src": [
          "**"
      ],
      "dest": "sv6_annonces/vendors_import/estimation-form/views"
  }
]
```

##### 5.2 Gulp

Ajouter dans la racine de votre projet *Web* le fichier `gulpfile.js` avec le contenu ou la tâche suivants :

``` js
const gulp    = require('gulp');
const replace = require('gulp-replace');

// Replace paths in Estimation Form files
gulp.task('replace', () => {
    // CSS file
    gulp.src(['assets/css/sl/vendors_import/estimation-form/estimation-form.css'], { base: './' })
        .pipe(replace('../fonts/fontawesome', '/z/produits/sl/assets/fonts/font-awesome/fontawesome'))
        .pipe(replace('/assets/img', '/z/produits/sl/assets/images/sl/vendors_import/estimation-form'))
        .pipe(gulp.dest('./'));

    // JS file
    gulp.src(['assets/js/sl/vendors_import/estimation-form/estimation-form.js'], { base: './' })
        .pipe(replace('/resources', '/z/produits/sl/sv6_annonces/vendors_import/estimation-form'))
        .pipe(gulp.dest('./'));
});
```

Cette tâche sert à remplacer les chemins vers les assets du formulaire d'estimation avant que celui-ci soit lancé.

> Il est possible qu'il soit obligatoire d'ajouter `gulp` et `gulp-replace` dans les dépendances de `package.json` :

``` json
{
  "devDependencies": {
    "gulp": "^3.9.1",
    "gulp-replace": "^0.5.4",
  }
}
```

##### 5.3 Grunt + Gulp

Pour lancer Gulp en même temps que vous lancez Grunt, vous pouvez ajouter le code suivant dans le fichier `grunt_*.bat` qui se situe d'habitude à la racine de votre projet.

``` sh
call gulp replace && echo "Gulp tasks done." || (
	echo "Error while running Gulp tasks."
	exit /b 1
)
```
