import { StringEnum } from "./StringEnum.js";

const ConnectionType = new StringEnum([
    "production",
    "tests",
    "mockTests"
]);

export { ConnectionType }