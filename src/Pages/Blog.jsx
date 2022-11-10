import React from "react";

const Blog = () => {
  return (
    <div className="w-full">
      <div className="bg-[#D4FAEC] p-4 md:p-10 rounded-lg my-10 lg:max-w-6xl mx-auto md:w-[80%] w-[90%]">
        <h1 className="font-poppins font-bold text-3xl text-green-400 text-center">
          Blogs
        </h1>
        <div className=" grid grid-cols-1 gap-4 lg:grid-cols-2 bg-[#D4FAEC] p-10 rounded-lg my-10">
          <div className="bg-white rounded-lg shadow-lg p-5">
            <h1 className="text-2xl font-poppins">
              Defferent Between Sql and NoSql
            </h1>
            <div className="space-y-1">
              <div className="text-gray-400 font-normal font-poppins text-sm">
                When choosing a modern database, one of the biggest decisions is
                picking a relational (SQL) or non-relational (NoSQL) data
                structure.
              </div>
              <br />
              <div className="text-green-400 font-normal font-poppins text-lg py-2">
                The five critical differences between SQL vs NoSQL are:
              </div>
              <br />
              <div className="text-gray-500 font-roboto">
                1.SQL databases are relational, NoSQL databases are
                non-relational.
                <br />
                2.SQL databases use structured query language and have a
                predefined schema. NoSQL databases have dynamic schemas for
                unstructured data.
                <br />
                3.SQL databases are vertically scalable, while NoSQL databases
                are horizontally scalable.
                <br />
                4.SQL databases are table-based, while NoSQL databases are
                document, key-value, graph, or wide-column stores.
                <br />
                5.SQL databases are better for multi-row transactions, while
                NoSQL is better for unstructured data like documents or JSON.
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-5">
            <h1 className="text-2xl font-poppins">
              What is the difference between javascript and NodeJS?
            </h1>
            <div className="space-y-1">
              <div className="text-gray-400 font-normal font-poppins text-sm">
                JavaScript is a simple programming language that can be used
                with any browser that has the JavaScript Engine installed.
                Node.js, on the other hand, is an interpreter or execution
                environment for the JavaScript programming language.
              </div>
              <br />
              <div className="text-green-400 font-normal font-poppins text-lg py-2">
                Major Comparison Between Node.js and JavaScript
              </div>
              <br />
              <div className="text-gray-500 font-roboto">
                JavaScript is a client-side scripting language that is
                lightweight, cross-platform, and interpreted. Node. On the other
                hand, Js is a server-side scripting language built on the V8
                engine.
                <br />
                Javascript is a computer language that may be used to create
                website scripts. NodeJS is a runtime environment for Javascript.
                Both are crucial and intertwined.
                <br />
                f you already know how to use JavaScript, learn to use Node. Js
                is a lot easier. Yes, it is simple.
                <br />
                JavaScript is a programming language that may be used on both
                the front and back end.
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-5">
            <h1 className="text-2xl font-poppins">
              What is JWT, and how does it work?
            </h1>
            <div className="space-y-1">
              <div className="text-gray-400 font-normal font-poppins text-sm">
                JWT (Json web token) also called 'jot' token, jwt is token based
                authentication system. It is popularly used as a
                client-side-based stateless session,
              </div>
              <br />
              <div className="text-green-400 font-normal font-poppins text-lg py-2">
                How does JWT works:
              </div>
              <br />
              <div className="text-gray-500 font-roboto">
                When it comes to API authentication and server-to-server
                authorization, JSON web token (JWT) is particularly a useful
                technology. In terms of Single Sign-On (SSO), it means that a
                service provider can receive trustworthy information from the
                authentication server. By sharing a secret key with the Identity
                Provider, the Service Provider can hash a part of a token it
                receives and compare it to the signature of the token. Now, if
                that result matches the signature, the SP knows that the
                information provided has come from the other entity possessing
                the key.
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-5">
            <h1 className="text-2xl font-poppins">
              How does NodeJS handle multiple requests at the same time?
            </h1>
            <div className="space-y-1">
              <div className="text-gray-400 font-normal font-poppins text-sm">
                NodeJS receives multiple client requests and places them into
                EventQueue.
              </div>
              <br />
              <div className="text-green-400 font-normal font-poppins text-lg py-2">
                How NodeJS handle multiple client requests?
              </div>
              <br />
              <div className="text-gray-500 font-roboto">
                NodeJS server uses an EventQueue, which queues incoming client
                requests and an EventLoop which is an infinite loop that
                receives requests and processes them. This EventLoop is single
                threaded and acts as a listener for the EventQueue which
                processes incoming requests based on FIFO policy.
                <br />
                When a new request comes in, NodeJS checks if it requires any
                blocking IO operations, if not, the EventLoop processes it and
                sends the response back to the client directly. If yes, then the
                request is forwarded to the thread manager
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
