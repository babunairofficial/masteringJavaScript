const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function() {
        console.log('Async task is complete');
        resolve();
    }, 1000);
});
// Do an async task
// DB calls, cryptography, network

promiseOne.then(function(){
    console.log("Promise consumed");
});