посмотреть настройки

git config --list

git config --global user.name “имя”

git config --global user.email “почта”

git config --global core.safecrlf warn

git config --global core.quotepath off

git config --global init.defaultBranch main # Ветка по умолчанию

окна

git config --global core.autocrlf true

MAC и UNIX

git config --global core.autocrlf input

Действия при запуске новой репозитории и при работе с ним

запуск репозитория git

git init

состояние состояния репозиторий

git status

добавить в трек (отслеживаемые) файл или папку

git add index.html

добавить все файлы из корня в трек

git add .

собрание коммитов (сделать слепок) будущего состояния проекта

git commit -m "сообщение"

git log --oneline посмотреть историю коммитов

показывает изменения
git diff
git diff --color-words // показывает по строкам изменения

отменить коммит "ПЕРЕПИСЫВАЕТ ИСТОРИЮ"
вернуться к коммиту старому но оставить текущие изменения
git reset 'HASH commit'

вернуться к комиссии и удалить все изменения
git reset --hard 'HASH commit'

откатить изменения у всех файлов трека
git checkout .  

git checkout name.file  // откатить изменения в одном файле или каталоге

откатить изменения в один файл или каталог
git checkout name.file

отправить изменения в удаленный репозиторий
git push 

клонирование репозитория
git clone https://github.com/Quper87/git-lesson.git

сохраняются изменения отслеживаемых файлов и выполняет коммит
git commit -a -m 'сохраняет изменения отслеживаемых файлов и выполняет коммит'