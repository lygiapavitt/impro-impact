<h1 align="center">
  Impro Impact
</h1>

## 🚀 Mise en place

1.  **Installer Git**
Git est un gestionnaire de versions de fichiers. Il permet de mettre en ligne des fichiers et de les modifier par la suite tout en gardant une trace de toutes les modifications qui y ont été apportées. Dans le cas de fichiers texte (comme du code par exemple), Git s'occupe de savoir quelles lignes ont été modifiées et par quelles personnes. Mieux, Git permet de fusionner le travail de plusieurs personnes sur un seul et même fichier.
Git nous permet donc de collaborer ensemble sur la production de ce site, puisque vous pouvvez modifier les fichiers (ou parties de fichiers) correspondant au contenu du site pendant que je modifie les parties qui concernent la structure du site.
Pour installer Git sur votre machine rendez-vous à [cette adresse](https://git-scm.com/downloads) et sélectionnez l'installeur correspondant à votre OS (Mac ou Windows).

1.  **Créer un compte GitHub**
Git n'est que l'utilitaire de gestion de versions de fichiers, mais pour collaborer il faut pouvoir mettre les-dits fichiers en ligne afin de pouvoir les partager. GitHub est un hebergeur web de fichiers (un peu comme Dropbox) mais qui supporte l'usage de Git pour y uploader et versionner ses fichiers. C'est sur GitHub (site sur lequel vous êtes en ce moment) que j'ai choisi de versionner les fichiers du site internet, c'est pratique, gratuit et efficace. Pour pouvoir télécharger les fichiers sur votre ordinateur, les modifier et les mettre à jour surGithub pour que les autres aient accès à vos changements, il faudra vous créer un compte GitHub (ça doit être quelque part en haut à droite de votre écran pour créer un compte).

1.  **Installer Python**
Les script (déploiement automatique, synchro automatique, etc.) sont écrits en Python car le language permet de développer rapidement des programmes qui sont agnostiques de l'environnement (donc qui fonctionnent pareil sur Mac et Windows par exemple). Pour pouvoir lancer les scripts par contre il vous faut télécharger et installer la dernière version de Python pour votre OS (Mac ou Windows) que vous trouverez [ici](https://www.python.org/downloads/).

1.  **Installer npm**
On va avoir besoin de `npm`, un gestionnaire de package pour le javascript (le language de programmation utilisé pour le site internet). Gatsby par exemple, qui permet de coder le site en question, est installé sur votre machine grâce à `npm`. Vous pouvez télécharger et installer `npm` [à cette adresse](https://nodejs.org/en/download/).

1. **Vérifier les installations**
On va pouvoir vérifier que tout est installé correctement. [Ouvrez une console](https://support.apple.com/fr-ch/guide/terminal/apd5265185d-f365-44cb-8b09-71a064a42125/mac) et essayez de rentrer les commandes suivantes:
* `git`
* `npm`
* `python -h`
Si les commandes sont trouvées par votre terminal, il devrait s'afficher un message d'aide expliquant l'usage des différents utilitaires qu'on a installé.

1.  **`git clone`**
Ok on a installé assez de bordel maintenant on va commencer à faire des trucs avec tout ça.
La première étape c'est de cloner les fichiers du github. Pour cela il fait ouvrir un terminal et utiliser ce terminal pour [vous déplacez dans un dossier](https://www.howtogeek.com/140679/beginner-geek-how-to-start-using-the-linux-terminal/) dans lequel vous voulez voir apparaître le dossier contenant tout le code. Une fois celà fait, écrivez la commande suivante:
```shell
git clone https://github.com/Minimata/impro-impact.git
```
Cette commande va aller chercher tous les fichiers versionnés sur Github et les mettre dans un dossier sur votre ordinateur.

1.  **`npm install`**
Toujours dans votre terminal, déplacez vous maintenant dans le dossier qui vient d'être créé avec tous les fichiers du site dedans et lancez la commande suivante:
```shell
npm install
```
Ceci va installer l'ensemble des package dont le projet dépend, comme par exemple Gatsby afin que vous puissiez construire et visualiser vous même vos changements.

1.  **Créer un fichier de configuration**
Finalement, il vous faut créer un fichier `config.json` dans la hiérarchie. Ce fichier a la tête suivante:
```javascript
{
    "hostname": "eris.ch-dns.net",
    "username": "xxxxxx",
    "password": "xxxxxx"
}
```
ce fichier n'est pas sur GitHub avec les autres car ces fichiers sont publiques et accessibles à tous. On n'aimerait pas donner les accès de notre site à n'importe qui. Il vous faudra remplacer les `xxxxxx` avec les informations que je vous donnerai. Ce fichier sera utile pour le déploiement automatique du site internet.

## 🧐 Usage

1.  **Les scripts automatiques**
Vous trouverez dans le dossier "launchers" une quantité de scripts qui permettent d'automatiser la synchronisation des modifications sur GitHub, compiler le site et le déployer en ligne en double-cliquant simplement dessus. Les fichiers qui finissent par `win.bat` sont pour Windows et `mac.sh` pour Mac et Linux respectivement.
* `git_sync` va vous demander vos identifiants GitHub ainsi qu'un message avec lequel vous souhaitez documenter les modifications que vous avez apportées au code. Une fois ceci-fait, vos changements seront mis en ligne sur GitHub et tout le monde pourra se mettre à jour avec.
* `gatsby_build` va compiler avec Gatsby le site internet afin d'en faire quelque chose qu'on peut déployer en ligne.
* `deploy` va aller chercher les fichiers préalablement générés avec Gatsby et les mettre en ligne en lieu et place du site internet actuel.
* `sync_and_deploy` effectue les trois opérations ci-dessus (synchronisation, compilation et déploiement) en un seul script.
Je recommande de d'abord lancer une fois les deux premiers scripts indépendamment afin de voir un peu comment ça fonctionne et si ça fonctionne avant de lancer le script de déploiement ou le script de toutes les étapes afin d'éviter de foutre en l'air le site internet.
L'avantage d'une telle solution est que même s'il y a des erreurs ou des problèmes, on puisse toujours récupérer une ancienne version fonctionnelle du code et la mettre en ligne. De cette manière, même si le site internet est une fois pété à cause d'une mauvaise manip, on peut toujours revenir à une ancienne version et réparer le tout, donc il y a vraiment aucune peur à avoir quoiqu'il arrive, mais il vaut mieux éviter les comportements à risque quand même et donc d'abord s'assurer que les scripts fonctionennt bien sur vos machines avant de déployer allègrement le site internet.

1.  **Gatsby preview**
Vous pouvez visualiser vos changements avec Gatsby sans nécessairement déployer le site internet afin de vous assurer que vos changements rendent bien et ne cassent rien. Pour ça il vous faut ouvrir un terminal, vous rendre dans le dossier du site internet et lancer la commande suivante:
```shell
gatsby develop
```
Le site cera ensuite disponible localement avec vos changements dans le navigateur de votre choix à l'adresse suivante: http://localhost:8000/
Vous n'avez pas besoin de relancer la commande `gatsby develop` entre chaque changement. Si vous modifiez du texte après avoir lancé la commande, celle-ci rechargera le site internet automatique et vous verrez vos changements immediatement appliqués au site internet.

1.  **Git commands and resolving merge issues**
-
