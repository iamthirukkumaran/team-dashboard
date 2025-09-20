import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import TabsSection from "./TabsSection";
import { Member } from "../data/members";

type Props = {
  member: Member | null;
  onClose: () => void;
};

export default function MemberDetailDialog({ member, onClose }: Props) {
  return (
    <Dialog open={!!member} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{member?.name}</DialogTitle>
        </DialogHeader>
        {member && <TabsSection member={member} />}
      </DialogContent>
    </Dialog>
  );
}
