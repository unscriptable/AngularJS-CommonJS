# AngularJS-CommonJS

> A sample module pattern for AngularJS.

Despite having an `angular.module` function, AngularJS doesn't actually provide
or promote any concept of JavaScript modules. The `angular.module` function is
actually just a way to create a scope container.  Sure, it has a second 
parameter that allows the developer to specify some related angular-module
instances, but it's very different.  `angular.module` does not help with 
depedency management, url resolution, or bundling.

A simple solution is to wrap the AngularJS code bits in _de facto_ JavaScript
modules such as AMD or CommonJS/node (or ES6 modules in the future).  Once
you have picked a module type, you then need to pick a module architectural
pattern.  

## A sample module architectural pattern

There are, of course, several possible patterns.  This project shows a pattern
I might choose if I were to create an AngularJS project.  I took one of the
sample projects on the [angular.org](http://angular.org) home page and 
"converted" it to node variant of the CommonJS module format.

Here are the details of my pattern:

### 1. Components

The module hierarchy (aka folder structure) is based on the identification
of components.  In this small project, I identified only two components: _app_
and _projects_.  The _app_ component is concerned with application-level
things while the _projects_ component is concerned with the display, 
manipulation, and handling of the _Projects_ data entities.

This component-based hierarchy is in contrast with *organization-by-file-type*
folder strategies where all controllers can be found in the `controllers`
folder and all templates can be found in a `templates` folder and all css
files can be found in a `css` folder and ... (you get the point, I hope).

A component-based hierarchy is superior to organization-by-file-type
for several reasons:

1. easier folder refactoring
2. easier reuse across projects
3. easier isolation for testing

If there were css stylsheets or language localization bundles included in the
AngularJS sample, I'd have put them into the _app_ and _projects_ folders, too.

### 2. Composition

Thanks to AngularJS's dependency injection pattern, it lends itself well
to compositional patterns.  AngularJS "modules" are well suited to acting
as a composition plan, of sorts.  Unfortunately, part of the composition is
delegated to the `$router` and I wasn't sure how to deal with this.  In the
current pattern, I just punted. Thus, part of the composition happens in the
module that creates the angular-module ("app/main"), and part of it happens
in the module that sets up the routes ("app/routes").  Ideally, all of the 
composition for a component would happen in a single file for better
maintenance and understandability.

## boot.js

boot.js is a yet-to-be-released JavaScript analog to Spring Boot.  It auto-
configures itself according to the bower and npm packages it discovers and
can be further configured via *boot.js extensions*.  The included bower.json
shows some possible boot.js extensions for AngularJS that could automatically
install required packages, automatically preload required scripts (without
blocking!), and automatically bundle these scripts at build time.

You could achieve a very similar pattern with 
[curl.js](https://github.com/cujojs/curl) and 
[cram.js](https://github.com/cujojs/cram), as well.  However, you would need to
create a `run.js` and manually maintain a CommonJS-based curl.js config.  Any
text templates would also need to use the "text!" plugin prefix.  The rest of
the pattern would be essentially identical.
