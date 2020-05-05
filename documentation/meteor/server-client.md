Database Notes
---

Meteor Server automatically manages **Client** and **Server** collections to keep everyone in sync.

*   **Meteor Server** Uses MongoDB (noSQL database)
*   **Meteor Clients** use Minimongo for local cache.

Adding records to the Client should automatically propogate up to the server. Items added to the Server Database the server works to notify clients as well. With these records managed automatically collections are a, "write once," approach to managing data model.



Blaze Templating Language
---

Blaze is is a *reactive* templating language, meaning it attempts to keep the model and view in sync (2 way data binding or MVVM). Out of the box Blaze supposed to play well with **Angular** and **React**. 



Code Management
---

By default code loads to both server and client. However if a developer wants code to only execute on a server or client `Meteor.isServer` or `Meteor.isClient` return `bool` for which is executing the code. Because it is loaded to both, for security reasons, avoid using `isServer` for private access keys that clients shouldn't ever see.

```
if Meteor.isServer {
	// Code only runs on server
	// server.js
	// ./server folder
}

if Meteor.isClient {
	// Code only runs on client devices
	// client.js
	// ./client folder
}
```



A `./client` or `./server` is the exception to the rule. Code put into a root client or server folder will only be loaded to the client or server respectively.



`./lib` is loaded by both client and server but is flagged to be loaded first. 

*   Otherwise load is alphabetical and deepest nested first.

`./public` is a publically accessible asset directory. Images, fonts, and other items shoul aways go there.



###### Example Structure

```
/my-project
	/lib
	/client
		/lib
	/server
		/lib
	/public
		/fonts
		/images
```

