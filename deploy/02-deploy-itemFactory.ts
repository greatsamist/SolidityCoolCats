import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployItemFactory: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  // @ts-ignore
  const { getNamedAccounts, deployments } = hre;
  const { deploy, log, get } = deployments;
  const { deployer } = await getNamedAccounts();
  const MilkContract = await get("Milk");
  const uri = "";

  log("----------------------------------------------------");
  log("Deploying ItemFactoryContract...");

  const ItemFactoryContract = await deploy("ItemFactory", {
    from: deployer,
    args: [uri, MilkContract.address],
    log: true,
  });

  log(`ItemFactoryContract address: ${ItemFactoryContract.address}`);
};
export default deployItemFactory;
deployItemFactory.tags = ["all", "itemFactory"];
