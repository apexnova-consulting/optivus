const positions = [
  {
    title: "AI Implementation Specialist",
    type: "Full-time",
    location: "Remote",
    department: "Client Services",
  },
  {
    title: "Data Analyst",
    type: "Full-time",
    location: "Remote",
    department: "Analytics",
  },
  {
    title: "Client Success Manager",
    type: "Full-time",
    location: "Remote",
    department: "Client Services",
  },
]

export function Careers() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Join Our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're looking for passionate individuals who want to help organizations
            succeed with AI adoption.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none">
          {positions.map((position) => (
            <div
              key={position.title}
              className="flex flex-col gap-6 border-t border-gray-900/10 pt-8"
            >
              <div>
                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                  {position.title}
                </h3>
                <div className="mt-2 flex items-center gap-x-4 text-sm leading-6 text-gray-600">
                  <p>{position.type}</p>
                  <div className="h-1 w-1 rounded-full bg-gray-400" />
                  <p>{position.location}</p>
                  <div className="h-1 w-1 rounded-full bg-gray-400" />
                  <p>{position.department}</p>
                </div>
              </div>
              <button
                type="button"
                className="rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 w-fit"
              >
                Apply now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}