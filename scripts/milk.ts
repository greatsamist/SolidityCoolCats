// import "@nomiclabs/hardhat-ethers";

import { Signer } from "ethers";
import { ethers } from "hardhat";

async function main() {
  const mintAccount = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199";
  const userSigner = await ethers.getSigner(mintAccount);
  const depositData =
    "0x0000000000000000000000000000000000000000000000008ac7230489e80000";
  await mint(mintAccount);
  await deposit(mintAccount, depositData);
  await withdraw(userSigner, mintAccount);
}

console.log("Calling the deposit function----------------");
export async function deposit(mintAccount: string, depositData: any) {
  const milk = await ethers.getContract("Milk");
  const milkDeposit = await milk.deposit(mintAccount, depositData);
  await milkDeposit.wait(1);

  const balance = await milk.balanceOf(mintAccount);
  console.log(
    "Balance after deposit:",
    Math.floor(Number(balance) / Math.pow(10, 18))
  );
}

console.log("Calling the withdraw function----------------");
export async function withdraw(userSigner: Signer, mintAccount: string) {
  const milk = await ethers.getContract("Milk");
  const milkWithdraw = await milk
    .connect(userSigner)
    .withdraw("20000000000000000000");
  await milkWithdraw.wait(1);
  const balance = await milk.balanceOf(mintAccount);
  console.log(
    "Balance after withdraw:",
    Math.floor(Number(balance) / Math.pow(10, 18))
  );
}

console.log("Calling the mint function----------------");
export async function mint(mintAccount: string) {
  const milk = await ethers.getContract("Milk");
  const milkMint = await milk.mint(mintAccount, "100000000000000000000");
  await milkMint.wait(1);
  console.log("Token successfully minted");

  const balance = await milk.balanceOf(mintAccount);
  console.log(
    "Balance after minting:",
    Math.floor(Number(balance) / Math.pow(10, 18))
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
