import { TextAreaFieldWithRenderFields } from "@/utils/type";
import React from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

const CustomTextarea = ({
  control,
  name,
  className,
  label,
  cols,
  rows,
  disabled,
  placeholder,
  defaultValue,
  cns,
}: TextAreaFieldWithRenderFields) => {
  return (
    <FormField
      control={control}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      name={name as any}
      render={(renderField) => {
        const { field } = renderField;
        return (
          <div className={cn("space-y-2 w-full", className)}>
            <FormItem className="w-full">
              <FormLabel className={cn(cns?.label)}>{label}</FormLabel>
              <Textarea
                className={cn(
                  "border-gray-300 border w-full",
                  cns?.input,
                  className
                )}
                {...field}
                cols={cols}
                rows={rows}
                disabled={disabled}
                placeholder={placeholder}
                onChange={field.onChange}
                defaultValue={defaultValue}
              />
              <FormMessage />
            </FormItem>
          </div>
        );
      }}
    />
  );
};

export default CustomTextarea;
