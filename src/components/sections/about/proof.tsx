export function Proof() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Proven Results
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Real Impact, Measurable Outcomes
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our clients consistently achieve significant improvements in AI tool
            adoption and ROI through our data-driven approach.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col items-center">
              <dt className="text-4xl font-bold leading-7 text-blue-600">85%</dt>
              <dd className="mt-4 text-base leading-7 text-gray-600 text-center">
                Average increase in tool adoption within first 90 days
              </dd>
            </div>
            <div className="flex flex-col items-center">
              <dt className="text-4xl font-bold leading-7 text-blue-600">3.2x</dt>
              <dd className="mt-4 text-base leading-7 text-gray-600 text-center">
                Average ROI improvement after implementation
              </dd>
            </div>
            <div className="flex flex-col items-center">
              <dt className="text-4xl font-bold leading-7 text-blue-600">92%</dt>
              <dd className="mt-4 text-base leading-7 text-gray-600 text-center">
                Client satisfaction rate with measurable outcomes
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}