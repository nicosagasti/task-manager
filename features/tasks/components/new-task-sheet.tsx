import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, } from "@/components/ui/sheet";
import { useNewTask } from "@/features/tasks/hooks/use-new-taks";
import { TaskForm } from "./task-form";
import { insertTaskSchema } from "@/database/schema";
import { z } from "zod";
import { useCreateTask } from "../api/use-create-task";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const formSchema = insertTaskSchema.pick({
    name: true,
});

type FormValues = z.input<typeof formSchema>;

export const NewTaskSheet = () => {
    const { isOpen, onClose } = useNewTask();

    const mutation = useCreateTask();

    /* FIXME: doesnt succesfully submit task */
    const onSubmit = (values: FormValues) => {
        mutation.mutate(values, {
            onSuccess: () => {
                onClose();
            }
        });
    };

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="space-y-4">
                <SheetHeader>
                    <SheetTitle>
                        New Task
                    </SheetTitle>
                    <SheetDescription>
                        Create a new Task
                    </SheetDescription>
                </SheetHeader>

                <TaskForm
                    onSubmit={onSubmit}
                    disabled={mutation.isPending}
                    defaultValues={
                        {
                            name: ""
                        }
                    }
                />

            </SheetContent>
        </Sheet >
    );
};