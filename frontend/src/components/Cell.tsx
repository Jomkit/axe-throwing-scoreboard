function Cell({score}: { score: number }) {
  return (
    <button className='bg-amber-500 p-8 border border-black focus:outline-2 outline-white'>{ score }</button>
  )
}

export default Cell