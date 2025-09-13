import { Metadata } from "next"
import { MainLayout } from "@/components/layout/main-layout"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog - Optivus",
  description: "Insights and best practices for technology adoption and ROI measurement",
}

const posts = [
  {
    id: 1,
    title: "5 Key Metrics for Measuring AI Adoption Success",
    description: "Learn the essential metrics that indicate successful AI implementation and adoption in your organization.",
    author: "Sarah Chen",
    role: "Head of Analytics",
    date: "September 10, 2025",
    category: "Adoption Metrics",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The ROI of Change Management: A Data-Driven Approach",
    description: "Discover how to measure and maximize the return on investment of your change management initiatives.",
    author: "Michael Rodriguez",
    role: "Change Management Lead",
    date: "September 8, 2025",
    category: "ROI",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Behavioral Science in Technology Adoption",
    description: "Understanding how behavioral science principles can accelerate technology adoption in the workplace.",
    author: "Dr. Emily Watson",
    role: "Behavioral Scientist",
    date: "September 5, 2025",
    category: "Behavioral Science",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Creating Effective Technology Training Programs",
    description: "Best practices for developing training programs that drive successful technology adoption.",
    author: "James Foster",
    role: "Learning & Development",
    date: "September 3, 2025",
    category: "Training",
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "The Hidden Costs of Poor Technology Adoption",
    description: "Explore the unexpected ways that low adoption rates impact your organization's bottom line.",
    author: "Lisa Thompson",
    role: "ROI Specialist",
    date: "September 1, 2025",
    category: "Cost Analysis",
    readTime: "4 min read",
  },
]

export default function BlogPage() {
  return (
    <MainLayout>
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Insights & Resources
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Expert insights, best practices, and practical advice for optimizing technology adoption and measuring ROI.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {posts.map((post) => (
            <Card key={post.id} className="flex flex-col overflow-hidden">
              <CardHeader>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {post.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-optivus-light px-3 py-1.5 font-medium text-gray-600 hover:bg-optivus-light/60 dark:bg-optivus-dark dark:text-gray-300">
                    {post.category}
                  </span>
                </div>
                <CardTitle className="mt-4 text-xl font-bold">
                  <Link href={`/blog/${post.id}`} className="hover:text-optivus-blue">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="mt-4">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {post.author}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">{post.role}</p>
                  </div>
                  <div className="ml-auto text-sm text-gray-500">
                    {post.readTime}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </MainLayout>
  )
}
