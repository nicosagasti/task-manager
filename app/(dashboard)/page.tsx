// import { UserButton } from "@clerk/nextjs";

"use client";

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
export default function Home() {
  return (
    <div>
      Home Page
    </div>
  );
}