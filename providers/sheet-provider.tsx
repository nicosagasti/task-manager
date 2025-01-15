"use client";

import { useMountedState } from "react-use";

import { NewTaskSheet } from "@/features/tasks/components/new-task-sheet";

export const SheetProvider = () => {
    const isMounted = useMountedState();

    if (!isMounted) return null;

    return (
        <>
            <NewTaskSheet />
        </>
    );
};
