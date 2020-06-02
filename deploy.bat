@ECHO OFF

CD functions

SET /P _sure=Estas seguro de que quieres subir los cambios a PRODUCCIÓN? s/n;

IF "%_sure%"=="s" (
    gcloud.config set project asdkfksafkafaskfklas
    gcloud functions deploy wh_bankademia --runtime nodejs10 --trigger-http --region=europe-west1
) ELSE (
    echo Operacion abortada
)

PAUSE


