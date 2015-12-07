git clone https://github.com/borzos6/translations.git origin
mkdir translations
find ./origin/projects/yearcompass_booklet_2015_2016/online/ -name *.js -exec cp {} ./translations \;
rm -rf origin