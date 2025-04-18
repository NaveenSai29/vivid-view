"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
    agree: false
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    phone: false,
    message: false,
    agree: false
  });

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: false
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = { ...errors };

    // Validate each field
    if (!formData.name.trim()) {
      newErrors.name = true;
      isValid = false;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = true;
      isValid = false;
    }
    if (!formData.subject.trim()) {
      newErrors.subject = true;
      isValid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = true;
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = true;
      isValid = false;
    }
    if (!formData.agree) {
      newErrors.agree = true;
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      // Submit the form if all validations pass
      const form = e.target as HTMLFormElement;
      form.submit();
    }
  };

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Send a message
              </h2>

              <form
                action="https://formbold.com/s/obGQQ"
                method="POST"
                onSubmit={handleSubmit}
              >
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full border-b bg-transparent pb-3.5 focus:placeholder:text-black focus-visible:outline-none dark:focus:placeholder:text-white lg:w-1/2 ${
                      errors.name 
                        ? 'border-red-500 focus:border-red-500 dark:border-red-500 dark:focus:border-red-500' 
                        : 'border-stroke focus:border-waterloo dark:border-strokedark dark:focus:border-manatee'
                    }`}
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full border-b bg-transparent pb-3.5 focus:placeholder:text-black focus-visible:outline-none dark:focus:placeholder:text-white lg:w-1/2 ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500 dark:border-red-500 dark:focus:border-red-500' 
                        : 'border-stroke focus:border-waterloo dark:border-strokedark dark:focus:border-manatee'
                    }`}
                  />
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full border-b bg-transparent pb-3.5 focus:placeholder:text-black focus-visible:outline-none dark:focus:placeholder:text-white lg:w-1/2 ${
                      errors.subject 
                        ? 'border-red-500 focus:border-red-500 dark:border-red-500 dark:focus:border-red-500' 
                        : 'border-stroke focus:border-waterloo dark:border-strokedark dark:focus:border-manatee'
                    }`}
                  />

                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full border-b bg-transparent pb-3.5 focus:placeholder:text-black focus-visible:outline-none dark:focus:placeholder:text-white lg:w-1/2 ${
                      errors.phone 
                        ? 'border-red-500 focus:border-red-500 dark:border-red-500 dark:focus:border-red-500' 
                        : 'border-stroke focus:border-waterloo dark:border-strokedark dark:focus:border-manatee'
                    }`}
                  />
                </div>

                <div className="mb-11.5 flex">
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full border-b bg-transparent focus:placeholder:text-black focus-visible:outline-none dark:focus:placeholder:text-white ${
                      errors.message 
                        ? 'border-red-500 focus:border-red-500 dark:border-red-500 dark:focus:border-red-500' 
                        : 'border-stroke focus:border-waterloo dark:border-strokedark dark:focus:border-manatee'
                    }`}
                  ></textarea>
                </div>

                <div className="flex flex-wrap gap-4 xl:justify-between">
                  <div className="mb-4 flex md:mb-0">
                    <input
                      id="default-checkbox"
                      name="agree"
                      type="checkbox"
                      checked={formData.agree}
                      onChange={handleChange}
                      className="peer sr-only"
                    />
                    <span className={`border-gray-300 bg-gray-100 text-blue-600 dark:border-gray-600 dark:bg-gray-700 group mt-2 flex h-5 min-w-[20px] items-center justify-center rounded peer-checked:bg-primary ${
                      errors.agree ? 'border-red-500' : ''
                    }`}>
                      <svg
                        className="opacity-0 peer-checked:group-[]:opacity-100"
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.70704 0.792787C9.89451 0.980314 9.99983 1.23462 9.99983 1.49979C9.99983 1.76495 9.89451 2.01926 9.70704 2.20679L4.70704 7.20679C4.51951 7.39426 4.26521 7.49957 4.00004 7.49957C3.73488 7.49957 3.48057 7.39426 3.29304 7.20679L0.293041 4.20679C0.110883 4.01818 0.0100885 3.76558 0.0123669 3.50339C0.0146453 3.24119 0.119814 2.99038 0.305222 2.80497C0.490631 2.61956 0.741443 2.51439 1.00364 2.51211C1.26584 2.50983 1.51844 2.61063 1.70704 2.79279L4.00004 5.08579L8.29304 0.792787C8.48057 0.605316 8.73488 0.5 9.00004 0.5C9.26521 0.5 9.51951 0.605316 9.70704 0.792787Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <label
                      htmlFor="default-checkbox"
                      className={`flex max-w-[425px] cursor-pointer select-none pl-5 ${
                        errors.agree ? 'text-red-500' : ''
                      }`}
                    >
                      By clicking Checkbox, you agree to use our "Form" terms
                      And consent cookie usage in browser.
                    </label>
                  </div>

                  <button
                    type="submit"
                    aria-label="send message"
                    className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
                  >
                    Send Message
                    <svg
                      className="fill-white"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                        fill=""
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Rest of your existing code remains unchanged */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Find us
              </h2>

              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Our Loaction
                </h3>
                <p>Workafella, 10, Gandhi High Rd, Nungambakkam, Chennai - 600036 </p>
              </div>
              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Email Address
                </h3>
                <p>
                  <a href="#">naveenselvam33@gmail.com</a>
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Phone Number
                </h4>
                <p>
                  <a href="#">+91 9489549180</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;