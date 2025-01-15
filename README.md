# JavaScript Loop Variable Scope Issue

This repository demonstrates a subtle bug in JavaScript related to the scope of variables declared within loops.  Specifically, when a `break` statement is used to exit a loop prematurely, the loop variable's value might still be accessible outside the loop, leading to unexpected behavior or hard-to-debug errors.

## The Bug
The `bug.js` file contains a `while` loop that iterates until a certain condition is met.  A `break` statement is used to exit the loop early. The problem lies in the unexpected persistence of the loop counter variable's value outside the loop's scope.

## The Solution
The `bugSolution.js` file provides a solution to this problem. Instead of relying on the loop variable's state after the loop, the solution utilizes better practices to avoid this potential issue.

## How to Reproduce
1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js` to see the original buggy behavior.
4. Run `node bugSolution.js` to see the corrected behavior.

This example highlights the importance of understanding JavaScript's variable scoping and loop behavior to avoid creating unexpected and potentially difficult-to-debug errors.