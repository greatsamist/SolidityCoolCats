import { Milk, ItemFactory } from "../typechain-types";
import { deployments, ethers } from "hardhat";
import { assert, expect } from "chai";
import { moveTime } from "../utils/move-time";

describe("Test itemFactory", async () => {
  const mintAccount = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199";
  const userSigner = await ethers.getSigner(mintAccount);
  let milk: Milk;
  let itemFactory: ItemFactory;

  beforeEach(async () => {
    await deployments.fixture(["all"]);
    milk = await ethers.getContract("Milk");
    itemFactory = await ethers.getContract("ItemFactory");
  });

  it("mint, deposit and the withdraw", async () => {
    // mint 100 tokens to user
    await milk.mint(mintAccount, 100);
    expect(await milk.balanceOf(mintAccount)).to.equal(100);
  });
});
