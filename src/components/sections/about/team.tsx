const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    bio: "Former Head of AI Implementation at Fortune 500 companies",
  },
  {
    name: "David Rodriguez",
    role: "Head of Analytics",
    bio: "15+ years experience in data science and analytics",
  },
  {
    name: "Michelle Park",
    role: "Client Success Lead",
    bio: "Specialized in enterprise software adoption",
  },
]

export function Team() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We bring together experts in AI implementation, data analytics, and
            organizational change to help you succeed.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {team.map((person) => (
            <li key={person.name}>
              <div className="flex flex-col gap-6">
                <div className="relative h-52 w-full overflow-hidden rounded-2xl bg-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-base leading-7 text-blue-600">
                    {person.role}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {person.bio}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}