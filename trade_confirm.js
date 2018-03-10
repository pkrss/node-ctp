ctp = require('bindings')('shifctp');
ctp.settings({ log: true});
var trader = ctp.createTrader();

trader.on("connect",function(result){
    console.log("on connected");
    trader.reqUserLogin('9999','065206','K49fD94nf7A',function(result,iRequestID){
        console.log('login return val is '+result);
    });

});

trader.on('rspUserLogin',function(requestId, isLast, field, info){
    
    console.log(JSON.stringify(field));
    console.log(info);
});

trader.on('rspInfoconfirm',function(requestId, isLast, field, info){

    console.log()

});

trader.connect('tcp://218.202.237.33:10002',undefined,0,1,function(result){
    console.log('connect return val is '+result);
});

console.log('continute');
