all:
	@echo "No has especificado el comando."
	@cat Makefile | grep ':'

actualizar_demo:
	ember build --output-path=docs
	git add docs
	git commit -m "Actualizando gitpages."
	git push origin master
