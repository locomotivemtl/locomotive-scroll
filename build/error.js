import notify from './notify.js';

function error(object, error, type) {
    const message = (type == 'stack') ? error.stack : error.toString();
    console.error(message);
    notify('Error', error.message);
    object.emit('end');
}

export default error;
