import notifier from 'node-notifier';

function notify(title, message) {
    notifier.notify({
        title: title,
        message: message
    });
}

export default notify;
