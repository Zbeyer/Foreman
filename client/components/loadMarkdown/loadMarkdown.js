Template.loadMarkdown.onCreated(function ()
{
    this.markdownFileContents = new ReactiveVar();
    this.markdownFileError = new ReactiveVar();
});

Template.loadMarkdown.onRendered(function ()
{
    let template = Template.instance();
    let fileName = Template.instance().data + ".md";

    // Reset inner
    template.markdownFileContents.set(undefined);
    template.markdownFileError.set(undefined);

    Meteor.call('getMarkdown', fileName, function (error, results)
    {
        results ? template.markdownFileContents.set(results) : template.markdownFileContents.set(undefined);
        error ? template.markdownFileError.set(error) : template.markdownFileError.set(undefined);

        if(error)
        {
            console.error(error);
        }
    });
})

Template.loadMarkdown.helpers(
{
    markdownFileContents()
    {
        return Template.instance().markdownFileContents.get();
    },
    markdownFileError()
    {
        return Template.instance().markdownFileError.get();
    }
});
