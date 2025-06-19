import ButtonComponent from "./ButtonComponent"

export default function RightComponent() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">


<div>
  <h1 className="text-4xl md:text-4xl font-bold leading-tight">
    Jambo <span className="text-primary-500">games</span><br />
  </h1>
  <p className="text-gray-600 mt-2 text-lg">
    Enjoy best curated games at your fingertips.
  </p>
  <ButtonComponent title="Play"/>
</div>

<div className="flex justify-center md:justify-end max-w-5xl">
  <img
    src="/example_game.png"
    alt="Two people on bean bags"
    className="w-full max-w-md"
  />
</div>

</div>
  )
}

