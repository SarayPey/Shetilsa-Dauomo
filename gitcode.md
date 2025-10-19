# CONFIGURAR REPOSITORIO NUEVO

`echo "# Shetilsa-Dauomo" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/SarayPey/Shetilsa-Dauomo.git
git push -u origin main`

# PRIMER COMMIT
`git add .  
git commit -m "{aqui escribo mi mensaje}"  
git push --set-upstream origin {nombre-de-la-rama}`

# NUEVOS COMMITS

`git add .
git commit -m "{aqui escribo mi mensaje}"
git push`

# ACTUALIZAR

`git checkout main  
git pull  
git checkout {nombre-de-la-rama}  
git merge main`