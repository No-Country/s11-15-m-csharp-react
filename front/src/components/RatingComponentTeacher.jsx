import { TeacherRating } from "./TeacherRating";
import { Mountain } from "./svg/Svgs";

export const RatingComponentTeacher = () => {
  return (
    <>
      <div className=" bg-gray-300 rounded-full w-40 h-40 flex items-center justify-center mt-12">
        <Mountain />
      </div>
      <div className=" px-12 mt-8">
        <p className="text-center font-normal text-base">
          ¿Cómo fue tu experiencia con el
          <span className="font-medium"> Profesor</span>?
        </p>
      </div>
      <TeacherRating />
    </>
  );
};