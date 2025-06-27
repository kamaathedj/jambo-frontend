

type Props = {
    title:string
}

export default function ButtonComponent({title}: Props) {
  return (
    <button className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-2 rounded-lg shadow">
    {title}
  </button>
  )
}