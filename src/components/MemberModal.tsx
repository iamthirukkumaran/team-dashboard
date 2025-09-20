import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Member } from "@/data/members";
import { Mail, MapPin, Calendar, Briefcase, X } from "lucide-react";

interface MemberModalProps {
  member: Member | null;
  open: boolean;
  onClose: () => void;
}

const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const MemberModal = ({ member, open, onClose }: MemberModalProps) => {
  if (!member) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl animate-scale-in p-0 border-0">
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full p-2 bg-muted/80 hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          
          <DialogHeader className="bg-gradient-to-r from-primary/10 to-primary/5 p-6">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground font-bold text-2xl shadow-lg">
                {getInitials(member.name)}
              </div>
              <div className="flex-1">
                <DialogTitle className="text-3xl font-bold text-foreground mb-3">
                  {member.name}
                </DialogTitle>
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="text-base px-4 py-1.5 rounded-lg border-2">
                    {member.role}
                  </Badge>
                  <Badge
                    className={`text-base px-4 py-1.5 rounded-lg ${
                      member.status === "Active" ? "status-active" : "status-inactive"
                    }`}
                  >
                    {member.status}
                  </Badge>
                </div>
              </div>
            </div>
          </DialogHeader>

          <div className="p-6">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-2 h-12 mb-6">
                <TabsTrigger value="profile" className="text-base font-semibold">
                  Profile
                </TabsTrigger>
                <TabsTrigger value="projects" className="text-base font-semibold">
                  Projects ({member.projects.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-6">
                {/* Contact Information */}
                <Card className="corporate-card">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <Mail className="w-6 h-6 mr-3 text-primary" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center text-base">
                      <Mail className="w-5 h-5 mr-4 text-muted-foreground" />
                      <span className="font-medium">{member.email}</span>
                    </div>
                    <div className="flex items-center text-base">
                      <MapPin className="w-5 h-5 mr-4 text-muted-foreground" />
                      <span className="font-medium">{member.location}</span>
                    </div>
                    <div className="flex items-center text-base">
                      <Calendar className="w-5 h-5 mr-4 text-muted-foreground" />
                      <span className="font-medium">Joined {formatDate(member.joinDate)}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Bio */}
                <Card className="corporate-card">
                  <CardHeader>
                    <CardTitle className="text-xl">About</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="projects" className="space-y-6">
                <Card className="corporate-card">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <Briefcase className="w-6 h-6 mr-3 text-primary" />
                      Active Projects ({member.projects.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {member.projects.map((project, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-5 border-2 border-border rounded-xl hover:bg-accent/30 transition-all duration-200"
                        >
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center mr-4">
                              <Briefcase className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-semibold text-base">{project}</p>
                              <p className="text-sm text-muted-foreground">Active • Due in 2 weeks</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-sm px-3 py-1.5 rounded-md bg-success/20 border-success/30">
                            In Progress
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};