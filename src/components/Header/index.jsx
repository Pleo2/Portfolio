import style from './animationHeader.module.css'

export default function Header() {
  return (
    <header className={`${style.header} absolute left-1/2 -translate-x-1/2 justify-center items-center h-1/2 w-full mt-1 text-center`}  >
      <div className={`${style.containerTitle} flex place-items-end justify-center`}>
        <h1 className="font-black text-7xl text-gray-100 font-display md:text-[10rem]">Pleo2</h1>
        <h2 className="font-black text-2xl text-gray-100 font-display md:text-6xl">Frontend Dev</h2>
      </div>
    </header>
  )
}
