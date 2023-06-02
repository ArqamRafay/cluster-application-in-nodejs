const os = require('os');
const cluster = require('cluster');
const Index = require('../src/index');

// console.log(os.cpus()); 
// Master , workers => cluster.fork(copy)

if (cluster.isMaster) {
    let noOfCpus = os.cpus().length;
    console.log('Master process is running', process.pid);
    for (let i = 0; i < noOfCpus; i++) {
        cluster.fork()
    }
    cluster.on('exit', () => {
        console.log('One worker destroyed');
        cluster.fork();
    })
} else {
    new Index().init();
}
