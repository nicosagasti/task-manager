// import { UserButton } from "@clerk/nextjs";


// import { useGetTasks } from "@/features/tasks/api/use-get-tasks";

// export default function Home() {
//   const { data: tasks, isLoading } = useGetTasks();

//   if (isLoading) {
//     return (
//       <div>
//         Loading...
//       </div>);
//   }

//   return (
//     <div>
//       {/* <UserButton afterSignOutUrl="/"/> */}
//       {tasks?.map((task) => (
//         <div key={task.id}>
//           {task.name}
//         </div>
//       ))}
//       Hello World!!
//     </div>
//   );
// }

"use client";

import { Button } from "@/components/ui/button";

import { useNewTask } from "@/features/tasks/hooks/use-new-taks";

export default function Home() {
  const { onOpen } = useNewTask();
  return (
    <div>
      <Button onClick={onOpen}>
        Add a task

      </Button>
    </div>
  );
}