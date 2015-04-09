Lower Dash
====

A lower level implementation of lodash.

Why?
---

I'm exploring how node & C++ connect together, I'm using the idea of "replacing lodash (or underscore) with C++" as a programming excercise, then performance testing as I go.  If I find some benefit to the community along the way I'll share it but I expect it will be a learning experience which is then thrown away.

Surely C++ will be faster?
---

Not nesseserily, it depends how appropriate JS or C++ is for the job as well as how well the code's written in each language.  For example my first performance test results looked like this:

````shell
--------------
perf testing lodash function
took 1.275 seconds
--------------
perf testing lowerdash object
took 1.727 seconds
--------------
````

That's what happens when you compare well-crafted JS to dodgy, hacked, first-attempt C++.  But it's all a learning experience.

Why's it such crap C++?
---

This is my playground to learn C++, if you want to point things out which could be improved feel free to use the issues but generally I'm considering this my private space (in a public repo because it's free and I can link to)

