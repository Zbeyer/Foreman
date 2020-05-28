/**
 * MiningService 
 * Provides convenience methods for both client and server to turn raw sheet values into meaningful operation data
 * All time is measured in seconds (rounded to the nearest whole second)
 * 
 * https://www.w3schools.com/js/js_object_methods.asp
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */

var MiningSingleton;

class MiningService
{
    // Just a stub initializer
    constructor(name)
    {
        this.serviceName = name;
        this.lasers = new Mongo.Collection('lasers');
        // this.shared = MiningSingleton.shared()
        // this.foo = "bar"
    }

    static createInstance(serviceName)
    {
        var object = new MiningService(serviceName);
        return object;
    }

    static shared()
    {
        return MiningSingleton.shared();
    }

    helloWorld()
    {
        console.log("instanceName: %o", this.serviceName);
    }

    static volumePerSecond(volume, cycleTime)
    {
        if(cycleTime <= 0)
        {
            return undefined;
        }
        return volume / cycleTime;
    }

    static timeContributed(start, stop, adjusted)
    {
        console.log(start);
        console.log(stop);
        console.log(adjusted);
    }
}

/**
 * Singleton service may not be needed...
 */
MiningSingleton = (function ()
{
    var instance;

    return {
        shared: function ()
        {
            if(!instance)
            {
                instance = MiningService.createInstance('mining-service-singleton');
                // instance.foo = "bacon"
            }
            return instance;
        }
    };
})();

MiningService.shared().helloWorld();
MiningSingleton.shared().helloWorld();
// MiningService.timeContributed("date1", "date2", "+/- 5 minutes");
