import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

const setupContracts: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  // @ts-ignore
  const { getNamedAccounts, deployments } = hre;
  const { log } = deployments;
  const { deployer } = await getNamedAccounts();
  const milkContract = await ethers.getContract("Milk", deployer);
  const itemFactory = await ethers.getContract("ItemFactory", deployer);

  log("----------------------------------------------------");
  log("Setting up contracts for roles...");

  const depositorRole = await milkContract.DEPOSITOR_ROLE();
  const contractRole = await milkContract.CONTRACT_ROLE();
  const masterRole = await milkContract.MASTER_ROLE();
  const adminRole = await itemFactory.ADMIN_ROLE();

  const depositorRoleTx = await milkContract.grantRole(depositorRole, deployer);
  await depositorRoleTx.wait(1);
  const contractRoleTx = await milkContract.grantRole(contractRole, deployer);
  await contractRoleTx.wait(1);
  const masterRoleTx = await milkContract.grantRole(masterRole, deployer);
  await masterRoleTx.wait(1);
  const adminRoleTx = await milkContract.grantRole(adminRole, deployer);
  await adminRoleTx.wait(1);
};
export default setupContracts;
