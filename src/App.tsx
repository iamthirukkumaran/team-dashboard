import { useMemo, useState } from "react";
import { members, Member } from "./data/members";
import MemberCard from "./components/MemberCard";
import SearchFilter from "./components/SearchFilter";
import MemberDetailDialog from "./components/MemberDetailDialog";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";

export default function App() {
  const [query, setQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [selected, setSelected] = useState<Member | null>(null);

  const roles = useMemo(
    () => ["All", ...Array.from(new Set(members.map((m) => m.role)))],
    []
  );

  const filtered = useMemo(() => {
    return members.filter((m) => {
      const matchesName = m.name.toLowerCase().includes(query.toLowerCase());
      const matchesRole = roleFilter === "All" || m.role === roleFilter;
      return matchesName && matchesRole;
    });
  }, [query, roleFilter]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Team Dashboard</h1>
          <Button
            onClick={() =>
              document.documentElement.classList.toggle("dark")
            }
          >
            Toggle Dark
          </Button>
        </header>

        <Card className="mb-6 p-4">
          <SearchFilter
            query={query}
            setQuery={setQuery}
            roleFilter={roleFilter}
            setRoleFilter={setRoleFilter}
            roles={roles}
          />
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((m) => (
            <MemberCard key={m.id} member={m} onSelect={setSelected} />
          ))}

          {filtered.length === 0 && (
            <Card>
              <p>No members match your search.</p>
            </Card>
          )}
        </div>

        <MemberDetailDialog member={selected} onClose={() => setSelected(null)} />

        <footer className="mt-8 text-sm text-slate-500">
          Built with React + Vite + Shadcn/UI
        </footer>
      </div>
    </div>
  );
}
