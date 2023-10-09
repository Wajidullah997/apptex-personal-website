import React, { useState } from "react";

// import Note from "./images/notes.png";
// import Frame from "./images/Frame 44.png";
const Menu = [
  {
    id: 1,
    image: "./assests/Frame 44.png",
    name: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur natus nisi voluptas. Atque, laborum molestiae.",
  },
  {
    id: 2,
    image: "./assests/Frame2.png",
    name: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur natus nisi voluptas. Atque, laborum molestiae.",
  },
  {
    id: 3,
    image: "./assests/Frame3.png",
    name: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur natus nisi voluptas. Atque, laborum molestiae.",
  },
  {
    id: 4,
    image: "./assests/Frame4.png",
    name: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur natus nisi voluptas. Atque, laborum molestiae.",
  },
];



const OurServices = () => {
  const [items, setItems] = useState(Menu);

  return (
    <section className="w-full md:w-[100%] bg-blue-50 md:mt-[-80px] py-8 px-4 md:py-16 md:px-0">
      <div className="max-w-[80%] mx-auto">
        <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
          <div className="md:w-[48%] w-full">
            <h3 className="text-[#30A8FF] font-bold text-2xl">Our Services</h3>
            <p className="text-gray-500 mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
           eum ab sequi expedita dignissimos error culpa ratione molestias
               animi quia. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Fugit eum ab sequi expedita dignissimos error culpa ratione
               molestias animi quia.Lorem, ipsum dolor sit amet consectetur
               adipisicing elit. Fugit eum ab sequi expedita dignissimos error
               culpa ratione molestias animi quia.
 
            </p>
          </div>
          <div className="md:w-[48%] w-full grid md:grid-cols-2 gap-4 grid-rows-1">
            {items.map((elem) => {
              const { id, image, name, description } = elem;
              return (
                <div key={id} className="bg-white rounded-lg p-3 w-[100%] ">
                  <img
                    src={image}
                    alt="note"
                    className="w-[50px] bg-blue-50 hover:bg-blue-400 hover:text-white rounded-lg"
                  />
                  <h4 className="mt-3 font-bold text-[#30A8FF]">{name}</h4>
                  <p className="mt-3 text-gray-400 mb-3">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
