import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default function BlogPostRedirect({ params }) {
  redirect(`/blogs/${params.slug}`);
}
