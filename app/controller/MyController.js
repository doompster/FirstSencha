/*
 * File: app/controller/MyController.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.MyController', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "button#mybutton2": {
                tap: 'onMybutton2Tap'
            }
        }
    },

    onMybutton2Tap: function(button, e, eOpts) {
        Ext.get('InitialView').push(Ext.get('SecondView'));
    }

});