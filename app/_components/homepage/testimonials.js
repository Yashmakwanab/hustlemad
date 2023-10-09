import Carousel from "..homepage/Carousel";

export default function Testimonials() {
// const items = [
//     '../../../public/Images/avtar/Test_Avtar_1.svg',
//     '../../../public/Images/avtar/Test_Avtar_2.svg', 
//     '../../../public/Images/avtar/Test_Avtar_3.svg',
//     '../../../public/Images/avtar/Test_Avtar_4.svg',
//     '../../../public/Images/avtar/Test_Avtar_5.svg',
//   ];

var items = [1, 2, 3, 4, 5]
    return (
      <div>
       <main className={`flex min-h-screen flex-col items-center justify-between  bg-white`}>
     <h1 className="text-center md:mt-24 text-5xl">Our Clients love us 3,000</h1>
    </main>
    <div>
      <Carousel items={items} active={0}/>
    </div>
       
  
      </div>
    );
  }