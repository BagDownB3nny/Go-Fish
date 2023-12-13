export type FishSpecies = {
    name: string;
    description: string;
};

export type UserCaughtFishes = {
    [key: string]: CaughtFishDetails;
};

export type CaughtFishDetails = {
    description: string;
    count: number;
};