'use strict'; //No se lo que es esto

const { WebhookClient } = require('dialogflow-fulfillment');
const { dialogflow } = require('actions-on-google');

process.env.DEBUG = 'dialogflow:debug'; //no se

exports.testFunction = (req, res) => {
    const agent = new WebhookClient({req: req, res: res});

    const getDefinition = (agent) => {

        //const términos = agent.parameters['Terminos'];

    };

    let intentMap = new Map(); //No se lo que es un map
    intentMap. set('NAME_OF_INTENT', 'NAME_OF_ACTION');

    agent.handleRequest(intentMap);
    
};


