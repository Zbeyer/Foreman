var esiSingleton = (function ()
{
    // https://developers.eveonline.com/applications/details/61871#app-section-details
    // https://docs.esi.evetech.net/docs/FAQ.html
    // https://developers.eveonline.com/resource/resources
    // https://developers.eveonline.com/resource/license-agreement
    var shared;
    var esiCallback, esiClientId, esiSecretKey;

    function createInstance()
    {
        var object = new Object("I am the esi");
        return object;
    }

    return {
        shared: function ()
        {
            if(!shared)
            {
                shared = createInstance();
                Meteor.settings.EVE_CALLBACK ? shared.esiCallback = Meteor.settings.EVE_CALLBACK : shared.esiCallback = undefined;
                Meteor.settings.EVE_CLIENT_ID ? shared.esiClientId = Meteor.settings.EVE_CLIENT_ID : shared.esiClientId = undefined;
                Meteor.settings.EVE_SECRET_KEY ? shared.esiSecretKey = Meteor.settings.EVE_SECRET_KEY : shared.esiSecretKey = undefined;

            }
            return shared;
        }
    };
})();

// var esi = esiSingleton.shared();
