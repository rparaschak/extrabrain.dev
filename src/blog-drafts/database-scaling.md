## What is our database scaling plan

`Vertical scaling is cheper that code complexity. Additional $500 for DB scaling is cheaper than extra developer.`

Our architecture is simple: autoscaled go backend which speaks to postgres, redis and a bunch of other services.
In the future we expect our bottleneck to be the database, but the first thing we do is DB vertical scaling, not extracting a service.
Our focus is simplicity. We add complexity as the last resort.

Database reads scaling roadmap:

- Optimizing indexes and data model
- Vertical scaling of the database
- Read Replica(s)
- Cache or Materialized Views
- Extract database

If you are a startup or scaleup, in most B2B scenarios you will barely get to Read Replica stage.

If we are scaling database writes, the roadmap is the following:

- Review data model
- Vertical scaling
- Partitioning
- Extract database

Rough and quick math:

- Given table with 2 indexes(slows down writes).
- db.r6g.xlarge. ~$350 per month
- With proper indexing and data model I would expect at least 10k reads and 10k writes per second.
  But do you imagine what is 10k reads/writes? That is a lot.
- Now, if I want to double up, I pay additional ~$350. Still cheaper than hiring additional engineer.
