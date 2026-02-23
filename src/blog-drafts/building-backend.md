# Achieving quick development iterations for B2B SaaS scaleup

At startup/scaleup our main focus is development speed, we need to iterate fast, validate assumptions, rework features.
Our job is to test assumptions, improve what works, change or remove what doesnt.
When product found Product Market Fit, we want to scale and ensure our architecture has capabilities of doing that.
I am a believer of this - `quality of a system is characterized by how fast it can be changed`

What we are looking for when building backend:

**Simplicity** - Our goal is to keep system simple as long as we can. Simple systems scale better. Also, the less
cognitive load engineers have the more performant they are.

**Testability** - Quick iterations require significant changes. To not drawn in endless regressions we must heavily rely
on automated testing.

**Scalability** - We want to make sure our system scales together with customers base.

## What will we cover in this post

- Modular Monolith
- Code structure
- Business Logic
- Testing

## Abstraction

You won't find heavy abstractions in this topic. I am not a fan of abstractions, clean architecture, etc. Although I use some elements of it.
I am a fan of strong structure, testability and simplicity.
I value a low cognitive load, where I can read the code from the top to bottom, go to function definition by clicking a single button and use debugger to find a bug in minutes.
You always want to pick a level of abstraction that doesn't create friction.

For example, my modules use internal APIs directly, not through interface, and that is a deliberate decision.
Will I change that in the future? Probably not. Why?

- If I have to extract the module into a separate ~~micro~~service, I simply create an interface + client implementation. It will take hours. But why would I do that now?
- Testability. I cover that in the next section, but we heavily rely on integration testing. We minimize work with mocks and stubs. Therefore, we don't need abstraction for testing.

## Modular monolith

My default choice when speaking of backend architecture is Modular Monolith. I do not even consider anything else than
modular monolith for new projects. I do not see a reason why the team of 5–15 engineers need microservices.
Many think that monolith is bad and microservices are the way to go. But my experience shows otherwise.
You can build a monolith that is scalable and outperforms microservices.

Why Modular Monolith?

**Easy to Debug** - Simply use debugger and go through the code. There is no need playing with tracing and distributed
debugging.

**Frictionless Development** - Use CMD+Click and you are at the function definition. No need to git clone/pull other
project to see how it works.
No contract conflicts, no versioning hell.

**Simple Deployment** - Instead of orchestrating your services deployment, you deploy a single piece. Integration
testing is also much easier.

## Code Structure

### Modules

Module is a group of features. It owns the data, business logic, endpoints, jobs, events, anything related to a specific
feature.
In our project module structure looks like this

```
modules/[module]/
├── router.go           # Route definitions
├── handlers/           # REST Endpoints
├── usecases/           # Business logic
├── models/             # Domain models and DTOs
├── events/             # Event handlers
├── jobs/               # Background jobs
├── mcp/                # MCP Endpoints
├── testing/            # Test factories and data
└── errors/             # Business errors
```

Modules expose API that other modules can use.

### Modules Communication

Modules have two ways to communicate: Sync and Async.

**Sync** - Direct API call from another module. E.g. `Users.GetUserByIdBatch`. In microservices world it is usually done
through http or gRPC calls.
In modular monolith you communicate either through interface or directly. But that is whole another topic.

**Async** - Communication through events. Events represent something that already happened and other modules can react
to it.
E.g. `Users.UserCreated`. That way producer does not know anything about consumers and it decouples our modules.

`//TODO: Modules communication diagram`

### Modules Dependency

We avoid cyclic dependencies and keep our dependency graph clean.
Example from our system

```
CommunitiesSearch -> Reviews & Communities & SeekerProfile
Reviews -> Communities
SeekerProfile -> Communities
```

That way `CommunitiesSearch` can access APIs of `Reviews`, `Communities` and `SeekerProfile` modules.

`//TODO: Modules dependencies diagram`

### Package

Package - is our subsystems that modules can use. They know nothing about modules, but modules actively use pgk.
Example of pkg we have

```
pkg/
├── database
├── event-bus
├── cache
├── scheduled_jobs
├── google_maps_reviews
├── llm
├── ...
```

`//TODO: Modules on top of pgk diagram`

## Business Logic

### Usecases - our first-class citizens

We keep our business logic in units called usecases. Usecase represents business capability. E.g. `SearchCommunities` or ``
