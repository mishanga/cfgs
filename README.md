### Как этим пользоваться

Склонировать проект в домашнюю директорию:

```bash
cd
git clone https://github.com/mishanga/cfgs.git
```

Забекапить старые конфиги:
```bash
mv .profile{,.old}
mv .bashrc{,.old}
mv .gitconfig{,.old}
```

Поставить симлинки на новые конфиги:
```bash
ln -s cfgs/.profile .
ln -s cfgs/.bashrc .
ln -s cfgs/.gitconfig .
```

Если вы используете цветовую схему Solarized Dark и хотите получить красивую расцветку файлов и директорий в листинге,
добавьте симлинк на конфиг dircolors:
```bash
ln -s cfgs/.dircolors .
```
