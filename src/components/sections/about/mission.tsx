export function Mission() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We believe that AI tools should deliver measurable value to every
            organization. Our mission is to help companies transform AI investments
            into tangible business outcomes through data-driven adoption
            strategies.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
          <div className="relative pl-9">
            <dt className="inline font-semibold text-gray-900">
              <div className="absolute left-1 top-1 h-5 w-5 text-blue-600">•</div>
              Measure What Matters
            </dt>
            <dd className="inline">
              {" "}
              Track real usage, adoption rates, and time savings to quantify the
              true impact of your AI investments.
            </dd>
          </div>
          <div className="relative pl-9">
            <dt className="inline font-semibold text-gray-900">
              <div className="absolute left-1 top-1 h-5 w-5 text-blue-600">•</div>
              Drive Adoption
            </dt>
            <dd className="inline">
              {" "}
              Use data-driven insights to identify barriers and accelerate tool
              adoption across your organization.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}