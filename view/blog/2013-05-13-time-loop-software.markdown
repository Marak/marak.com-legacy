# Time Loop Software

What if it were possible to write software capable of time travel? What if we could write software that was able to retrieve results from a computation solved sometime in the near future? What would this software look like? What problems could be solved?

[Time loop logic](http://en.wikipedia.org/wiki/Novikov_self-consistency_principle#Time_loop_logic) is a hypothetical system of computation that exploits the [Novikov self-consistency principle](http://en.wikipedia.org/wiki/Novikov_self-consistency_principle). In this system the computer is able to send the result of a computation backwards through time and rely upon the self-consistency principle to force the sent result to be correct. This futuristic concept might seem impossible now but I'd imagine trying to explain nuclear fission to a 3rd century blacksmith would seem equally impossible.

## Writing time loop software

Building on the concept of time loop logic we are able to implement theoretical programming constructs to help better understand the concept of time travel in software. In the following examples we demonstrate what a time loop logic program might look like.

### An event loop

In the follow examples we'll be using the JavaScript programing language. JavaScript provides a single thread of execution for code to run in. The JavaScript virtual machine is constantly running an event loop. Each tick of this event loop represents a single cycle of code execution. Once this cycle is completed the next tick in the event loop will occur. In the popular [Node.js](http://nodejs.org) framework [an API is provided](http://nodejs.org/api/process.html#process_process_nexttick_callback) to defer the execution of a block of code until the nextTick of the event loop occurs.

#### node.js process.nextTick() example

```
function foo() {
  console.log('foo');
}

process.nextTick(foo);
console.log('bar');
```

This will output:

```
bar
foo
```

The same effect of `process.nextTick` can also be achieved using JavaScript's setTimeout command

```
setTimeout(foo, 0);
```

#### node.js process.prevTick() example

Now let's imagine that instead of deferring a line of code until the next tick of the event loop we could instead push that code *backwards* to the *previous* tick of the event loop.

```
function foo() {
  console.log('foo');
}

console.log('bar');
process.prevTick(foo);
```

Outputs:

```
foo
bar
```

The same effect of `process.prevTick` can also be achieved using setTimeout with a negative value

```
setTimeout(foo, -1);
```

Since all we are doing is logging a simple string to the console, this is a contrived example. However; building on the concept of `process.prevTick` we can begin to implement more complex time loop programs.

## Brute force cracking with time loops

Let's assume a simple [brute-force search](http://en.wikipedia.org/wiki/Brute-force_search) password cracking scenario. Imagine there is a login function which expects a password. We have access to a very large word dictionary in which our cracking software will sequentially attempt logins using every word in the dictionary as a password until a match is found.

Here is the code for our brute-force program

*Note: It's important to remember that Novikov's self-consistency principle guarantees that the sequence of events generating the paradox in the following code has zero probability.*

<script src="https://gist.github.com/Marak/5566478.js"></script>

## Prime Factors with time loops

Using time-loop logic  prime factors can be calculated in polynomial time.

<script src="https://gist.github.com/Marak/3967740.js"></script>

## Zero-lag / Instant Communication

The theoretical application of time-loop logic is endless. Imagine a time-loop based communication protocol. This would mean zero millisecond latency. Imagine gaming, video broadcasting, and file sharing with instantaneous transfer and zero lag. Through exploiting self-consistency we know that data will be sent in the immediate future ( since the data has begun transferring from the source ) and that eventually the transmission will arrive at it's destination. As long as the data will eventually be received, we are able to send the result back from the future into the immediate present, removing the notion of latency or lag.

## Time Loop Logic and Novikov's Self-Consistency Principle

How is it actually possible to program a time loop? Based on the self-consistency principle and continuing advancements in quantum entanglement these types of mind-bending constructs are not very far away. It's very possible we'll see this type of software actively being developed within the next hundred years.

Time loop logic was first written about by [Hans Moravec](http://en.wikipedia.org/wiki/Hans_Moravec) who is best known for his work in robotics and artificial intelligence at Carnegie Mellon University. You can find Hans' original paper from 1991, "Time Travel and Computing", here: http://www.frc.ri.cmu.edu/users/hpm/project.archive/general.articles/1991/TempComp.html. I recommend reading the entire paper.

What we know from [general relativity](https://en.wikipedia.org/wiki/Closed_timelike_curve#General_relativity) is that at a quantum level backwards time-travel is mathematically possible in certain solutions containing [closed timelike curves](http://en.wikipedia.org/wiki/Closed_timelike_curve). A closed timelike curve is a [world-line](http://en.wikipedia.org/wiki/World_line) in a [Lorentzian manifold](http://en.wikipedia.org/wiki/Lorentzian_manifold#Lorentzian_manifold). 

Closed timelike curves ( CTCs ) pose a problem for physicists. The existence of CTCs introduces the notion of time travel being possible. If time travel is possible, we have now introduced the notion of [time travel paradoxes](http://en.wikipedia.org/wiki/Grandfather_paradox) which can violate <a href="http://en.wikipedia.org/wiki/Causality_(physics)">causality</a>. Since it's generally accepted that we cannot violate causality in our universe we must be able to explain how closed time-like curves can exist.

In his self-consistency principle Novikov asserts that if an event exists that would give rise to a paradox, or to any "change" to the past whatsoever, then the probability of that event is zero. In short, it says that it is impossible to create time travel paradoxes. You can find the original paper here: http://authors.library.caltech.edu/3737. I recommend starting with reading the [history of the principle](http://en.wikipedia.org/wiki/Novikov_self-consistency_principle#History_of_the_principle).

# A somewhat puzzling debugging session

In order for time loop logic to return an answer instantaneously, we *must* ensure that the problem will run long enough into the future to *actually* calculate the result. If a problem takes sixty seconds to solve, the program must run for at least sixty seconds. Time-loop logic does *not* violate causality. We are able to retrieve the answer instantly because we have committed to spending sixty seconds in the future calculating the answer and sending it back.

This turns debugging time-loop logic into somewhat of an impossibility. Any bugs in a time loop indicate that sometime in the future a problem has occurred. **This event may or may not be related to software.** 

Imagine a computer that utilized a time loop to brute force crack passwords ( as our code posted above did). I turn the machine on and request it cracks the password. The program doesn't work. Frustrated, I turn off the machine and complain to my co-worker Josh.

Josh turns on the machine and requests the password. The software works instantly cracking the password in under 1ms.

Bewildered, I ask Josh why the machine worked for him but not for me.

Josh replies, "It's actually quite simple. Using that computer it's going to take approximately 400 hours to brute force the password. After that 400 hours the CPU must recursively return the cracked password back in time until it reaches right now. I was able to get the answer instantly because I have decided to not turn this computer off for another 399 hours and 59 minutes. Simply put, you turned off the computer too quickly"

*The consequences of unplugging the computer*