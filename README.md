# Cool Cats Solidity Test

This repo contains a number of mistakes and places where improvements can be made. Please made any adjustments you see fit.
We have deliberately made some very silly mistakes and simple things like file names might be wrong or inconsistent.

### ERC1155SupplyCC

Why was this file used and not used directly from the OpenZeppling library?

The file is an extension of ERC1155 and customized to work with the master contracts. like the addition of a mapping that tracks token id to \_totalSupply.
A view functions totalSupply, that returns the total amount of token in a given id.
An exists function.
A \_beforeTokenTransfer function that overrides the original function from the base contract.

### Claim()

Please adjust the claim function so that an address can only claim once per day.

## Unit Tests

At Cool Cats we write unit tests for 100% coverage and for as many edge cases as we can think of. Please do the same here.

## Deployment Script/Task

Please create a deployment script or task. Which ever you feel is most appropriate
