const Heading = ({headingText}) => {
  return (
    <h1 className="flex h-20 justify-center items-center mt-10 mb-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400 h-20">{headingText}</span></h1>
  )
}

export default Heading