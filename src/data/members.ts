export type Member = {
  id: number;
  name: string;
  role: string;
  status: "Active" | "Inactive";
  email: string;
  bio: string;
  projects: string[];
};

export const members: Member[] = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Developer",
    status: "Active",
    email: "alice@example.com",
    bio: "Frontend developer with 5 years of experience.",
    projects: ["Project Alpha", "Project Beta"],
  },
  {
    id: 2,
    name: "Bob Martin",
    role: "Designer",
    status: "Inactive",
    email: "bob@example.com",
    bio: "UX/UI designer passionate about clean design.",
    projects: ["Project Gamma"],
  },
  {
    id: 3,
    name: "Charlie Smith",
    role: "Manager",
    status: "Active",
    email: "charlie@example.com",
    bio: "Project manager ensuring smooth delivery.",
    projects: ["Project Delta", "Project Epsilon"],
  },
];
