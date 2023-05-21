import useTitle from "../../hooks/useTitle";

const Blogs = () => {
    useTitle("Blogs");
    
    return (
        <div className="mt-10 px-3 space-y-6">
            <h2 className="text-5xl font-semibold text-center">Learn More...</h2>
            <div className="card w-full bg-slate-100" data-aos="flip-left">
                <div className="card-body text-justify">
                    <h2 className="card-title">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p>Access tokens and refresh tokens are used in token-based authentication systems to grant access to protected resources. Here&apos;s an explanation of what they are, how they work, and where they should be stored on the client-side. <br /><br />
                    <span className="font-semibold">Access Token: </span>
                    An access token is a credential that is issued to a client application after a successful authentication process. It represents the client&apos;s authorization to access protected resources on a server. Access tokens are typically short-lived and have an expiration time to enhance security. <br /><br />
                    <span className="font-semibold">Refresh Token: </span>
                    A refresh token, on the other hand, is a longer-lived token that is used to obtain a new access token once the current access token has expired. When the access token expires, the client application uses the refresh token to request a new access token from the authentication server without requiring the user to log in again. <br /><br />
                    <span className="font-semibold">How They Work: </span>
                    When a user authenticates with a server, the server verifies the credentials and generates both an access token and a refresh token. The access token is then provided to the client application, which includes it in each subsequent request to access protected resources on the server.</p>
                </div>
            </div>
            <div className="card w-full bg-slate-100" data-aos="flip-right">
                <div className="card-body text-justify">
                    <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
                    <p>SQL and NoSQL are fundamentally different types of databases that differ in their data models, storage architectures, query languages, and use cases. Here are some of the key differences between SQL and NoSQL databases: <br /><br />
                    <span className="font-semibold">Data Model: </span>
                    SQL databases use a structured or relational data model, where data is stored in tables with predefined columns and data types. NoSQL databases, on the other hand, use a non-relational data model that allows for more flexible and dynamic data structures. <br /><br />
                    <span className="font-semibold">Querying: </span>
                    SQL databases use SQL (Structured Query Language) for querying data. SQL is a powerful declarative language that allows for complex queries and joins. NoSQL databases, on the other hand, use a variety of query languages depending on the type of database, such as document-based query languages like MongoDB&apos;s query language <br /><br />
                    <span className="font-semibold">Scalability and Performance: </span>
                    SQL databases tend to scale vertically, which means adding more resources such as CPU, memory, and storage to a single server. This can be costly and limit scalability. NoSQL databases, on the other hand, are designed to scale horizontally by distributing data across multiple servers, making them more scalable and cost-effective for large-scale applications. <br /><br />
                    <span className="font-semibold">Schema Flexibility: </span>
                    SQL databases require a predefined schema that defines the structure of the data before it can be inserted. NoSQL databases don&apos;t require a fixed schema, which makes them more flexible and easier to iterate on.</p>
                </div>
            </div>
            <div className="card w-full bg-slate-100" data-aos="flip-up">
                <div className="card-body text-justify">
                    <h2 className="card-title">What is express js? What is Nest JS?</h2>
                    <p>Express.js and NestJS are both web application frameworks used to build server-side applications, but they differ in their design philosophies and feature sets. <br /><br />
                    <span className="font-semibold">Express.js: </span>
                    Express.js is a popular and widely used web application framework for Node.js. It provides a simple, flexible and minimalist approach to building web applications and APIs. With its middleware-based architecture, it makes it easy to add additional functionality to your web application with third-party packages. <br /><br />
                    <span className="font-semibold">NestJS: </span>
                    NestJS is a progressive Node.js framework for building efficient, scalable, and enterprise-grade server-side applications. It uses modern JavaScript features and concepts such as TypeScript, dependency injection, decorators, and more. NestJS is designed to be modular, allowing developers to easily add or remove functionality as needed. It also includes built-in support for WebSockets, gRPC, microservices, GraphQL, and other advanced features.</p>
                </div>
            </div>
            <div className="card w-full bg-slate-100" data-aos="flip-down">
                <div className="card-body text-justify">
                    <h2 className="card-title">What is MongoDB aggregate and how does it work?</h2>
                    <p>
                        MongoDB&apos;s aggregation framework is a powerful tool for performing complex queries and analysis on the data stored in a MongoDB database. It provides a way to group, filter, and transform data in a highly flexible and efficient way. The aggregate function in MongoDB allows to perform these operations by creating a pipeline of stages that are executed in sequence. Each stage performs a specific operation on the input documents and passes the results to the next stage in the pipeline. Some common aggregation stages include: <br /><br />
                        <li className="list-none">
                            <span className="bg-slate-300 px-4 rounded-xl">$match:</span> Filters documents based on specified criteria.
                        </li>
                        <li className="list-none">
                            <span className="bg-slate-300 px-4 rounded-xl">$group:</span> Groups documents together based on a specified key, and performs calculations or transformations on the grouped data.
                        </li>
                        <li className="list-none">
                            <span className="bg-slate-300 px-4 rounded-xl">$project:</span> Transforms documents by including or excluding fields, renaming fields, or creating new calculated fields.
                        </li>
                        <li className="list-none">
                            <span className="bg-slate-300 px-4 rounded-xl">$sort:</span> Sorts documents based on specified criteria.
                        </li>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;