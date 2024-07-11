import {type FieldValues,type FieldName,type Control,useWatch as useWatchReactHookForm} from "react-hook-form";

export function useWatch<TFieldValues extends FieldValues>(
    { name, control, defaultValue }: WatchOptions<TFieldValues>
): TFieldValues[FieldName<TFieldValues>] | undefined{
    const value = useWatchReactHookForm({
        name: name,
        control: control,
        defaultValue: defaultValue
    });

    return value;
}

type WatchOptions<TFieldValues extends FieldValues> ={
    name: FieldName<TFieldValues>;
    control: Control<TFieldValues>;
    defaultValue?: TFieldValues[FieldName<TFieldValues>];
}