import React from "react";

const Blogs = () => {
  return (
    <div className=" my-5 py-5 px-2 mx-5 bg-white pt-3 border border-dark">
      <div className="m-3">
        <h3 className="fw-bold"> What is cors?</h3>
        <p className="mt-4">
          Cross-origin resource sharing (CORS) is a browser mechanism which
          enables controlled access to resources located outside of a given
          domain. It extends and adds flexibility to the same-origin policy
          (SOP). However, it also provides potential for cross-domain attacks,
          if a website's CORS policy is poorly configured and implemented. CORS
          is not a protection against cross-origin attacks such as cross-site
          request forgery (CSRF).
        </p>
      </div>
      <div className="m-3">
        <h3 className="fw-bold">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h3>
        <p className="mt-4">
          Indeed, Firebase is a less technical and time-saving alternative to
          writing full-fledged backend code for dynamic apps. You might also
          want to consider leveraging this tool if you eventually wish to host
          and manage your app in the cloud. Being serverless, Firebase removes
          the need to worry about the technicalities of cloud server
          configuration.
        </p>
        <p>
          Alternatives of firebase are MongoDB,Oracle Database, Amazon RedShift, DataStax Enterprise, Redis Enterprise Cloud, DB2, Couchbase Server etc.
        </p>
      </div>
      <div className="m-3">
        <h3 className="fw-bold">How does the private route work?</h3>
        <p className="mt-4">
          Private Routes in React Router (also called Protected Routes) require
          a user being authorized to visit a route (read: page). So if a user is
          not authorized for a specific page, they cannot access it. The most
          common example is authentication in a React application where a user
          can only access the protected pages when they are authorized (which
          means in this case being authenticated). Authorization goes beyond
          authentication though. For example, a user can also have roles and
          permissions which give a user access to specific areas of the
          application.
        </p>
      </div>
      <div className="m-3">
        <h3 className="fw-bold">What is Node? How does Node work?</h3>
        <p className="mt-4">
          Node.js is a platform built on Chrome's JavaScript runtime for easily
          building fast and scalable network applications. Node.js uses an
          event-driven, non-blocking I/O model that makes it lightweight and
          efficient, perfect for data-intensive real-time applications that run
          across distributed devices.
        </p>
        <p>
          Node.js is an open-source backend javascript runtime environment. It
          is a used as backend service where javascript works on the server-side
          of the application. This way javascript is used on both frontend and
          backend. Node.js runs on chrome v8 engine which converts javascript
          code into machine code, it is highly scalable, lightweight, fast, and
          data-intensive. Working of Node.js: Node.js accepts the request from
          the clients and sends the response, while working with the request
          node.js handles them with a single thread. To operate I/O operations
          or requests node.js use the concept of threads. Thread is a sequence
          of instructions that the server needs to perform. It runs parallel on
          the server to provide the information to multiple clients. Node.js is
          an event loop single-threaded language. It can handle concurrent
          requests with a single thread without blocking it for one request.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
