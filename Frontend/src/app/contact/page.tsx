import { BackgroundBeamsDemo } from "@/components/BackgroundBeamsDemo";
import { ContactUsFormDemo } from "@/components/ContactUsFormDemo";

export default function Contact() {
  return <div className="flex-col space-y-12 ">
  <BackgroundBeamsDemo />
  <ContactUsFormDemo />
  <div className="flex flex-col items-center justify-center space-y-4  mx-auto p-8 my-4 ">
      <div className="flex text-3xl md:text-5xl font-bold dark:text-white justify-center text-neutral-600">Location</div>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.8539720755575!2d55.295396974491176!3d25.258528129215463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f433f96f4e223%3A0x31f07101d38dccb8!2sSharaf%20DG%20Metro%20Station%20Exit%204.!5e1!3m2!1sen!2snp!4v1718137887403!5m2!1sen!2snp" 
        width={1000} 
        height={400} 
        style={{
          border: 0, 
          backgroundColor: "#525252", 
          display: "flex", 
          justifyContent: "center"
        }}  
        loading="lazy"
      ></iframe>
    </div>
</div>;
}
