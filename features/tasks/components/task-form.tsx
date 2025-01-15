import { z } from "zod";
import { Trash } from "lucide-react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { insertTaskSchema } from "@/database/schema";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

const formSchema = insertTaskSchema.pick({
    name: true,
});

type FormsValues = z.input<typeof formSchema>;

type Props = {
    id?: string;
    defaultValues?: FormsValues;
    onSubmit: (values: FormsValues) => void;
    onDelete?: () => void;
    disabled?: boolean;
};

export const TaskForm = ({
    id,
    defaultValues,
    onSubmit,
    onDelete,
    disabled,
}: Props) => {
    const form = useForm<FormsValues>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultValues,
    });

    const handleSubmit = (values: FormsValues) => {
        onSubmit(values);
    };

    const handleDelete = () => {
        onDelete?.();
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-4 pt-4"
            >
                <FormField
                    name="name"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor={field.name}>
                                Name
                            </FormLabel>
                            <FormControl>
                                <Input
                                    disabled={disabled}
                                    placeholder="e.g. Buy milk"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button className="w-full" disabled={disabled}>
                    {id ? "Save changes" : "Create Task"}
                </Button>
                {!!id &&
                    (<Button
                        type="button"
                        className="w-full"
                        onClick={handleDelete}
                        disabled={disabled}
                        variant="outline"
                    >
                        <Trash className="size-4 mr-2" />
                        Delete Task
                    </Button>)
                }
            </form >
        </Form >
    );
}