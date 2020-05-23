Blaze Templates
---



###### `.html`

###### Declaration

```
<template name"header">...</template>
```

###### Reference

```
{{> header}}
```



----



Blaze html conditionals
---

###### If

```
{{#if loggedIn}}
	Welcome {{> username}}
{{/if}}
```

###### Unless

```
{{#unless loggedIn}}
	Sign up now!
{{/unless}}
```

###### For / Each

```
{{#each todos}}
	{{> todo}}
{{/each}}
```



Blaze Extensions
---

###### .js



###### Helpers

*   Helpers generally provide data to the template. Functions for returning variables, for example

```
Template.helpers({...})
```

###### Events

*   Events make things dynamic. Button click handlelers, for example 

```
Template.events({...})
```

