// если функция выполняет асинхронный код,
// то она должна возвращать промис, а если нет асинхронного кода, то это не обзятаельно
export default function(context){
    console.log("[MIDDLEWARE] here");
}