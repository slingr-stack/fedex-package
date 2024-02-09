/****************************************************
 Listeners
 ****************************************************/

listeners.defaultWebhookFedEx = {
    label: 'Catch HTTP fedex events',
    type: 'service',
    options: {
        service: 'http',
        event: 'webhook',
        matching: {
            path: '/fedex',
        }
    },
    callback: function(event) {
        sys.logs.info('Received FedEx webhook. Processing and triggering a package event.');
        var body = JSON.stringify(event.data.body);
        var params = event.data.parameters;
        if(true) {
            sys.logs.info('Valid webhook received. Triggering event.');
            sys.events.triggerEvent('fedex:webhook', {
                body: body,
                params: params
            });
            return "ok";
        }
        else throw new Error("Invalid webhook");
    }
};
