import { REGION, ADDRESS, PORT, PATH } from "./constant";
import getURL from "./utils";

const region = REGION;
const url = getURL(ADDRESS, PORT, PATH);

export { url, region };
