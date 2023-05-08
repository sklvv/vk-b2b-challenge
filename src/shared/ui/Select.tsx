import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from "@mui/material";
import { FC } from "react";

interface ISelect {
    id: string;
    name: string;
    label: string;
    variants: string[];
    value: string;
    handler: (event: SelectChangeEvent<string>) => void;
}

const FormSelect: FC<ISelect> = ({
    label,
    variants,
    id,
    name,
    value,
    handler,
}) => {
    return (
        <FormControl>
            <InputLabel id={`${id}-label`}>{label}</InputLabel>
            <Select
                labelId={`${id}-label`}
                id={id}
                name={name}
                value={value}
                onChange={handler}
                label={label}
                required={true}
                defaultValue=""
            >
                {variants.map((el, index) => {
                    return (
                        <MenuItem key={index} value={el}>
                            {el}
                        </MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
};

export default FormSelect;
