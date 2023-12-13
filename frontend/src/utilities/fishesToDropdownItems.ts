import { UserCaughtFishes } from "../types/fish.types";

export const fishesToDropdownItems = (fishes: UserCaughtFishes) => {
    return Object.entries(fishes).map(([fishName, fishDetails]) => {
        return {
        label: `${fishName} (${fishDetails.count})`,
        value: fishName,
        };
    });
}
