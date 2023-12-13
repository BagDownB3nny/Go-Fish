import React, { useEffect, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { FishSpecies, UserCaughtFishes } from "../types/fish.types";
import { fishesToDropdownItems } from "../utilities/fishesToDropdownItems";

const BaitSelector: React.FC<{ options: UserCaughtFishes }> = ({ options }) => {
    console.log(options);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(fishesToDropdownItems(options));

    useEffect(() => {
        setItems(fishesToDropdownItems(options));
    }, [options]);

    useEffect(() => {
        console.log(items);
    }, [items]);

    return (
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
        />
    );
};

export default BaitSelector;
