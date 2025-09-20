import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Member } from "@/data/members";
import { MapPin, Mail, Briefcase } from "lucide-react";

interface MemberCardProps {
  member: Member;
  onClick: () => void;
}

const getInitials = (name: string): string =>
  name.split(" ").map((n) => n[0]).join("").toUpperCase();

const getRoleColor = (role: string): string => {
  switch (role.toLowerCase()) {
    case "developer":
      return "bg-primary/15 text-primary border-2 border-primary/30";
    case "designer":
      return "bg-accent/30 text-accent-foreground border-2 border-accent/40";
    case "manager":
      return "bg-secondary/80 text-secondary-foreground border-2 border-secondary/50";
    default:
      return "bg-muted text-muted-foreground border-2";
  }
};

export const MemberCard = ({ member, onClick }: MemberCardProps) => {
  return (
    <Card
      className="card-hover hover-lift cursor-pointer animate-fade-in group corporate-card"
      onClick={onClick}
    >
      <CardContent className="p-7">
        <div className="flex items-start space-x-5">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
              {getInitials(member.name)}
            </div>
          </div>

          {/* Member Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold text-foreground truncate group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <Badge
                className={`px-3 py-1.5 rounded-lg font-medium text-sm ${
                  member.status === "Active" ? "status-active" : "status-inactive"
                }`}
              >
                {member.status}
              </Badge>
            </div>

            <div className="space-y-3">
              <Badge variant="outline" className={`px-4 py-1.5 rounded-lg text-sm ${getRoleColor(member.role)}`}>
                {member.role}
              </Badge>

              <div className="flex items-center text-base text-muted-foreground">
                <Mail className="w-5 h-5 mr-3" />
                <span className="truncate">{member.email}</span>
              </div>

              <div className="flex items-center text-base text-muted-foreground">
                <MapPin className="w-5 h-5 mr-3" />
                <span>{member.location}</span>
              </div>
            </div>

            {/* Projects count */}
            <div className="mt-5 flex items-center text-sm font-semibold text-muted-foreground">
              <Briefcase className="w-4 h-4 mr-2" />
              <span>{member.projects.length} active project{member.projects.length !== 1 ? "s" : ""}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};