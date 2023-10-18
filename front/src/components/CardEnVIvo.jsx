import { PerfilDefault, UsusariosSala } from "./svg/Svgs"
import { Medalla } from "./svg/Svgs"
import { LenguajeSala } from "./svg/Svgs"

export default function CardEnVivo() {
  return (
    <span
      className="max-w-sm m-2 w-[21rem] h-[6.5rem] text-sm border border-black rounded-lg overflow-hidden transform hover:scale-95 transition-transform cursor-pointer"
      href="#"
    >
      <div className="m-1">
        <div className="flex justify-between">
        <h1 className="mb-2 font-bold">Conversación laboral</h1>
          <Medalla/>
        </div>
        <div className="flex flex-row">
          <PerfilDefault/>
          <p className="m-2">Nombre Usuario</p>
        </div>
          <div className="flex justify-end gap-1">
          <LenguajeSala/>
            <p>EN</p>
            <UsusariosSala/>
            <p>12</p>
          </div>
      </div>
    </span>
  )
}