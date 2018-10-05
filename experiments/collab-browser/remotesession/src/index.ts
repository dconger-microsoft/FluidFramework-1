import { IChaincode } from "../../../../routerlicious/packages/runtime-definitions";
import { Store } from "../../../danlehen/store/src";
import { RemoteSession } from "./remotesession";

export { RemoteSession };

export async function instantiate(): Promise<IChaincode> {
    return Store.instantiate(new RemoteSession());
}
