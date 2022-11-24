import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="max-w-screen-lg mx-auto rounded-xl my-10 bg-yellow-50">
        <div>
          <h2 className="text-3xl font-serif bg-primary rounded-xl p-4">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <p className="p-4">
            There are four main types of state you need to properly manage in
            your React apps: <br />
            <strong>Local state :</strong> Local state is data we manage in one
            or another component. Local state is most often managed in React
            using the useState hook. <br />
            <strong>Global state: </strong> Global state is data we manage
            across multiple components. Global state is necessary when we want
            to get and update data anywhere in our app, or in multiple
            components at least. <br />
            <strong>Server state :</strong> Data that comes from an external
            server that must be integrated with our UI state. Server state is a
            simple concept, but can be hard to manage alongside all of our local
            and global UI state. <br />
            <strong>URL state: </strong>:Data that exists on our URLs, including
            the pathname and query parameters. URL state is often missing as a
            category of state, but it is an important one.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-serif bg-primary rounded-xl p-4">
            How does prototypical inheritance work?
          </h2>
          <p className="p-4">
            Prototypical inheritance allows us to reuse the properties or
            methods from one JavaScript object to another through a reference
            pointer function. All JavaScript objects inherit properties and
            methods from a prototype: Date objects inherit from Date.It is a
            method by which an object can inherit the properties and methods of
            another object. Traditionally, in order to get and set the
            [[Prototype]] of an object, we use Object. getPrototypeOf and
            Object.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-serif bg-primary rounded-xl p-4">
            What is a unit test? Why should we write unit tests?
          </h2>
          <p className="p-4">
            A unit test is a way of testing a unit - the smallest piece of code
            that can be logically isolated in a system. In most programming
            languages, that is a function, a subroutine, a method or property.
            The isolated part of the definition is important. Well-written unit
            tests act as documentation for your code. Any developer can quickly
            look at your tests and know the purpose of your functions. It
            simplifies the debugging process. Unit testing is an integral part
            of extreme programming.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-serif bg-primary rounded-xl p-4">
            React vs. Angular vs. Vue:
          </h2>
          <p className="p-4">
            <strong>React :</strong> React can be used as a UI library to render
            elements, without enforcing a specific project structure, and that's
            why it's not strictly a framework. React Elements are the smallest
            building blocks of React apps. They are more powerful than DOM
            elements because the React DOM makes sure to update them efficiently
            whenever something changes. <br />
            <strong>Angular: </strong> AngularJS, the original framework, is an
            MVC (Model-View-Controller)) framework. But in Angular 2, there's no
            strict association with MV*-patterns as it is also component-based.
            Projects in Angular are structured into Modules, Components, and
            Services. Each Angular application has at least one root component
            and one root module. <br />
            <strong>Vue JS :</strong>The Vue.js core library focuses on the View
            layer only. It's called a progressive framework because you can
            extend its functionality with official and third-party packages,
            such as Vue Router or Vuex, to turn it into an actual framework.{" "}
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
