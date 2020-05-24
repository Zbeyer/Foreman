Template.loadMarkdown.onCreated(function ()
{
    this.markdownFileContents = new ReactiveVar();
    this.markdownFileError = new ReactiveVar();
});

Template.loadMarkdown.onRendered(function ()
{
    let template = Template.instance();
    let fileName = Template.instance().data + ".md";
    console.log('rendered');
    template.markdownFileContents.set(undefined);
    template.markdownFileError.set(undefined);
    console.log("MD Request for %o", fileName);

    Meteor.call('getMarkdown', fileName, function (error, results)
    {
        console.log("result: %o\nerror: %o", results, error)
        results ? template.markdownFileContents.set(results) : template.markdownFileContents.set(undefined);
        error ? template.markdownFileError.set(error) : template.markdownFileError.set(undefined);
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
