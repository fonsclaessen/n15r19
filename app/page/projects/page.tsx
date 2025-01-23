"use client";

import { useEffect } from "react";
import useStoreTracker from "'lib/trackerStore'";

import { Button } from "'components/ui/button'";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "'components/ui/card'";
import TitlePage from "'components/TitlePage'";
import CustomDataTable from "'components/CustomDataTable'";

function ProjectsPage() {
  const user = useStoreTracker((state) => state.user);
  const fetchUserTracker = useStoreTracker((state) => state.fetchUserTracker);

  useEffect(() => {
    fetchUserTracker(2); // Assuming userId is 2 for demonstration
  }, [fetchUserTracker]);

  return (
    <>
      <TitlePage title="Projects" description="projects and issues list." />
      <Card className="mt-10 border-dashed">
        <CardContent>
          <center>
            <CardHeader>
              <CardTitle className="font-bold">{`Hier komt een tabel`}</CardTitle>
              <CardDescription className="text-slate-300">
                Hier komt de table : {user?.userName}
                <CustomDataTable user={user} />
              </CardDescription>
            </CardHeader>
            <Button asChild>
              <a href="https://ui.shadcn.com/">Componenten van Shadcn UI</a>
            </Button>
          </center>
        </CardContent>
      </Card>
    </>
  );
}

export default ProjectsPage;
