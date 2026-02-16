import Slider from "@/conponents/Slider/Slider";
import Pagetitel from "@/conponents/Pagetitel/Pagetitel";
import Answeraisection from "@/conponents/Answeraisection/Answeraisection";
import Appfetchur from "@/conponents/Appfetchur/Appfetchur";
import Bestskan from "@/conponents/Bestskan/Bestskan";
import Imortantpoint from "@/conponents/Imortantpoint/Imortantpoint";
import Navbar from "@/conponents/Navbar/Navbar";

export default function Homepage() {
  return (
    <div className="container mt-5">
      <Pagetitel/>
      <Slider/>
      <Answeraisection/>
      <Appfetchur/>
      <Bestskan/>
      <Imortantpoint/>
      <Navbar/>
    </div>
  );
}
