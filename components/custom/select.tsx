"use client"
import { optionType, SelectFieldWithRenderFields } from "@/utils/type";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { cn } from "@/lib/utils";

const CustomSelect = (props: SelectFieldWithRenderFields) => {
  const [data, setData] = useState<optionType[]>([]);
  const [isFetchingData, setIsFetchingData] = useState<boolean>(true);
  const conditionalValue = props.conditionalOptions
    ? props.form?.watch(props.conditionalOptions.fieldName)
    : "";
  useEffect(() => {
    (async () => {
      if (!props?.options) return () => {};
      let options: optionType[] = [];
      try {
        options = await props.options();
      } catch (error) {
        console.log(error);
      }
      if (options.length === 0) {
        setData([{ label: `No ${props.name} Found`, value: " " }]);
        setIsFetchingData(false);
        return () => {};
      }
      setData(options);
      setIsFetchingData(false);
    })();
  }, [props]);
  useEffect(() => {
    (async () => {
      if (!props.conditionalOptions) return () => {};
      setIsFetchingData(true);

      const options = await props.conditionalOptions.fn(
        props.form?.getValues(props.conditionalOptions.fieldName)
      );
      const getCurrentValue = props.form?.getValues(props.name ?? "");
      if (!options.find((option) => option.value === getCurrentValue)) {
        props.form?.setValue(props.name, undefined);
      }
      if (!Array.isArray(options)) {
        console.error("props.options() did not return an array");
        setData([{ label: `No ${props.label} Found`, value: " " }]);
        return () => {};
      }
      if (options.length === 0) {
        setData([{ label: `No ${props.label} Found`, value: " " }]);
        setIsFetchingData(false);
        return () => {};
      }
      setData(options);
      setIsFetchingData(false);
    })();
  }, [
    conditionalValue,
    props.conditionalOptions,
    props.form,
    props.label,
    props.name,
  ]);
  return (
    <FormField
      control={props.control}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      name={props.name as any}
      render={({ field }) => (
        <FormItem
          className={cn(
            props.className,
            props.cns?.container,
            props.cns?.formItem
          )}
        >
          <FormLabel className={cn(props?.cns?.label)}>{props.label}</FormLabel>
          <Select
            onValueChange={(e) => {
              field.onChange(e);
              // eslint-disable-next-line @typescript-eslint/no-unused-expressions
              props.onChange && props.onChange(e);
            }}
            defaultValue={props.defaultValue ?? field.value}
            disabled={props.disabled}
          >
            <FormControl>
              <SelectTrigger
                className={cn("border border-gray-300", props.cns?.input)}
              >
                <SelectValue placeholder={props.placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {isFetchingData && <div className={"p-2"}>Loading...</div>}
              {data?.map((e, i) => (
                <SelectItem key={i} value={e.value}>
                  {e.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomSelect;
