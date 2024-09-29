MongoDB

Is a document database. 

It stores data in a type of JSON format called BSON.


A record in MongoDB is a document

Is a data structure composed of key value pairs


Similar to the structure of JSON objects.



MongoDB Document: 
	
	Records in a MongoDB database are called documents
	
	
	field values may include numbers
	
	strings, booleans, arrays, or even nested documents.
	
	```
	{
		title: "Post Title 1",
		body: "Body of post.",
		category: "News",
		likes: 1,
		tags: ["news", "events"],
		date: Date()
	}
	
	```
	
	
	Find all documents: 
		
		that have a category of "news".
		
		```
		db.posts.find( {category: "News"} )
		
		```
	
		result: 
		
		```
		[
		  {
			_id: ObjectId("62c350dc07d768a33fdfe9b0"),
			title: 'Post Title 1',
			body: 'Body of post.',
			category: 'News',
			likes: 1,
			tags: [ 'news', 'events' ],
			date: 'Mon Jul 04 2022 15:43:08 GMT-0500 (Central Daylight Time)'
		  }
		]
		Atlas atlas-8iy36m-shard-0 [primary] blog>
			
		```
		
		
|| Start

	MongoDB is a document database 
	
	Can be installed locally or hosted in the cloud.
	
	
	SQL vs Document Databases:
		
		SQL databases are considered relational databases. 
		
		They store related data in separate tables. 
		
		When data is needed, it is queried from multiple tables to join the data back together.
		
		
		MongoDB is a document database, non-relational database.
			
		not mean that relational data cannot be stored in document databases.
		
		means that relational data is stored differently
		
		non-tabular database.
	
	
		MongoDB stores data in flexible documents.
		
		Instead of having multiple tables you can simply 
		
		keep all of your related data together. 
	
		makes reading your data very fast.
	

		Can still have multiple groups of data too.
		
		Instead of tables these are called collections.


	Local vs Cloud Database:
		
		MongoDB can be installed locally
		
		Allow you to host your own MongoDB server on your hardware
		
		Requires you to manage your server, upgrades, and any other maintenance.

		
		Can download and use the MongoDB open source Community Server 
		
		on your hardware for free.
		
		
		Or use MongoDB Atlas, a cloud database platform. 
		
		Much easier than hosting your own local database.

		Need access to a MongoDB database.

		Sign up for a free MongoDB Atlas account
		

	Creating a Cluster:
	
		set up a free "Shared Cluster" 
	
		choose your preferred cloud provider and region.

		set up a user and add your IP address 
		
		to the list of allowed IP addresses.
		
		
		in "Database Access", create a new user
	
		keep track of the username and password.
		
		in  "Network Access", add your current IP address
		
		allow access from your computer


	MongoDB Shell (mongosh):
	
		Ways to connect to your MongoDB database.
	
		
	Connect to the database:
		
		Need your database specific connection string.
			
		In MongoDB Atlas dashboard
		
		"Databases" -> "Connect" from your Cluster
		 
		"Connect with the MongoDB Shell".
		
		Copy your connection string.
		
		Like: 
		
		connection string
		
		```
		mongosh "mongodb+srv://cluster0.ex4ht.mongodb.net/myFirstDatabase" --apiVersion 1 --username YOUR_USER_NAME 
		
		```
		
		Paste your connection string into your terminal
		
		Enter your database user password


		Use 'mongosh' to create, read, update, and delete (CRUD) items in your database.
		
		And use with other backend technologies like Node.js.



|| MongoDB Query API

	Is the way you will interact with your data.

	Can be used two ways:

		CRUD Operations
		
		Aggregation Pipelines


	Query API uses: 
			
		Adhoc queries with mongosh, Compass, VS Code, or a MongoDB driver for the programming language you use.
		
		Data transformations using aggregation pipelines.
		
		Document join support to combine data from different collections.
		
		Graph and geospatial queries.
		
		Full-text search.
		
		Indexing to improve MongoDB query performance.
		
		Time series analysis.



|| mongosh Create Database

	After connecting to your database using mongosh
	
	can see which database you are using
	
	```
	db
	
	```
	
	If you have used the connection string 
	
	provided from the MongoDB Atlas dashboard
	
	you should be connected to the myFirstDatabase database.

	
	Show all databases:
	
		```
		show dbs
		
		```
		
		myFirstDatabase is not listed. 
		
		This is because the database is empty. 
		
		An empty database is essentially non-existant.
		
		
		
	Change or Create Database:
	
		change or create a new database by typing use then the name of the database.
	
		new database called "blog"
	
		```
		use blog 
		
		```
		
		a database is not actually created 
		
		until it gets content



|| Create Collection

	are 2 ways to create a collection
	
	
	1. createCollection() database method.
	
		```
		db.createCollection("posts") 
		
		```

	2. create a collection during the insert process.
	
		assuming object is a valid, 
		
		JavaScript object containing post data:
		
		
		```
		db.posts.insertOne(object) 
		
		```

		 a collection is not actually created 
		 
		 until it gets content
		 

|| Insert

	2 methods to insert documents

	
	1. insertOne()
	
		insert a single document
		
		single object into the database
		
		
		in shell, after opening an object 
		
		with curly braces "{" 
		
		enter to start a new line, no executing
		
		execute when you press enter
		
		after closing the braces "}"

	
		```
		db.posts.insertOne({
		  title: "Post Title 1",
		  body: "Body of post.",
		  category: "News",
		  likes: 1,
		  tags: ["news", "events"],
		  date: Date()
		})

		```
		
		 If you try to insert documents 
		 
		 into a collection that does not exist
		 
		 MongoDB will create the collection automatically.
	
		
	2. insertMany():
		
		multiple documents
		
		inserts an array of objects into the database.
		
		([])
		
		```
		db.posts.insertMany([  
		  {
			title: "Post Title 2",
			body: "Body of post.",
			category: "Event",
			likes: 2,
			tags: ["news", "events"],
			date: Date()
		  },
		  {
			title: "Post Title 3",
			body: "Body of post.",
			category: "Technology",
			likes: 3,
			tags: ["news", "events"],
			date: Date()
		  },
		  {
			title: "Post Title 4",
			body: "Body of post.",
			category: "Event",
			likes: 4,
			tags: ["news", "events"],
			date: Date()
		  }
		])

		```
	
	
		

