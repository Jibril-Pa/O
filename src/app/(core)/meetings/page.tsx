import { Suspense } from 'react';
import { Copy, Plus, Calendar } from "lucide-react";
import CreateMeetingPage from '@/components/createMeeting/CreateMeetingPage';
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export default function MeetPage() {
    return (
        <div>
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-4xl font-bold">Meetings</h1>
                    <p>Manage your upcoming and past meetings</p>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="default" size="lg" className="rounded-lg">
                            <Plus />
                            New Meeting
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="w-[95vw] max-w-4xl max-h-[85vh] overflow-y-auto flex">
                        <CreateMeetingPage />
                    </DialogContent>
                </Dialog>
            </div>
            <Tabs defaultValue="upcoming" className="mt-6">
                <TabsList className="w-full">
                    <TabsTrigger value="upcoming" className="flex-1">
                        Upcoming
                    </TabsTrigger>
                    <TabsTrigger value="past" className="flex-1">
                        Past
                    </TabsTrigger>
                    
                </TabsList>
                <TabsContent value="upcoming">
                    <div className="border border-gray-500 rounded-lg p-4 mt-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold">Meeting Title - will be dynamic</h3>
                            <div className="flex items-center gap-2">Confirmed</div>
                        </div>
                        <div className="flex items-center mt-4">
                            Meeting Description - will be dynamic
                        </div>

                    </div>
                </TabsContent>
                <TabsContent value="past">
                    <div>Past</div>
                </TabsContent>
            </Tabs>
        </div>
    );
} 