const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'description of city',
        demand: true
    }
}).argv;

//lugar.getLugarLAtLang(argv.direccion).then(console.log).catch(err => { console.log(err) });

//clima.getClima(49.8397, 24.0297).then(console.log).catch(console.log);


const getinfo = async(direccion) => {

    try {
        const cord = await lugar.getLugarLAtLang(direccion);
        const temp = await clima.getClima(cord.lat, cord.lng);

        return temp;
    } catch (e) {
        return `Error with direction ${direccion}`;
    }

}

getinfo(argv.direccion).then(console.log).catch(console.log);