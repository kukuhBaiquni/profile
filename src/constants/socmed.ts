
export type Socmed = {
  text: string;
  link: string
  color: string
  icon: string;
}

const socmed: Socmed[] = [
  {
    text: "+62 821 1903 0614",
    link: "https://wa.me/+6282119030614",
    color: "bg-green-500",
    icon: "bx bxl-whatsapp text-xl"
  },
  {
    text: "Facebook",
    link: "https://www.facebook.com/kukuhbaiquni/",
    color: "bg-blue-500",
    icon: "bx bxl-facebook text-xl"
  },
  {
    text: "Github",
    link: "https://github.com/kukuhBaiquni",
    color: "bg-black",
    icon: "bx bxl-github text-xl"
  },
  {
    text: "Linked In",
    link: "https://www.linkedin.com/in/kukuh-baiquni-a14580163/",
    color: "bg-blue-600",
    icon: "bx bxl-linkedin text-xl"
  },
  {
    text: "kukuh.baiquni@gmail.com",
    link: "mailto:kukuh.baiquni@gmail.com",
    color: "bg-red-500",
    icon: "bx bxl-google text-xl"
  }
];

export default socmed;