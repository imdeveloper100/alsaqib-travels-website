import GroupsPageContent from "@/app/components/GroupPageContent";
import { notFound } from "next/navigation";
import { destinations } from "@/app/lib/data";

export async function generateStaticParams() {
  return destinations.map((dest) => ({
    slug: dest.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    return {
      title: "Group Not Found",
    };
  }

  return {
    title: `${destination.name} - Al-Saqib Travels`,
    description: destination.description,
  };
}

export default async function GroupPage({ params }) {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    notFound();
  }

  return (
    <>
      <GroupsPageContent groupId={destination.id} groupName={destination.name} />
    </>
  );
}
