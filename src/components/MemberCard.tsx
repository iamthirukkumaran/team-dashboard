import { Card } from "../components/ui/card"; // from shadcn/ui
import { Button } from "../components/ui/button";
import { Member } from "../data/members";
import { getInitials } from "../utils/helpers";

type Props = {
  member: Member;
  onSelect: (m: Member) => void;
};

export default function MemberCard({ member, onSelect }: Props) {
  return (
    <Card
      className="hover:shadow-md transition cursor-pointer p-4"
      onClick={() => onSelect(member)}
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold">
          {getInitials(member.name)}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{member.name}</h3>
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                member.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {member.status}
            </span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-300">
            {member.role}
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(member);
          }}
        >
          View
        </Button>
      </div>
    </Card>
  );
}
