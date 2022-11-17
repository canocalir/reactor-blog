const Heading = ({headingText}) => {
  return (
    <h1 className="flex h-16 justify-center align-middle mt-14 mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400">{headingText}</span></h1>
  )
}

export default Heading