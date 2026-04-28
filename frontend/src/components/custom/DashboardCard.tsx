import { MoreVertical, Layout } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface DashboardCardProps {
  name: string;
  updatedAt: string;
}

export const DashboardCard = ({ name, updatedAt }: DashboardCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">
      {/* Visual Preview Area */}
      <CardContent className="h-40 bg-slate-100 flex items-center justify-center border-b">
        <Layout className="w-12 h-12 text-slate-300 group-hover:text-slate-400 transition-colors" />
      </CardContent>
      
      <CardFooter className="p-4 flex justify-between items-start">
        <div className="space-y-1">
          <h3 className="font-semibold text-sm truncate w-40">{name}</h3>
          <p className="text-xs text-slate-500 font-medium">
            Opened {new Date(updatedAt).toLocaleDateString()}
          </p>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreVertical className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};