/**
 * MiningService 
 * Provides convenience methods for both client and server to turn raw sheet values into meaningful operation data
 * All time is measured in seconds (rounded to the nearest whole second)
 * 
 * https://www.w3schools.com/js/js_object_methods.asp
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
class MiningService
{
    // Just a stub initializer
    constructor(name)
    {
        this.fakeName = name;
    }

    helloWorld()
    {
        console.log("%o", this);
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
var miningSingleton = (function ()
{
    var instance;

    function createInstance()
    {
        var object = new Object("I am the mining service");
        return object;
    }

    return {
        shared: function ()
        {
            if(!instance)
            {
                instance = new MiningService();
            }
            return instance;
        }
    };
})();

miningSingleton.shared().helloWorld("date1", "date2", "+/- 5 minutes");
MiningService.timeContributed("date1", "date2", "+/- 5 minutes");
