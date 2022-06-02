import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployMilk: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  // @ts-ignore
  const { getNamedAccounts, deployments, network } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  log("----------------------------------------------------");
  log("Deploying MilkContract...");

  const MilkContract = await deploy("Milk", {
    from: deployer,
    args: ["Samuel", "SAM"],
    log: true,
  });

  log(`MilkContract address: ${MilkContract.address}`);
};
export default deployMilk;
deployMilk.tags = ["all", "milk"];
