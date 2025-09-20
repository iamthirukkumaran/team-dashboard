import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Member } from "../data/members";
import { Card } from "./ui/card";

type Props = {
  member: Member;
};

export default function TabsSection({ member }: Props) {
  return (
    <Tabs defaultValue="profile">
      <TabsList className="mb-4">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
      </TabsList>

      <TabsContent value="profile">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          {member.bio}
        </p>
        <p className="text-sm">
          <strong>Email:</strong>{" "}
          <a href={`mailto:${member.email}`} className="underline">
            {member.email}
          </a>
        </p>
        <p className="text-sm">
          <strong>Role:</strong> {member.role}
        </p>
        <p className="text-sm">
          <strong>Status:</strong> {member.status}
        </p>
      </TabsContent>

      <TabsContent value="projects">
        <div className="space-y-2">
          {member.projects.map((p) => (
            <Card key={p} className="p-3">
              {p}
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
