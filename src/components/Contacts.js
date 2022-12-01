import React from "react";
import profile from "../assets/profile.jpg";
import Contact from "./Contact";
import profile1 from "../assets/face1.jpg";
import profile2 from "../assets/face2.jpg";
import profile3 from "../assets/face3.jpg";

export const Contacts = () => {
  const contacts = [
    { img: profile, name: "Cool Kids", message: "Let's go out tonight" },
    { img: profile1, name: "Vinh", message: "May gio roi?" },
    { img: profile2, name: "Hoa", message: "An com chua?" },
    { img: profile3, name: "Phu", message: "Di giat do di" },
    { img: profile, name: "Cool Kids", message: "Let's go out tonight" },
    { img: profile1, name: "Vinh", message: "May gio roi?" },
    { img: profile2, name: "Hoa", message: "An com chua?" },
    { img: profile3, name: "Phu", message: "Di giat do di" },
  ];
  return (
    <div>
      <div className="px-4">
        {contacts.map((contact) => (
          <Contact
            img={contact.img}
            name={contact.name}
            message={contact.message}
          />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
