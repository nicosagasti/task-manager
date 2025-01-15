import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, } from "@/components/ui/sheet";
import { useNewTask } from "@/features/tasks/hooks/use-new-taks";


export const NewTaskSheet = () => {
    const { isOpen, onClose } = useNewTask();

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
            </SheetContent>
        </Sheet >
    );
};