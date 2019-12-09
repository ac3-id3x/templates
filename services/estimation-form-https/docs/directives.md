# Directives

## Directives Générales

### `estimation`
Point de départ du composant. Inclure cette directive dans l'endroit où on veut afficher le formulaire :

``` html
<estimation id="estimation-app" ng-app="estimationApp" ng-controller="EstimationController as $ec"></estimation>
```

Dans le cas où il faut n'afficher que la première étape du formulaire avec les liens vers une autre page, ajouter l'attribut `layout` :

``` html
<estimation id="estimation-app" ng-app="estimationApp" ng-controller="EstimationController as $ec" layout="basic"></estimation>
```

### `estimation-sidebar`
Le bloc de réassurance.

Pour ajouter du contenu dans ce bloc, il faut visiter le fichier `/resources/config/form.json`. Dans l'objet `sidebar.content` il faut préciser le nom de l'étape (state) ainsi que le texte.

Cela peut être soit du text lui-même, soit un fichier HTML (situé dans `/resources/views/sidebars/`), soit juste `.html`. Pour le dernier, la directive cherchera un fichier HTML avec le nom de l'étape.

Si aucun texte n'est précisé, celui par défaut sera utilisé.

``` json
"default": {
    "online": "default.online.html",
    "pro": "default.pro.html"
}
```

### `page-title`
Le titre de l'étape.

Accepte l'attribut `layout`. S'il est présent, le `h1` sera remplacé par `h2`.

### `breadcrumbs`
Le fil d'ariane des étapes du formulaire.

Les étapes sont définies dans le fichier de configuration `/resources/config/steps.json`.

### `startpoint`
Les boutons de départ : "Estimation en ligne" et "Estimation par des pros".

Accepte l'attribut `layout`. S'il est présent, le layout change. Les boutons deviennent des liens vers des pages extérieures, en plus deux popups sont inclus au-dessus des boutons.

### `validate-form`
Un attribut de validation du formulaire au clic sur l'élément.

``` html
<tag validate-form="{ formData: $ec.formData, state: stateName }"></tag>
```

### `editorial-news`
Bloc de l'edito : "Actualités sur le marché immobilier".

Accepte l'attribut `layout`.

### `editorial-guide`
Bloc de l'edito : "Conseil d'experts".

Accepte l'attribut `layout`.

### `countdown`
Compteur de secondes restantes.

### `popup`
Utilise le popup de Semantic UI.

## Directives de la carte

### `map`
Initialise la carte Bing.

## Directives de la navigation

### `controls`
Un containeur pour les boutons de navigation dans le formulaire.

### `prev`
Bouton de navigation. Dirige vers l'étape précédente.

Accepte deux attributs : `text` et `state`. Le premier permet de modifier le texte du bouton. Le deuxième est le nom de l'étape vers laquelle il faut rediriger l'utilisateur.

### `next`
Bouton de navigation. Dirige vers l'étape suivante.

Accepte deux attributs : `text` et `state`. Le premier permet de modifier le texte du bouton. Le deuxième est le nom de l'étape vers laquelle il faut rediriger l'utilisateur.

## Directives du formulaire

### `inputs`
Un containeur pour les inputs.

Accepte deux attributs `label` et `class`.

### `text`
La directive de base pour les directives `number` et `email`.

- `number`
- `email`
- `radio`
- `checkbox`
- `selectBox`
- `numberControl`
- `dismissibleInput`
