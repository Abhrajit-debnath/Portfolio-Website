import { motion } from "framer-motion";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [formdata, setformdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    message: "",
  });

  const [status, setstatus] = useState("");
  const [errors, seterrors] = useState([]);

  const handleChange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setstatus("Sending...");
    seterrors([]);

    try {
      const response = await axios.post(
        "https://abhrajit-debnath-dsam0rblb-abhrajit-debnaths-projects.vercel.app/send-mail",
        formdata
      );

      if (response.status === 200) {
        toast.success("Message Sent Successfully! ✅");
        setstatus("Message Sent Successfully");
        setformdata({
          firstName: "",
          lastName: "",
          email: "",
          mobileNumber: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message. ❌");
        setstatus("Failed to send message.");
      }
    } catch (error) {
      setstatus("Failed to send message.");
      seterrors([error.response?.data?.message || "Something went wrong!"]);
      toast.error(error.response?.data?.message || "Something went wrong! ❌");
    }
  };

  return (
    <section id="contact" className="p-6 w-full my-36">
      <motion.h2
        className="text-white pb-6 text-[35px] font-primary font-bold text-left"
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, ease: "easeInOut" },
        }}
      >
        Leave a mail !
      </motion.h2>
      <div className="flex flex-col md:flex-row w-full justify-between gap-8 items-center relative">
        <div className="w-50 h-50 bg-circle absolute rounded-full blur-[190px] top-90 -right-5 -z-1 mid-md:top-50 mid-md:w-50 mid-md:h-60 mid-md:blur-[200px] xl:top-86 lg:right-10"></div>
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 0.6 }}
          className="left hidden  xl:block xl:w-1/2 border border-gray-500 rounded-xl p-6"
        >
          <div className="flex gap-5 items-center px-6 py-10 border-gray-500 border-b-2">
            <div className="icon w-15 h-15 bg-primary rounded-full flex justify-center items-center text-white">
              <LocalPhoneIcon sx={{ fontSize: { md: 30 } }} />
            </div>
            <div className="text-white font-primary">
              <h3 className="font-semibold text-xl pb-2">Phone</h3>
              <h4 className="text-sm">+917044349126</h4>
            </div>
          </div>
          <div className="flex gap-5 items-center px-6 py-10 border-gray-500 border-b-2">
            <div className="icon w-15 h-15 bg-primary rounded-full flex justify-center items-center text-white">
              <EmailIcon sx={{ fontSize: { md: 30 } }} />
            </div>
            <div className="text-white font-primary">
              <h3 className="text-xl font-semibold pb-2">Email</h3>
              <h4 className="text-sm">abhrajitdebnath.cs@gmail.com</h4>
            </div>
          </div>
          <div className="flex gap-5 items-center px-6 py-10">
            <div className="icon w-15 h-15 bg-primary rounded-full flex justify-center items-center text-white">
              <LocationOnIcon sx={{ fontSize: { md: 30 } }} />
            </div>
            <div className="text-white font-primary">
              <h3 className="text-xl font-semibold pb-2">Location</h3>
              <p className="text-sm">
                Subhasopally,Nayeb bagan, <br /> khalisani,
                Chandannagar,Hooghly, Pin - 712138
              </p>
            </div>
          </div>
        </motion.div>
        <motion.form
          initial={{ x: 20 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 0.6 }}
          className="form w-full xl:w-1/2 border border-gray-500 rounded-xl p-6"
          onSubmit={handleSubmit}
        >
          {errors.length > 0 && (
            <ul>
              {errors.map((errors, idx) => {
                <li key={idx}>{errors}</li>;
              })}
            </ul>
          )}
          <div className="form-body text-white flex flex-col gap-6">
            {/* Name Fields */}
            <div className="flex flex-col md:flex-row gap-5">
              <input
                className="w-full px-4 py-3 border border-gray-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-800"
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formdata.firstName}
                onChange={handleChange}
                required
              />
              <input
                className="w-full px-4 py-3 border border-gray-500 rounded-lg  text-white focus:outline-none focus:ring-2 focus:ring-blue-800"
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formdata.lastName}
                onChange={handleChange}
                required
              />
            </div>
            {/* Email & Phone Fields */}
            <div className="flex flex-col md:flex-row gap-5">
              <input
                className="w-full px-4 py-3 border border-gray-500 rounded-lg  text-white focus:outline-none focus:ring-2 focus:ring-blue-800"
                type="email"
                placeholder="Enter Email Address"
                name="email"
                value={formdata.email}
                onChange={handleChange}
                required
              />
              <input
                className="w-full px-4 py-3 border border-gray-500 rounded-lg  text-white focus:outline-none focus:ring-2 focus:ring-blue-800"
                type="tel"
                placeholder="Enter Mobile Number"
                name="mobileNumber"
                value={formdata.mobileNumber}
                onChange={handleChange}
                required
              />
            </div>
            {/* Message Section */}
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="mb-1 text-gray-300 font-primary"
              >
                Message
              </label>
              <textarea
                className="w-full h-32 px-4 py-2 border border-gray-500 rounded-lg  text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                name="message"
                id="message"
                placeholder="Type Your Message Here..."
                value={formdata.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <button className="w-40 rounded-full bg-gradient-to-r from-primary to-secondary py-2 mt-3 text-white font-semibold transition duration-300 hover:opacity-90">
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
