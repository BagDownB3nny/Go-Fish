import React, { useEffect, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { FishSpecies, UserCaughtFishes } from "../types/fish.types";
import { fishesToDropdownItems } from "../utilities/fishesToDropdownItems";

const BaitSelector: React.FC<{
    options: UserCaughtFishes;
    bait: string;
    setBait: React.Dispatch<React.SetStateAction<string>>;
}> = ({ options, bait, setBait }) => {
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState(fishesToDropdownItems(options));

    useEffect(() => {
        setItems(fishesToDropdownItems(options));
    }, [options]);

    // useEffect(() => {
    //     console.log(items);
    // }, [items]);

    return (
        <DropDownPicker
            open={open}
            value={bait}
            items={items}
            setOpen={setOpen}
            setValue={setBait}
            setItems={setItems}
        />
    );
};

export default BaitSelector;
