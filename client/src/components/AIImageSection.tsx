import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function AIImageSection() {
  const { data, isLoading } = useQuery({
    queryKey: ["/api/generate-image"],
    queryFn: async () => {
      const res = await fetch("/api/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: "A modern workspace with multiple monitors displaying code and AI models, sunlight streaming through windows, creating an aesthetically pleasing atmosphere",
        }),
      });
      return res.json();
    },
  });

  if (isLoading) {
    return <Skeleton className="w-full h-64 rounded-lg" />;
  }

  return (
    <Card className="overflow-hidden">
      <img
        src={data?.url || "https://images.unsplash.com/photo-1542831371-29b0f74f9713"}
        alt="AI Generated Workspace"
        className="w-full h-64 object-cover"
      />
    </Card>
  );
}
