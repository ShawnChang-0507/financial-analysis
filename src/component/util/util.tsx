import { string } from "prop-types";

export class Util {
    createEntity = () => {
        return {
            name: string,
            data: [],
        }
    }
}