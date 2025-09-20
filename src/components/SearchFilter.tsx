import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Users } from "lucide-react";
import { roles } from "@/data/members";

interface SearchFilterProps {
  searchTerm: string;
  selectedRole: string;
  onSearchChange: (value: string) => void;
  onRoleChange: (value: string) => void;
}

export const SearchFilter = ({
  searchTerm,
  selectedRole,
  onSearchChange,
  onRoleChange,
}: SearchFilterProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 mb-12 animate-fade-in">
      {/* Search Input */}
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-6 h-6" />
        <Input
          type="text"
          placeholder="Search team members..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-14 h-14 text-lg rounded-xl border-2 border-border/70 focus:ring-4 focus:ring-primary/40 corporate-input"
        />
      </div>

      {/* Role Filter */}
      <div className="relative min-w-[240px]">
        <Select value={selectedRole} onValueChange={onRoleChange}>
          <SelectTrigger className="h-14 text-lg rounded-xl border-2 border-border/70 focus:ring-4 focus:ring-primary/40 corporate-input">
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-3 text-muted-foreground" />
              <SelectValue placeholder="Filter by role" />
            </div>
          </SelectTrigger>
          <SelectContent className="rounded-xl shadow-corporate-lg text-lg">
            {roles.map((role) => (
              <SelectItem key={role} value={role} className="text-base py-3">
                {role}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};