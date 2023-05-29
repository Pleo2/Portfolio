export default function Title({ section }) {
  return (
    <>
      <h2 className='text-3xl mt-8 mb-6 font-display text-zinc-300 md:text-5xl lg:text-left lg:mt-14 xl:text-left'>{section}</h2>
      <div className='w-full m-auto h-px bg-zinc-800'></div>
    </>
  )
}
