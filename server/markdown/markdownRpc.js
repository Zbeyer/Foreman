// Meteor.methods({
// 	{
//     // https://developers.freshdesk.com/api/
//     getMarkdown: function (markdownFileName)
//     {
//         // var response, error;
//         // return response.data;
//         return "Bacon" //Assets.getText(markdownFile);
//     }
// });

// freshdeskSearch: function (searchString)
Meteor.methods(
{
    getMarkdown: function (fileName)
    {
        if(!fileName)
        {
            throw new Meteor.Error('get-markdown-for-null', 500, "Tried to get undefined filename");
        }
        console.log("MD Request for %o", fileName);
        var response, error;
        try
        {
            response = Assets.getText(fileName);
        }
        catch(_error)
        {
            error = _error;
        }
        if(error)
        {
            throw error;
        }
        if(response)
        {
            return response;
        }
    }
});
