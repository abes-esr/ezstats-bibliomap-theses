# ezstats-bibliomap-theses
Conteneurs de l'installation Bibliomap pour Theses.fr

## Description

**Bibliomap** est un outil permettant de visualiser en temps réel, directement dans le navigateur, les événements d'utilisation localisés générés par ezPAARSE. Dans le cadre du projet **EzStats Thèses**, Bibliomap permet de suivre l'utilisation des ressources électroniques relatives aux thèses, facilitant ainsi l'analyse et l'adoption d'ezPAARSE au sein des établissements de l'ABES.

[GitHub - Bibliomap](https://github.com/ezpaarse-project/bibliomap)


## Architecture

<p align="center">
<img src="https://docs.google.com/drawings/d/1bkxEEBL1kLzH76dkIYFzspYHOVajDjQHCijU3mxJLnM/pub?w=694&h=519" />
</p>


Le schéma ci-dessus illustre l'architecture de Bibliomap, incluant les composants clés tels que :
- **bibliomap-harvester** : Écoute en temps réel les logs provenant d'ezProxy.
- **bibliomap-enricher** : Écoute les données de bibliomap-harvester et les envoie à ezPAARSE.
- **bibliomap-viewer** : Interface web affichant en temps réel les données d'utilisation des ressources électroniques.

*Les informations sur l'architecture proviennent du projet [Bibliomap](https://github.com/ezpaarse-project/bibliomap).*

## Prérequis
Assurez-vous d'avoir installé :
- **Docker**
- **Docker Compose**

## Installation

### Déploiement
Pour déployer l'application, exécutez les commandes suivantes :

```bash
# Clonez le dépôt
git clone https://github.com/ezpaarse-project/bibliomap.git
cd bibliomap

# Pull des dernières modifications
git pull

# Démarrer les conteneurs avec Docker Compose
docker-compose up -d
```


## Configuration

1. **Fichier docker-compose.yml** : Modifiez le fichier `docker-compose.yml` selon vos besoins, en spécifiant les ports et les volumes nécessaires.

2. **Fichier config.local.js** : Ce fichier est vide par défaut et doit être personnalisé pour définir vos configurations spécifiques.

3. **Fichier local-production.json** : Ce fichier contient les paramètres pour le parseur. Voici un exemple de contenu :

    ```json
    {
      "ezpaarse": {
        "headers": {
          "ezPAARSE-Buffer-Size": 0,
          "Force-Parser": "thesesfr",
          "ezPAARSE-Filter-Redirects": "false",
          "Log-Format-apache": "%h %l %u %t \"%r\" %>s %b \"%{Referer}<.*>\" \"%{User-Agent}<.*>\" \"%{Shib-Identity-Provider}<.*>\" \"%{eppn}<.*>\" \"%{primary-affiliation}<.*>\" \"%{supannEtablissement}<.*>\""
        }
      }
    }
    ```

4. **Répertoire Theme** : Spécifiez le répertoire de thème dans votre configuration, qui sera unique en fonction de votre application.

## Démarrage de l'application
Après avoir configuré les fichiers nécessaires, vous pouvez démarrer l'application :


```bash
docker-compose up -d
```

Accédez ensuite à l'interface à l'adresse : [http://127.0.0.1:50197](http://127.0.0.1:50197)

## Mises à jour
Pour mettre à jour votre instance de Bibliomap, exécutez simplement :

```bash
git pull
docker-compose up -d
```

Cela permettra de récupérer les dernières modifications et de redémarrer l'application avec la configuration mise à jour.

## Licence
Ce projet est sous licence MIT. Veuillez consulter le fichier LICENSE pour plus de détails.
