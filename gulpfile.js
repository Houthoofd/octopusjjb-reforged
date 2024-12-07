const gulp = require('gulp');
const path = require('path');
const fs = require('fs');

gulp.task('clean-old-bundles', async function () {
  const { deleteAsync } = await import('del');

  // Dossiers à nettoyer
  const directories = [
    path.join('server', 'public'),
    path.join('dist')
  ];

  for (const dir of directories) {
    // Récupérer tous les fichiers dans le dossier
    const files = fs.readdirSync(dir)
      .map(file => ({
        name: file,
        time: fs.statSync(path.join(dir, file)).mtime.getTime() // Obtenir la date de modification
      }))
      .sort((a, b) => b.time - a.time); // Trier par date de modification (plus récent en premier)

    // Garder uniquement le fichier le plus récent
    const latestFile = files[0]?.name;

    // Supprimer tous les fichiers sauf le plus récent, en excluant le dossier 'images'
    if (latestFile) {
      const filesToDelete = files
        .slice(1) // Exclure le fichier le plus récent
        .map(file => path.join(dir, file.name))
        .filter(file => !file.includes(path.join('server', 'public', 'images'))); // Exclure les fichiers dans 'images'

      if (filesToDelete.length > 0) {
        await deleteAsync(filesToDelete);
        console.log(`Ancien(s) fichier(s) supprimé(s) dans ${dir}:`, filesToDelete);
      }
    } else {
      console.log(`Aucun fichier à supprimer dans ${dir}.`);
    }
  }
});
