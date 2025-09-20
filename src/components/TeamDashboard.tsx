import { useState, useMemo } from "react";
import { members, Member } from "@/data/members";
import { MemberCard } from "./MemberCard";
import { SearchFilter } from "./SearchFilter";
import { MemberModal } from "./MemberModal";
import { Users, TrendingUp, Target, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const TeamDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("All Roles");
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRole = selectedRole === "All Roles" || member.role === selectedRole;
      return matchesSearch && matchesRole;
    });
  }, [searchTerm, selectedRole]);

  const activeMembers = members.filter((m) => m.status === "Active").length;
  const totalProjects = members.reduce((acc, member) => acc + member.projects.length, 0);
  const completionRate = Math.round((activeMembers / members.length) * 100);

  const handleMemberClick = (member: Member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="corporate-heading-xl text-foreground mb-6">
            Team Dashboard
          </h1>
          <p className="corporate-text-large max-w-3xl mx-auto">
            Explore and manage our talented team members, their roles, and ongoing projects
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <Card className="animate-fade-in hover-lift corporate-card">
            <CardContent className="p-8 text-center">
              <Users className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h3 className="text-4xl font-extrabold text-foreground mb-2">{members.length}</h3>
              <p className="text-muted-foreground text-lg">Total Team Members</p>
            </CardContent>
          </Card>

          <Card className="animate-fade-in hover-lift corporate-card" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-success/20 rounded-full flex items-center justify-center shadow-inner">
                <Target className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-4xl font-extrabold text-foreground mb-2">{activeMembers}</h3>
              <p className="text-muted-foreground text-lg">Active Members</p>
            </CardContent>
          </Card>

          <Card className="animate-fade-in hover-lift corporate-card" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-8 text-center">
              <TrendingUp className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h3 className="text-4xl font-extrabold text-foreground mb-2">{totalProjects}</h3>
              <p className="text-muted-foreground text-lg">Active Projects</p>
            </CardContent>
          </Card>

          <Card className="animate-fade-in hover-lift corporate-card" style={{ animationDelay: "0.3s" }}>
            <CardContent className="p-8 text-center">
              <BarChart3 className="w-16 h-16 mx-auto mb-6 text-accent-foreground" />
              <h3 className="text-4xl font-extrabold text-foreground mb-2">{completionRate}%</h3>
              <p className="text-muted-foreground text-lg">Active Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <SearchFilter
          searchTerm={searchTerm}
          selectedRole={selectedRole}
          onSearchChange={setSearchTerm}
          onRoleChange={setSelectedRole}
        />

        {/* Results Summary */}
        <div className="mb-8">
          <p className="corporate-text text-lg">
            Showing <span className="font-bold text-foreground">{filteredMembers.length}</span> of{" "}
            <span className="font-bold text-foreground">{members.length}</span> team members
            {searchTerm && (
              <span className="font-semibold text-primary"> matching "{searchTerm}"</span>
            )}
            {selectedRole !== "All Roles" && (
              <span className="font-semibold text-primary"> in {selectedRole}</span>
            )}
          </p>
        </div>

        {/* Members Grid */}
        {filteredMembers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member, index) => (
              <div key={member.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <MemberCard member={member} onClick={() => handleMemberClick(member)} />
              </div>
            ))}
          </div>
        ) : (
          <Card className="text-center py-16 animate-fade-in corporate-card">
            <CardContent>
              <Users className="w-20 h-20 mx-auto mb-6 text-muted-foreground" />
              <h3 className="text-3xl font-bold text-foreground mb-4">
                No team members found
              </h3>
              <p className="corporate-text text-lg">
                Try adjusting your search terms or filters to find team members.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Member Detail Modal */}
        <MemberModal
          member={selectedMember}
          open={isModalOpen}
          onClose={handleModalClose}
        />
      </div>
    </div>
  );
};