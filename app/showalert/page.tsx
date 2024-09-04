import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react";


const AlertPage = () => {

     return (
          <>
               <Alert className="items-center">
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                         You can add components and dependencies to your app using the cli.
                    </AlertDescription>
               </Alert>
          </>
     );
};

export default AlertPage;