const mongoose = require('mongoose')

module.exports = uri => {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })

    mongoose.connection.on('connected', () =>
        console.log('===> Mongoose! Nicely done, we are connected')
    )

    //capturamos um sinal de encerramento (SIGINT), Ctrl + C
    process.on('SIGINT', () => 
        mongoose.connection.close(() => {
            console.log('===> Mongoose! Bummer, someone took the server down');
            //0 indica finalização ocorreu sem erros 
            process.exit(0);
        })
    )


    mongoose.connection.on('disconnected', () => 
        console.log('===> Mongoose! Oh, the server was disconnected!')
    )
}
